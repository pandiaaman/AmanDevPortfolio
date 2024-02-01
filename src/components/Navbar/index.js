import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PeopleIcon from "@mui/icons-material/People";
import CoPresentIcon from "@mui/icons-material/CoPresent";

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: white;
  text-align: center;
`;

const Navbar = () => {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Aman's Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#patents">Patents</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#certifications">Certifications</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#recommendations">Recommendations</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>

            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>

            <MobileLink
              href="#certifications"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Certifications
            </MobileLink>

            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#recommendations"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Recommendations
            </MobileLink>

            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>

            <SocialMediaIcons>
              <SocialMediaIcon
                href={Bio.github}
                target="display"
                title="github"
              >
                <GitHubIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href={Bio.portfoliodoc}
                target="display"
                title="portfolio document"
              >
                <AccountCircleIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href={Bio.linkedin}
                target="display"
                title="linkedIn profile"
              >
                <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href={Bio.resume}
                target="display"
                title="resume"
              >
                <DocumentScannerIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href={Bio.personalhistory}
                target="display"
                title="personal history document"
              >
                <HistoryEduIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href={Bio.communityinvolvement}
                target="display"
                title="community involvement document"
              >
                <PeopleIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href={Bio.leadershipdoc}
                target="display"
                title="leadership document"
              >
                <CoPresentIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <Copyright>
              &copy; {currentYear} Aman Pandia. All rights reserved.
            </Copyright>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
