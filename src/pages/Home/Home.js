import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Ayan_Biswas_Developer.pdf"
import "./home.css";
import { useTheme } from "../../context/ThemeContext.jsx";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

function Home() {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
      <div className="container home-content">
      <Fade right>
        <h2>Hello 👋, I am AYAN BISWAS</h2>
        <h1>
          <Typewriter
            options={{
              strings: ["Frond-End Developer", "React JS Developer","Software Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
          
        </Fade>
        <Fade button>
        <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9066357988"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Ayan_Biswas_Developer.pdf">
                My Resume
              </a>
            </div>
        </Fade>

      </div>
    </div>
  );
}

export default Home;
