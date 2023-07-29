import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          contentStyle={{ background: "#3e497a", color: "#fff" }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Railway
          </h3>
          <p> Faculty of Railway Transportation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          contentStyle={{ background: "#3e497a", color: "#fff" }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Dan.IT Education</h3>

          <h4 className="vertical-timeline-element-subtitle">
            React Front-end
          </h4>

          <a href="#" className="certificate">
            Certificate
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          contentStyle={{ background: "#e9d35b", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Affiliate-manager, Media Buyer
          </h3>

          <p>
            <ul>
              <li> Targeted advertising FB, UAC</li>
              <li> Working with the company's partners</li>
              <li> Management of a small part of the command</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{ background: "#e9d35b", color: "#000" }}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development on freelance
          </h3>

          <p>Development of landing pages</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
