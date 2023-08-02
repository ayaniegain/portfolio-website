import './App.css';
import Layout from './components/layout/Logout';
import AnimatedCursor from "react-animated-cursor";
import About from './pages/About/About';
import Techstack from './pages/TechStack/Techstack';
import Projects from './pages/Projects/Projects';
import Education from './pages/Educations/Educations';
import WorkExp from './pages/workExp/WorkExp';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
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
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
