import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import { useSelector } from "react-redux";
import translations from "../helpers/translations"; // Импортируйте файл с переводами

function Home() {
  const currentLanguage = useSelector((state) => state.language.language);

  return (
    <div className="home">
      <div className="about">
        <h2>{translations[currentLanguage].hello}</h2>
        <div className="prompt">
          <p>{translations[currentLanguage].developerDescription}</p>
          <a
            href="https://www.linkedin.com/in/vladyslav-honcharov-148a43261/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a href="https://t.me/vladyslafff" target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>
          <a
            href="mailto:vlad.goncharov24.7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>

          <a
            href="https://github.com/Vladyslav-Honcharov"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>{translations[currentLanguage].skillsTitle}</h1>
        <ol className="list">
          <li className="item">
            <h2>{translations[currentLanguage].hardSkillsTitle}</h2>
            <span>{translations[currentLanguage].hardSkillsList}</span>
          </li>
          <li className="item">
            <h2>{translations[currentLanguage].softSkillsTitle}</h2>
            <span>{translations[currentLanguage].softSkillsList}</span>
          </li>
          <li className="item">
            <h2>{translations[currentLanguage].techKnowledgesTitle}</h2>
            <span>{translations[currentLanguage].techKnowledgesList}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
