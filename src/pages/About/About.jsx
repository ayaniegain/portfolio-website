import React from "react";
import "./About.css";
import profilepic from "../../assets/img/profile.svg";

// import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      {/* <Jump> */}
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilepic} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am a highly skilled and motivated BE Computer Science graduate
              with 1.1 years of experience in frontend technology. Proficient in
              HTML, CSS, Bootstrap, JavaScript, TypeScript, and ES6, I have a
              strong understanding of ReactJS, Redux, and Angular. My passion
              for creating intuitive and visually appealing user interfaces is
              complemented by excellent communication and collaboration skills,
              making me an effective team player. With a drive for innovation
              and a keen eye for detail, I am committed to delivering
              exceptional user experiences and contributing to the success of
              any project I undertake. I am eager to embark on new challenges
              and actively seeking opportunities to apply my technical expertise
              and creativity in a rewarding professional environment.
            </p>
          </div>
        </div>
      </div>
      {/* </Jump> */}
    </>
  );
};

export default About;
