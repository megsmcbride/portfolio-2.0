import React from "react";
import tunesquad from "../images/tunesquad.gif";


function Projects() {
  return (
    <>
  
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-layout"> 

      <div className="projects-image">placeholder</div>
      {/* <img src={tunesquad} alt="tunesquad" /> */}
      <div className="projects-button-container">
        <a className="projects-button">
          <span className="projects-number">1</span> TuneSquad
        </a>
        <a className="projects-button">
          <span className="projects-number">2</span> LooseLeaf
        </a>
        <a className="projects-button">
          <span className="projects-number">3</span> Tweeter
        </a>
        <a className="projects-button">
          <span className="projects-number">4</span> Scheduler
        </a>
        <a className="projects-button">
          <span className="projects-number">5</span> Jungle
        </a>
      </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
