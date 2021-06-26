import React, { useState } from "react";
import styles from "./Booking.module.css";
import Navbar from "../Navbar/Navbar";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    
  },
}));

const Booking = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  return (
    <div className={styles.booking}>
      <Navbar />

      <div className={styles.box}>
        <div className={styles.left}>
          <h2>Book Your Event Now</h2>
          <form className={classes.root}>
            <h3>Personal Details</h3>
            <p>Kindly fill your personal details</p>
            <TextField id="outlined" label="Full Name" />
            <TextField id="outlined" label="Email" /> <br />
            <TextField id="outlined" label="Phone" /> <br /> <br />
            <h3>Event Details</h3>
            <p>Kindly fill your event's details</p>
            <TextField id="outlined" label="Event Type" />
            <TextField id="outlined" label="No of Hours" type="number" />
            <br />
            <br />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker
                label="Pick Date & Time"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
            <Button className={styles.btn} variant="contained" color="secondary">
              Submit
            </Button>
          </form>
        </div>
        <div className={styles.right}>
            <h1>Excellence</h1>
            <h2> at every take</h2>
        </div>
      </div>
    </div>
  );
};

export default Booking;
