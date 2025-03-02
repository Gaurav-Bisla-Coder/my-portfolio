import React from "react";

const Projects = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-4 shadow-sm bg-secondary text-light">
            <h5>E-Commerce Web Application</h5>
            <p>
              Developed a feature-rich e-commerce app with React.js and Redux, including cart and wishlist functionality.
            </p>
            <link to="https://github.com/your-github/ecommerce-project" target="_blank" className="btn btn-primary ">GitHub</link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-4 shadow-sm bg-secondary text-light">
            <h5>News App using RESTful API</h5>
            <p>
              Created a real-time news app that fetches data dynamically from a public News API.
            </p>
            <link to="https://github.com/Gaurav-Bisla-Coder/React-news-api-With-Functionalcomponents" target="_blank" className="btn btn-primary">GitHub</link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-4 shadow-sm bg-secondary text-light">
            <h5>Country Info Website</h5>
            <p>
              Built a country information app that fetches details like name, population, and region using REST API.
            </p>
            <link to="https://github.com/Gaurav-Bisla-Coder/Country-Data-With-Async" target="_blank" className="btn btn-primary">GitHub</link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;