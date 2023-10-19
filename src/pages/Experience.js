// Experience.js
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { useSelector } from "react-redux";
import translations from "../helpers/translations"; // Импортируйте файл с переводами

function Experience() {
  const currentLanguage = useSelector((state) => state.language.language);

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          contentStyle={{
            background: "#3e497a",
            color: "#fff",
            fontFamily: "Tektur, cursive",
          }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {translations[currentLanguage].university}
          </h3>
          <p> {translations[currentLanguage].faculty}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          contentStyle={{
            background: "#3e497a",
            color: "#fff",
            fontFamily: "Tektur, cursive",
          }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {translations[currentLanguage].danItEducation}
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            {translations[currentLanguage].reactFrontEnd}
          </h4>

          <a
            href="https://dan-it.com.ua/certificates/frontend/vladyslav-honcharov/"
            className="certificate"
            target="_blank"
          >
            {translations[currentLanguage].certificate}
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-2023"
          iconStyle={{
            background: "#e9d35b",
            color: "#fff",
            fontFamily: "Tektur, cursive",
          }}
          contentStyle={{ background: "#e9d35b", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "Tektur, cursive" }}
          >
            {translations[currentLanguage].affiliateManager}
          </h3>

          <p>
            <ul style={{ fontFamily: "Tektur, cursive" }}>
              <li> {translations[currentLanguage].targetedAdvertising}</li>
              <li> {translations[currentLanguage].workingWithPartners}</li>
              <li> {translations[currentLanguage].teamManagement}</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{
            background: "#e9d35b",
            color: "#000",
            fontFamily: "Tektur, cursive",
          }}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {translations[currentLanguage].webDevelopmentFreelance}
          </h3>

          <p>{translations[currentLanguage].developmentOfLandingPages}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
