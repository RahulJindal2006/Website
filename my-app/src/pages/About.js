import React from 'react';
import Pic from '../assets/FormalPicture.jpg';
Import Video 1 from _____ //import a video (optional)
Import Video 2 from _____  //import a video (optional)
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="topLeft">
        <img src={Pic} alt="Formal" className="image" />
      </div>
      <div className="topRight">
        <h1> ABOUT ME</h1>
        <p>
          INSERT TEXT HERE 
        </p>
      </div> 
      <div className="bottomLeft">
        <video controls className="video">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="bottomRight">
        <video controls className="video">
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default About;
