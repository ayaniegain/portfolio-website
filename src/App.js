import "./App.css";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import AnimatedCursor from "react-animated-cursor";
import About from "./pages/About/About";
import Techstack from "./pages/TechStack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Educations";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const [theme] = useTheme();
  return (
    <div className="App" id={theme}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="165,42,42"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
        <div className="footer pb-3 ms-3">
          <marquee width="60%" direction="right">
            <h4>Made With 😍 Ayan Biswas &copy; 2023</h4>
          </marquee>
        </div>
        <ScrollToTop smooth color="#6f00ff" />
      </div>
    </div>
  );
}

export default App;
