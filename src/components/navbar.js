import React, { useState } from "react";
import "../styles/styles.scss";
import { Link } from "gatsby";

function Navbar() {
const [click, setClick] = useState(false);
const handleClick= () => {
  setClick(!click);
}

  return (
    <React.Fragment>
      <nav className="navbar p-5 is-size-4">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Demo Website + Blog
          </Link>
          <button onClick={handleClick} className={click? "navbar-burger is-active" : "navbar-burger"} aria-label="menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="navbar" className={click? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about/">
              Über mich
            </Link>
            <Link className="navbar-item" to="/blog/">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
