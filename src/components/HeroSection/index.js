import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import OptimizedImage from "../OptimizedImage";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
            <ResumeButton href={Bio.portfoliodoc} target="display">
              Check Portfolio
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <OptimizedImage 
              src={HeroImg} 
              alt="Aman Pandia - Full Stack Developer and Software Architect"
              width={400}
              height={400}
              objectFit="cover"
              lazy={false}
              styles={{
                borderRadius: '50%',
                border: '2px solid #854CE6',
                maxWidth: '400px',
                maxHeight: '400px',
                '@media (max-width: 768px)': {
                  maxWidth: '400px',
                  maxHeight: '400px'
                },
                '@media (max-width: 640px)': {
                  maxWidth: '280px',
                  maxHeight: '280px'
                }
              }}
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
