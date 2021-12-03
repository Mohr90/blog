import React from "react";
import "../styles/styles.scss";
import { Link } from "gatsby";

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar p-5 is-size-4">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            {" "}
            Demo Website + Blog
          </Link>
        </div>
        <div id="navbar" className="navbar-menu">
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
