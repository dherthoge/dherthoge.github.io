import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h2 className="title">About Me</h2>
      <div className="body">
        <img className="profilePicture bodyBlock" src={require("../images/profile_picture.jpg")} alt="Me in a suit."/>
        <div className="bio bodyBlock">
          <h1>Hello!</h1>
          <p>
            My name is Dylan Herthoge and I am a recent graduate of Indiana University Bloomington where I 
            received my Bachelor of Science in Computer Science with a specialization in Software
            Engineering. While I finish my last few months in Bloomington I am working at Harbor Freight Tools as
            a sales associate; currently I'm looking to start full time in a Software Engineering related
            field by the end of the summer! In my free time I enjoy hiking, biking, and most recently rock climing
            (too many Ultimate Frisbee injuries)!
          </p>

          <div className="socialLinks">
            <a href={require("../images/resume.jpg")} download="Resume of Dylan Herthoge.jpg">Download Resume</a>
            <a href="https://www.linkedin.com/in/dherthoge/">LinkedIn</a>
            <a href="https://github.com/dherthoge">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;