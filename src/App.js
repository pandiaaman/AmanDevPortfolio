import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
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
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.js";

//
import restapi from "./images/restapi.svg";
import junit from "./images/JUnit.svg";
import blender from "./images/blender.svg";
import cardio from "./images/cardio.png";
import cycle from "./images/cycle.png";
import got from "./images/got.png";
import hotelrating from "./images/hotelrating.png";
import restimage from "./images/restimage.png";
// import iotvigilant from "../images/iotvigilant.png";
import ngo from "./images/ngo.jpg";
import notes from "./images/notes.png";
import airforce from "./images/airforce.jpg";
import omnifood from "./images/omnifood.png";
import ielts from "./images/ielts.png";
import patent from "./images/patent.png";
import drivingpatent from "./images/drivingpatent.png";
import tinder from "./images/tinder.png";
import tryon from "./images/tryon.png";
import solarwind from "./images/solarwind.png";
import carparking from "./images/carparking.png";
import raj from "./images/recommend_raj.jpeg";
import puhazoli from "./images/recommend_puhazoli.jpeg";
import nawin from "./images/recommend_nawin.jpeg";
import ganesh from "./images/recommend_ganesh.jpeg";
import vadivu from "./images/recommend_vadivu.jpg";
import srinivas from "./images/recommend_srinivas.jpg";
import bravo1 from "./images/bravo1.png";
import bravo2 from "./images/bravo2.png";
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

// export const updateTheme = () => {
//   return useContext(ThemeContext);
// };

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Aman Pandia|Portfolio";
  }, []);

  useEffect(() => {
    //below are images that we want to load before the page comes up in front of the user
    const imageUrls = [
      restapi,
      junit,
      blender,
      cardio,
      cycle,
      got,
      hotelrating,
      restimage,
      ngo,
      notes,
      omnifood,
      airforce,
      ielts,
      patent,
      drivingpatent,
      tinder,
      tryon,
      solarwind,
      carparking,
      raj,
      puhazoli,
      nawin,
      ganesh,
      vadivu,
      srinivas,
      bravo1,
      bravo2,
      "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-vertical.svg",
      "https://www.vectorlogo.zone/logos/php/php-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      "https://www.postgresql.org/media/img/about/press/elephant.png",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",

      "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      "https://www.vectorlogo.zone/logos/hibernate/hibernate-ar21.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      "https://www.vectorlogo.zone/logos/fusion-reactor/fusion-reactor-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      "https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",

      "https://www.vectorlogo.zone/logos/numpy/numpy-ar21.svg",
      // "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",

      "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
      "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      "https://www.vectorlogo.zone/logos/eclipse/eclipse-icon.svg",
      "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",

      "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",

      "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",

      "https://cdn-icons-png.flaticon.com/512/8745/8745129.png",
      "https://cdn-icons-png.flaticon.com/512/10307/10307142.png",
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/critical-thinking-4278958-3557318.png",
      "https://cdn-icons-png.flaticon.com/512/7626/7626071.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Collaboration_logo_V2.svg/607px-Collaboration_logo_V2.svg.png",

      "https://cdn.iconscout.com/icon/premium/png-256-thumb/dance-27-1132079.png?f=webp",

      "https://freesvg.org/img/papapishu_guitar_5.png",
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/drum-kit-4095415-3391610.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Olympic_pictogram_Athletics_-_colored.svg/2048px-Olympic_pictogram_Athletics_-_colored.svg.png",

      "https://www.loffler.com/hubfs/Microsoft%20Azure%20Blog.jpg",
      "https://images.credly.com/images/7562bf68-c3a6-4d79-9154-00ee605b9492/UX.png",
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/e8/7cc3d09d3f11e698dfff46d35f2da1/Stanford_Coursera_Logo.png?auto=format%2Ccompress&dpr=1&w=80&h=80",

      "https://www.loffler.com/hubfs/Microsoft%20Azure%20Blog.jpg",
      "https://vectorlogoseek.com/wp-content/uploads/2020/02/state-street-vector-logo.png",
      "https://vectorlogoseek.com/wp-content/uploads/2020/02/state-street-vector-logo.png",
      "https://vectorlogoseek.com/wp-content/uploads/2020/02/state-street-vector-logo.png",
      "https://vectorlogoseek.com/wp-content/uploads/2020/02/state-street-vector-logo.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBFNH0KmAm4Vub-S5TOlh7mZzvtz-vUhsCYhkceNANg&s",
      "https://www.equitybulls.com/equitybullsadmin/uploads/Mangalam%20Cement%20Limited%204.jpg",
      // Add all your image URLs here
    ];

    let loadedImages = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === imageUrls.length) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  // console.log(openModal);

  // const updateTheme = () => {
  //   return setDarkMode((prevMode) => !prevMode);
  // };
  return (
    <div className="App">{isLoading ? <LoadingScreen /> : <MainContent />}</div>
  );
}

const MainContent = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <HeroSection />
          <TextFlow />
          <Wrapper>
            <Skills />
            <Experience />
            <Achievements />
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
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
