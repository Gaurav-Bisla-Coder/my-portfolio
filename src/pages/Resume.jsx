import React from "react";

const Resume = () => {
  return (
    <div className="container mt-5 bg-secondary text-center">
      <h2>My Resume</h2>
      <link to="/assets/Gaurav_ReactJS_Fresher.pdf" download className="btn btn-success mt-3 bg-primary">Download Resume</link>
    </div>
  );
};

export default Resume;