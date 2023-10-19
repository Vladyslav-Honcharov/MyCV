import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import LinkIcon from "@material-ui/icons/Link";
import { useSelector } from "react-redux";

function ProjectDisplay() {
  const currentLanguage = useSelector((state) => state.language.language);
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href={project.link} target="_blanck">
        <img src={project.image} />
      </a>
      <p>
        <b>{currentLanguage === "en" ? "Skills" : "Технології"} :</b>{" "}
        {project.skills}
      </p>
      <div>
        <a href={project.github} target="_blanck">
          <GitHubIcon />
        </a>
        <a href={project.link} target="_blanck">
          <LinkIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
