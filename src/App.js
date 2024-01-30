import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Patents from "./components/Patents";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import TextFlow from "./components/TextFlow/index.js";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    document.title = "Aman Pandia|Portfolio";
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <HeroSection />
            <TextFlow />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Patents openModal={openModal} setOpenModal={setOpenModal} />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Research openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Certifications />
              <Education />
              <Recommendations />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </motion.div>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
