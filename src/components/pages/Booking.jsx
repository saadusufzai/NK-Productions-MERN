import React, { useState } from "react";
import styles from "./Booking.module.css";
import Navbar from "../Navbar/Navbar";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Booking = () => {
  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const url = "https://nk-backend.herokuapp.com";

  const handelSubmit = (e) => {
    e.preventDefault();

    // Request body
    const data = JSON.stringify({
      fullName,
      email,
      eventType,
      hours,
      date,
      phone,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(`${url}/api/booking`, data, config)
      .then((res) => {
        toast.success(
          "Thanks for booking with us. Our team will reach you soon on your phone."
        );
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err.response.data.msg);
      });
  };

  return (
    <div className={styles.booking}>
      <Navbar />

      <div className={styles.box}>
        <div className={styles.left}>
          <h2>Book Your Event Now</h2>
          <form className={classes.root}>
            <h3>Personal Details</h3>
            <p>Kindly fill your personal details</p>
            <TextField
              onChange={(e) => setFullName(e.target.value)}
              id="outlined"
              label="Full Name"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id="outlined"
              label="Email"
            />{" "}
            <br />
            <TextField
              onChange={(e) => setPhone(e.target.value)}
              id="outlined"
              label="Phone"
            />{" "}
            <br /> <br />
            <h3>Event Details</h3>
            <p>Kindly fill your event's details</p>
            <TextField
              onChange={(e) => setEventType(e.target.value)}
              id="outlined"
              label="Event Type"
            />
            <TextField
              onChange={(e) => setHours(e.target.value)}
              id="outlined"
              label="No of Hours"
              type="number"
            />
            <br />
            <br />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker
                label="Pick Date & Time"
                value={date}
                onChange={setDate}
              />
            </MuiPickersUtilsProvider>
            <Button
              onClick={handelSubmit}
              className={styles.btn}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className={styles.right}>
          <Fade>
            {" "}
            <h1>Excellence</h1>
          </Fade>
          <Fade bottom>
            {" "}
            <h2> at every take</h2>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Booking;
