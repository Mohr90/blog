import React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar";
import Bild_1 from "../images/bild1.png";
import Tile from "../components/tile";
import Footer from "../components/footer";

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
        </div>
      </section>
      <section className="hero has-background-light p-4">
        <h1 className="title is-1 has-text-centered">
          Projekte
        </h1>
        <div className="tile is-ancestor is-justify-content-center">
          <div className="tile is-9">
            <div className="tile ">
              <Tile 
              color="has-background-primary-dark has-text-white"
              title="Online Kurse" 
              subtitle="Online KUrse auf Udemy" 
              content=" Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.">
              </Tile>
              <Tile 
              color="has-background-danger-dark has-text-white"
              title="3D-Rendering" 
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.">
              </Tile>
              <Tile 
              color="has-background-info-dark has-text-white"
              title="Webentwicklung" 
              subtitle="Mit einem Bild" 
              >
                 <img
                src={Bild_1}
                alt={"Web-development"}
                width={1904 / 4}
                height={1904 / 4}
              />
              </Tile>
            </div>
          </div>
        </div>
      </section>
      <Footer>

      </Footer>
    </React.Fragment>
  );
}

export default Index;
