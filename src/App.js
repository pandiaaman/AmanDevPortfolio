import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Patents from "./components/Patents";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import TextFlow from "./components/TextFlow/index.js";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import FlyingBirds from "./components/FlyingBirds";
import FlyingBats from "./components/FlyingBats";
// import LoadingScreen from "./components/LoadingScreen/LoadingScreen.js";

//
// Removed unused image imports
//

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function App() {

  useEffect(() => {
    document.title = "Aman Pandia (amanpandia, pandiaaman) | Full Stack Developer & Software Architect Portfolio";
  }, []);

  return (
    <div className="App">{<MainContent />}</div>
  );
}

const MainContent = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [showBirds, setShowBirds] = useState(false);
  const [showBats, setShowBats] = useState(false);
  const [isDebounced, setIsDebounced] = useState(false);


  // Function to handle theme change and trigger bird/bat animation
  const handleThemeChange = (newDarkMode) => {
    if (isDebounced) return; // Prevent toggling during animation
    // If switching from dark to light (sun is coming out), show birds
    if (darkMode && !newDarkMode) {
      setShowBirds(true);
      setIsDebounced(true);
    }
    // If switching from light to dark (night is coming), show bats
    if (!darkMode && newDarkMode) {
      setShowBats(true);
      setIsDebounced(true);
    }
    setDarkMode(newDarkMode);
  };


  // Handle when bird animation ends
  const handleBirdsAnimationEnd = () => {
    setShowBirds(false);
    setIsDebounced(false);
  };

  // Handle when bat animation ends
  const handleBatsAnimationEnd = () => {
    setShowBats(false);
    setIsDebounced(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Helmet>
          <title>Aman Pandia (amanpandia, pandiaaman) | Full Stack Developer & Software Architect Portfolio</title>
          <meta name="description" content="Aman Pandia (amanpandia, pandiaaman) - Full Stack Developer, Software Architect, and UI/UX Designer with 4+ years experience. Expert in Java, React, Spring Boot, AWS, and Machine Learning. View portfolio, projects, patents, and professional experience." />
          <meta name="keywords" content="Aman Pandia, amanpandia, pandiaaman, pandia aman, aman pandia, pandya, Aman, Pandia, portfolio, web developer, full stack developer, software architect, UI/UX designer, Java developer, React developer, Spring Boot, AWS, machine learning, projects, skills, experience, HTML, CSS, JavaScript, TypeScript, Python, microservices, DevOps, State Street, GlobalLogic, patents, research, BITS Pilani, SRM IST" />
          <link rel="canonical" href="https://www.pandiaaman.com" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Aman Pandia (amanpandia, pandiaaman) | Full Stack Developer & Software Architect Portfolio" />
          <meta property="og:description" content="Aman Pandia (amanpandia, pandiaaman) - Experienced Full Stack Developer and Software Architect with expertise in Java, React, Spring Boot, AWS, and Machine Learning. View projects, patents, and professional experience." />
          <meta property="og:url" content="https://www.pandiaaman.com" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="Aman Pandia (amanpandia, pandiaaman) | Full Stack Developer & Software Architect" />
          <meta name="twitter:description" content="Aman Pandia (amanpandia, pandiaaman) - Experienced Full Stack Developer and Software Architect with expertise in Java, React, Spring Boot, AWS, and Machine Learning." />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        
        <Router>
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={handleThemeChange}
            isDebounced={isDebounced}
          />
          <Body>
            <FlyingBirds 
              isVisible={showBirds} 
              onAnimationEnd={handleBirdsAnimationEnd} 
            />
            <FlyingBats
              isVisible={showBats}
              onAnimationEnd={handleBatsAnimationEnd}
            />
            {/* {isLoading ? (
              <LoadingScreen />
            ) : ( */}
            <>
              <HeroSection />
              <TextFlow />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Wrapper>
                <Education />
                <Patents />
                <Certifications />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Research />
                <Achievements />
                <Recommendations />
              </Wrapper>
              <Contact />
              <Footer />
              {openModal.state && (
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </>
            {/* )} */}
          </Body>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
