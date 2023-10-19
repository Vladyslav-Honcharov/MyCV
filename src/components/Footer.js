import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../styles/Footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const currentLanguage = useSelector((state) => state.language.language);

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
        {currentLanguage === "en" ? "   Kyiv, Ukraine" : "Київ, Україна"}
      </p>
    </div>
  );
}

export default Footer;
