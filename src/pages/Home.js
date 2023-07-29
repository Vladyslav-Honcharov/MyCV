import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import TelegramIcon from "@material-ui/icons/Telegram";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Vladyslav</h2>
        <div className="prompt">
          <p>A frontend developer with a passion for learning and creating.</p>
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
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Hard skills</h2>
            <span>
              React, Redux, JavaScript, CSS/SCSS HTML, NPM, BootStrap,
              MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Soft skills</h2>
            <span>
              Multitasking, Analytical skills, Time management ,Team player
            </span>
          </li>
          <li className="item">
            <h2>Tech knowledges</h2>
            <span>
              Node.js, Express.js, Webpack/Gulp ,Git, Formik, Yup Material UI,
              Boostrap
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
