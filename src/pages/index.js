import React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar";
import Bild_1 from "../images/bild1.png";

function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="columns">
          <div className="column">
            <br />
            <br />
            <br />
            <br />
            <h1 className="title is-size-1">Hallo,</h1>
            <h2 className="subtitle is-size-2">
              herzlich Willkommen auf meiner Webseite <br /> und auf meinem Blog
              mit aktuellen News
            </h2>
          </div>
          <div className="column">
            <div className="is-flex is-justify-content-center">
              <img
                src={Bild_1}
                alt={"Web-development"}
                width={1904 / 4}
                height={1904 / 4}
              />
            </div>
          </div>
        </div>p
      </section>
    </React.Fragment>
  );
}

export default Index;
