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
        <Link className="navLink" to="/" > Home </Link>
        <Link className="navLink" to="/resume"> Resume </Link>
        <Link className="navLink" to="/relevantCoursework"> Relevant Coursework </Link>
      </div>
    </div>
  )
}

export default Navbar;