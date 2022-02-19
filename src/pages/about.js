import React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function About() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <h1>Über mich</h1>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default About;
