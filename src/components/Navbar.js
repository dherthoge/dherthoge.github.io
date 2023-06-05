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

      <div className="links">
        <div><Link to="/"> Home </Link></div>
        <div><Link to="/resume"> Resume </Link></div>
        <div><Link to="/relevantCoursework"> Relevant Coursework </Link></div>
      </div>
    </div>
  )
}

export default Navbar;