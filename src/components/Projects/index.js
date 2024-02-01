import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From designing web apps to
          building full-stack apps and machine learning projects. Here are some
          of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "uiux" ? (
            <ToggleButton active value="uiux" onClick={() => setToggle("uiux")}>
              UI/UX Design
            </ToggleButton>
          ) : (
            <ToggleButton value="uiux" onClick={() => setToggle("uiux")}>
              UI/UX Design
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              FrontEnd
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              FrontEnd
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend" ? (
            <ToggleButton
              active
              value="backend"
              onClick={() => setToggle("backend")}
            >
              Backend
            </ToggleButton>
          ) : (
            <ToggleButton value="backend" onClick={() => setToggle("backend")}>
              Backend
            </ToggleButton>
          )}
          <Divider />
          {toggle === "fullstack" ? (
            <ToggleButton
              active
              value="fullstack"
              onClick={() => setToggle("fullstack")}
            >
              Full-Stack
            </ToggleButton>
          ) : (
            <ToggleButton
              value="fullstack"
              onClick={() => setToggle("fullstack")}
            >
              Full-Stack
            </ToggleButton>
          )}
          <Divider />
          {toggle === "dsml" ? (
            <ToggleButton active value="dsml" onClick={() => setToggle("dsml")}>
              Data Science & ML
            </ToggleButton>
          ) : (
            <ToggleButton value="dsml" onClick={() => setToggle("dsml")}>
              Data Science & ML
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
