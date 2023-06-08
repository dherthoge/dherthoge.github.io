import React from "react"
import "../styles/Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/dherthoge/"><LinkedInIcon /></a>
        <a href="https://github.com/dherthoge"><GitHubIcon /></a>
      </div>
    </div>
  )
}

export default Footer;