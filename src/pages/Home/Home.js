import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Ayan_Biswas_Developer.pdf"

import "./home.css";
function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="container home-content">
        <h2>Hello, I am AYAN BISWAS</h2>
        <h1>
          <Typewriter
            options={{
              strings: ["Frond-End Developer", "React JS Developer","Software Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=1234567890"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Ayan_Biswas_Developer.pdf">
                My Resume
              </a>
            </div>
      </div>
    </div>
  );
}

export default Home;
