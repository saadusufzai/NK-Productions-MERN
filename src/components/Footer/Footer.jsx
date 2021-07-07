import React from "react";
import classes from "./Footer.module.css";

import logo from "../../assets/images/logoWhite2.png";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className={classes.footer}>
      {/* <img classname={classes.logo} src={logo} alt="epo logo"/> */}
      <div className={classes.innerFooter}>
        {/* Contact */}
        <ul className={classes.contact}>
          <h5>Contact Us</h5>
          <li>
            <PhoneIcon fontSize="small" className={classes.icon} /> +61 412 641
            138
          </li>
          <li>
            <EmailIcon fontSize="small" className={classes.icon} />{" "}
            info@nkpro.com.au
          </li>
          <li>
            <LanguageIcon fontSize="small" className={classes.icon} />{" "}
            www.nkpro.com.au
          </li>
        </ul>
        {/* Links */}
        <ul className={classes.feild}>
          <h5>Links</h5>
          <li>
            <a href="/about">About</a>{" "}
          </li>
          <li>
            <a href="/gallery">Gallery</a>{" "}
          </li>
          <li>
            <a href="/contact">Contact</a>{" "}
          </li>
          <li>
            <a href="/booking">Book Now</a>{" "}
          </li>
        </ul>

        {/* Logo */}
        <img src={logo} alt="nk production Australia Logo" />

        {/* Social Contacts */}
        <ul className={classes.feild}>
          <h5>Social Sites</h5>
          <li>
            <a target="blank" href="https://www.facebook.com/NKVPH/">
              Facebook
            </a>
          </li>
          <li>
            <a target="blank" href="https://instagram.com/nk_productionsau/">
              Instagram
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.youtube.com/channel/UCogAeWI8NyZpCYjiErQZkcA"
            >
              YouTube
            </a>
          </li>

          <li>
            <a target="blank" href="#">
              Skype
            </a>
          </li>
        </ul>
        {/* Address */}
        <ul style={{ width: "95%" }} className={classes.feild}>
          <h5>Address</h5>
          <li>NK Photography Stdney , Australia the best in town</li>
          <h5>Follow Us</h5>
          <a target="blank" href="https://www.facebook.com/NKVPH/">
            {" "}
            <FacebookIcon
              className={classes.socialIcon}
              fontSize="large"
              color="#fff"
            />
          </a>

          <a target="blank" href="https://instagram.com/nk_productionsau">
            <InstagramIcon
              className={classes.socialIcon}
              fontSize="large"
              color="#1111"
            />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCogAeWI8NyZpCYjiErQZkcA"
          >
            <YouTubeIcon
              className={classes.socialIcon}
              fontSize="large"
              color="#fff"
            />
          </a>
        </ul>
      </div>
      <div className={classes.copyright}>
        {/* <img src={left} alt="epo man with tree"/> */}
        <h2 className={classes.text}>
          Copyright &copy;2020-2021 | All rights reserved by NK Productions |
          Designed with ♥ by{" "}
          <a
            target="blank"
            style={{
              color: "rgb(218, 214, 214)",
              textDecoration: "none",
              fontWeight: "100",
              marginLeft: "3px",
            }}
            href="https://www.linkedin.com/in/saadusufzai/"
          >
            {" "}
            Saad Usufzai
          </a>{" "}
        </h2>
        {/* <img src={right} alt="epo man with tree"/> */}
      </div>
    </div>
  );
};

export default Footer;
