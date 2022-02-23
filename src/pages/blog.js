import React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Blog() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="main-content">
      <h1>Blog </h1>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Blog;
