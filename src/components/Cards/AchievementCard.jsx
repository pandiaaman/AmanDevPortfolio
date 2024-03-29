import React from "react";
import styled from "styled-components";

import { CertificationButton } from "../HeroSection/HeroStyle";

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
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  margin: 1rem;
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

const Image = styled.img`
  height: 150px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
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

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const AchievementCard = ({ achievement }) => {
  return (
    <Card>
      <Top>
        <Image src={achievement.img} />
        <Body>
          <Role>{achievement.name}</Role>
          <Date>{achievement.date}</Date>

          <Description>
            {achievement?.desc && <Span>{achievement?.desc}</Span>}
            {achievement?.skills && (
              <>
                <br />
                <Skills>
                  <b>Skills:</b>
                  <ItemWrapper>
                    {achievement?.skills?.map((skill, index) => (
                      <Skill>• {skill}</Skill>
                    ))}
                  </ItemWrapper>
                </Skills>
              </>
            )}
          </Description>
        </Body>
      </Top>

      {achievement.doc && (
        <CertificationButton Button href={achievement.doc} target="display">
          View Certification
        </CertificationButton>
      )}
      {achievement.airforce && (
        <CertificationButton
          Button
          href={achievement.airforce}
          target="display"
        >
          AirForce Recommendation
        </CertificationButton>
      )}
      {achievement.ielts && (
        <CertificationButton Button href={achievement.ielts} target="display">
          View Scorecard
        </CertificationButton>
      )}
      {achievement.ngo && (
        <CertificationButton Button href={achievement.ngo} target="display">
          YouthForSeva NGO
        </CertificationButton>
      )}
      {achievement.ssemp && (
        <CertificationButton Button href={achievement.ssemp} target="display">
          Employee Recognition
        </CertificationButton>
      )}
    </Card>
  );
};

export default AchievementCard;
