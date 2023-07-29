import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/vladyslav-honcharov-148a43261/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a
          href="mailto:vlad.goncharov24.7@gmail.com
            "
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon />
        </a>

        <a href="https://t.me/vladyslafff" target="_blank" rel="noreferrer">
          <TelegramIcon />
        </a>
      </div>
      <p className="location">
        <LocationOnIcon />
        Kyiv, Ukraine
      </p>
    </div>
  );
}

export default Footer;
