import React from "react";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="overlay">
        <h1>Hey, Welcome to my portfolio website</h1>
        <p>Front-End Developer | ReactJS | JavaScript | Bootstrap</p>
        <div className="button-group">
          <link to="/assets/Gaurav_ReactJS_Fresher.pdf" className="btn btn-primary">Download Resume</link>
          <link to="https://github.com/Gaurav-Bisla-Coder" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit My GitHub</link>
        </div>
      </div>
    </div>
  );
};

export default Home;