import React from "react";
import "./Menus.css";
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

function Menus({ toggle }) {
  return (
    <>
      {!toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={profilepic} alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout />
                About
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcPortraitMode />
                Work Experince
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" size={25}/>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout title="About"size={25} />
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcReadingEbook title="Education" size={25}/>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcBiotech title="Tech Stack" size={25}/>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcVideoProjector  title="Project" size={25}/>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" size={25}/>
              </div>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcBusinessContact title="Contact" size={25}/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menus;
