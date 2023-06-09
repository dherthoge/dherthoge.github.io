import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h2 className="title">Resume</h2>
      <div class="content">
        <a href={require("../images/resume.jpg")} download="Resume of Dylan Herthoge.jpg">Download Resume</a>
        <img className="resumePicture" src={require("../images/resume.jpg")} alt="My resume."/>
      </div>
    </div>
  );
}

export default Resume;