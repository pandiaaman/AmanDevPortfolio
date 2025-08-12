import React from "react";
import styled from "styled-components";
import OptimizedImage from "../OptimizedImage";
import { WorkExperienceButton } from "../HeroSection/HeroStyle";
import FallbackImage from "../FallbackImage";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const AchievementCard = ({ achievement }) => {
  // Defensive programming: handle undefined achievement
  if (!achievement) {
    return (
      <Card>
        <Top>
          <ImageContainer>
            <FallbackImage 
              alt="Achievement placeholder"
              width="100%"
              height="100%"
              borderRadius="10px"
            />
          </ImageContainer>
          <Body>
            <Role>Achievement not available</Role>
            <Date>N/A</Date>
          </Body>
        </Top>
        <Description>
          <Span>Achievement information is not available.</Span>
        </Description>
      </Card>
    );
  }

  return (
    <Card>
      <Top>
        <ImageContainer>
          <OptimizedImage 
            src={achievement.img} 
            alt={`${achievement.name || 'Achievement'} image`}
            width="100%"
            height="100%"
            objectFit="cover"
            styles={{
              borderRadius: '10px'
            }}
          />
        </ImageContainer>
        <Body>
          <Role>{achievement.name || 'Achievement'}</Role>
          <Date>{achievement.date || 'Date not available'}</Date>
        </Body>
      </Top>
      <Description>
        {achievement?.desc && <Span>{achievement?.desc}</Span>}
      </Description>
      {achievement.airforce && (
        <WorkExperienceButton href={achievement.airforce} target="display">
          View Air Force Recommendation
        </WorkExperienceButton>
      )}
      {achievement.ssemp && (
        <WorkExperienceButton href={achievement.ssemp} target="display">
          View State Street Recognition
        </WorkExperienceButton>
      )}
      {achievement.ngo && (
        <WorkExperienceButton href={achievement.ngo} target="display">
          View NGO Service
        </WorkExperienceButton>
      )}
      {achievement.ielts && (
        <WorkExperienceButton href={achievement.ielts} target="display">
          View IELTS Certificate
        </WorkExperienceButton>
      )}
    </Card>
  );
};

export default AchievementCard;
