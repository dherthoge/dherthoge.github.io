import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {
            setExpandNavbar((expandNavbar) => !expandNavbar);
          }}
        >
          <MenuIcon />
        </button>
      </div>

      <div className="navLinks">
        <div className="navLink"><Link to="/"> <p className="navLinkText">Home</p> </Link></div>
        <div className="navLink"><Link to="/resume"> <p className="navLinkText">Resume</p> </Link></div>
        <div className="navLink"><Link to="/relevantCoursework"> <p className="navLinkText">Relevant Coursework</p> </Link></div>
      </div>
    </div>
  )
}

export default Navbar;