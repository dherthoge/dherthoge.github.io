import React from "react";
import "../styles/Resume.css"

function Resume() {
  return (
    <div className="resume">
      <h2 className="title">Resume</h2>
      <div class="content">
        <a href="images/Resume%20of%20Dylan%20Herthoge.pdf" download="Resume of Dylan Herthoge.pdf">Download Resume</a>
        <img className="resumePicture" src={require("../images/resume.jpg")} alt="My resume."/>
      </div>
    </div>
  );
}

export default Resume;