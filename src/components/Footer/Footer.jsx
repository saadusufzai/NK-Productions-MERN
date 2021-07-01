import React from "react";
import classes from "./Footer.module.css";

import logo from '../../assets/images/logoWhite2.png';    


import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from '@material-ui/icons/Facebook'; 
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
  return (
    <div   id="page-wrap" className={classes.footer}>
      {/* <img classname={classes.logo} src={logo} alt="epo logo"/> */}
      <div className={classes.innerFooter}>
        {/* Contact */}
        <ul className={classes.contact}>
          <h5>Contact Us</h5>
          <li>
            <PhoneIcon fontSize='small' className={classes.icon} /> +61 412 641 138
          </li>
          <li>
            <EmailIcon fontSize='small' className={classes.icon} /> info@nkproduction.com
          </li>
          <li>
            <LanguageIcon fontSize='small' className={classes.icon} /> www.nkproduction.com
          </li>
        </ul>
        {/* Links */}
        <ul className={classes.feild}>
          <h5>Links</h5>
          <li><a href='/about'>About</a> </li>
          <li><a href='/gallery'>Gallery</a> </li>
          <li><a href='/contact'>Contact</a> </li>
          <li><a href='/donate'>Book Now</a> </li>
        </ul>


        {/* Logo */}
        <img src={logo} alt="nk production Australia Logo"/>


        {/* Social Contacts */}
        <ul className={classes.feild}>
          <h5>Social Sites</h5>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">YouTube</a></li>
       
          <li><a href="#">Skype</a></li>
        </ul>
        {/* Address */}
        <ul style={{ width:'95%'}} className={classes.feild}>
          <h5>Address</h5>
          <li >
             NK Photography Stdney , Australia the best in town</li>
             <h5>Follow Us</h5>
             <FacebookIcon className={classes.socialIcon} fontSize='large' color="#fff"/>
             <TwitterIcon className={classes.socialIcon} fontSize='large' color="#1111"/>
             <YouTubeIcon className={classes.socialIcon} fontSize='large' color="#fff"/>
        </ul>
      </div>
      <div className={classes.copyright}>
         {/* <img src={left} alt="epo man with tree"/> */}
          <h2 className={classes.text}>Copyright &copy;2020-2021 | All rights reserved by NK Productions</h2>
         {/* <img src={right} alt="epo man with tree"/> */}

      </div>
    </div>
  );
};

export default Footer;
