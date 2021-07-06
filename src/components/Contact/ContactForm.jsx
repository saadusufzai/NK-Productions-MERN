// import React from 'react'
import styles from './Contact.module.css'
import { Typography } from "@material-ui/core";
import React,{useState} from "react";
import Button from "@material-ui/core/Button";
// import styles from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";
// import img1 from "../../images/form/1.png";
// import img2 from "../../images/form/2.png";
// import img3 from "../../images/form/3.png";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [data, setData] = useState();
  const [open, setOpen] = useState(true);
  const [showText,setShowText] = useState(true);
  
  const handelSubmit = (e)=>{

    e.preventDefault();

    // Request body
    const data = JSON.stringify({
      firstName,
      lastName,
      email,
      message
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post("http://localhost:5000/api/contact", data, config)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setOpen(false)
        // alert.success("Thank you! Your Squad is Registered!");
        toast.success("Thanks for booking with us. Our team will react you soon on your phone.")
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
          })
          console.log(err.response.data.msg)})

     
  };

  

  
  return (
    <div  id="page-wrap" className={styles.form}>
      {showText ? (
        <div className={styles.text}>
          <Typography variant="h4" align="center">
           Have a Query?
          </Typography>
          <Typography variant="h4" align="center">
            Lets Get In Touch Now
          </Typography>
        </div>
      ) : (
        <Typography variant="h3" align="center">
          Contact Us
        </Typography>
      )}
      {/* form */}
        {open? (
      <form onSubmit={handelSubmit} className={styles.contactForm}>
        <div className={styles.row}>
          <TextField
            style={{ marginRight: "10px" }}
            fullWidth
            label="First Name"
            placeholder="First Name"
            multiline
            onChange={(e)=>setFirstName(e.target.value)}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Last Name"
            multiline
            margin="dense"
            onChange={(e)=>setLastName(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Your Email Adress"
            placeholder="youremail@expample.com"
            multiline
            type="email"
            
            fullWidth
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <TextField
            fullWidth
            
            label="Type Your Messege Here"
            placeholder="Write Here..."
            multiline
            onChange={(e)=>setMessage(e.target.value)}
          />
        </div>
        <Button  type='submit' onClick={handelSubmit} className={styles.btn} variant="outlined" color="primary">
          Send
        </Button>
        <div className={styles.bgImages}>
        
        </div>
      </form>): (<h2 style={{textAlign:'center',color:'#fff'}}>Thank You {firstName} for submitting your message </h2>)}
    </div>
  );
};

export default ContactForm;
