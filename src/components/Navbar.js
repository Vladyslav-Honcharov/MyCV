import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/languageSlice";
import translations from "../helpers/translations"; // Импортируйте файл с переводами
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Button } from "@material-ui/core";
import CVFileEN from "../assets/CV_Frontend_Honcharov_Vladyslav.pdf";
import CVFileUA from "../assets/Резюме_frontend_Гончаров_Владислав.pdf";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const toggleLanguage = () => {
    if (currentLanguage === "en") {
      dispatch(setLanguage("ua"));
    } else {
      dispatch(setLanguage("en"));
    }
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">{translations[currentLanguage].home}</Link>
        <Link to="/projects">{translations[currentLanguage].projects}</Link>
        <Link to="/experience">{translations[currentLanguage].experience}</Link>
        <a href={currentLanguage === "en" ? CVFileEN : CVFileUA} download>
          <Button variant="contained" color="success" className="download">
            {translations[currentLanguage].downloadCV}
          </Button>
        </a>
        <Button
          className="language-toggle"
          onClick={toggleLanguage}
          variant="outlined"
        >
          {currentLanguage === "en" ? "🇺🇦" : "🇺🇸"}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
