import React from "react";
import "./Video.css";
import spaceVdo from "../../assets/space.mp4";
import { Link } from "react-router-dom";

function Video() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVdo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy Exlpore</h1>
        <p>Lets explore the univers.</p>
        <div>
          <Link to="#" className="btn">
            Projects
          </Link>
          <Link to="#" className="btn btn-light">
            Launches
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
