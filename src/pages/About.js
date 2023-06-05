import React from 'react';
import "../styles/About.css"

function About() {
  return (
    <div class="about max-width">
      <h2 class="title">About Me</h2>
      <div class="about-content">
        <div class="column left">
          <img src={require("../images/profile_picture.jpg")} alt="Me in a suit."/>
        </div>
        <div class="column right">
          <h1 class="text">Hello.</h1>
          <p class="description">
            My name is Dylan Herthoge and I am a recent graduate of Indiana University Bloomington where I 
            received my Bachelor of Science in Computer Science with a specialization in Software
            Engineering. While I finish my last few months in Bloomington I am working at Harbor Freight Tools as
            a sales associate; currently I'm looking to start full time in a Software Engineering related
            field by the end of the summer! In my free time I enjoy hiking, biking, and most recently rock climing
            (too many Ultimate Frisbee injuries)!
          </p>
          <a href="images/Resume%20of%20Dylan%20Herthoge.pdf" download="Resume of Dylan Herthoge.pdf">Download Resume</a>
          <br/>
          <a href="https://www.linkedin.com/in/dherthoge/">LinkedIn</a>
          <br/>
          <a href="https://github.com/dherthoge">Github</a>
        </div>
      </div>
    </div>
  );
}

export default About;