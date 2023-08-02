import React from "react";
import "./Projects.css";
import project1 from "../../assets/img/resort_vally_project.png"
import project2 from "../../assets/img/movie_app.jpg"
import project3 from "../../assets/img/node_taking_app.png"
// import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        As part of my personal projects, I developed an Interactive Task Manager web application using cutting-edge technologies such as React.js, Node.js, and MongoDB. The application provides a user-friendly and real-time collaborative environment for efficient task and project management. Through this project, I honed my skills in front-end development with React.js, back-end development with Node.js, and database management with MongoDB. Additionally, I implemented features like user authentication, task assignment, and real-time updates using Socket.IO. This project showcases my ability to create modern and functional web applications while integrating various technologies to enhance user experience and productivity.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={project1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Context</span>
                  <span className="card-detail-badge">Router</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Resort Valley website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://resortvalley.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                  src={project2}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Movie search App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://movie-application-search.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fulstack</span>
                  <img
                    src={project3}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Javascript</span>

                  <span className="card-detail-badge">Firebase</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Note taking App</h5>
                  </div>
                  <a className="ad-btn" href="https://notetakingappreact.netlify.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;