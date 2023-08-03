import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import profilepic from "../../assets/img/profile_pic.png";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

function Menus({ toggle }) {
  return (
    <>
      {!toggle ? (
        <>
          <Zoom>
            
          <div className="navbar-profile-pic">
            <img src={profilepic} alt="profile pic" />
          </div>
          </Zoom>
          <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FcPortraitMode />
                  Work Experince
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome size={25} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout size={25} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook size={25} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech size={25} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector size={25} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode size={25} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact size={25} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menus;
