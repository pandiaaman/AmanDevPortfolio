import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OptimizedImage from "../OptimizedImage";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 330px;
  height: 600px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  &:hover ${Button} {
    display: block;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const AvatarContainer = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
  overflow: hidden;
`;

const SocialMediaIcon = styled.a`
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: #854ce6;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: white;
  }
`;

const ProjectCards = ({ project, setOpenModal }) => {
  // Defensive programming: handle undefined project
  if (!project) {
    return (
      <Card onClick={() => setOpenModal({ state: true, project: null })}>
        <ImageContainer>
          <OptimizedImage 
            src="/placeholder-image.jpg" 
            alt="Project placeholder"
            width="100%"
            height="100%"
            objectFit="cover"
            styles={{
              borderRadius: '10px'
            }}
          />
        </ImageContainer>
        <Tags>
          <Tag>Project not available</Tag>
        </Tags>
        <Details>
          <Title>Project not available</Title>
          <Date>N/A</Date>
          <Description>Project information is not available.</Description>
        </Details>
        <SocialMediaIcon>
          <ExpandMoreIcon />
        </SocialMediaIcon>
      </Card>
    );
  }

  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <ImageContainer>
        <OptimizedImage 
          src={project.image || "/placeholder-image.jpg"} 
          alt={`${project.title || 'Project'} - Project Preview`}
          width="100%"
          height="100%"
          objectFit="cover"
          styles={{
            borderRadius: '10px'
          }}
        />
      </ImageContainer>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        )) || <Tag>No tags available</Tag>}
      </Tags>
      <Details>
        <Title>{project.title || 'Untitled Project'}</Title>
        <Date>{project.date || 'Date not available'}</Date>
        {project.role && <Date>Role: {project?.role}</Date>}
        {project.teamsize && <Date>Team size: {project?.teamsize}</Date>}
        <Description>{project.description || 'No description available'}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <AvatarContainer key={index}>
            <OptimizedImage 
              src={member.img || "/placeholder-image.jpg"} 
              alt={`${member.name || 'Team member'} avatar`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </AvatarContainer>
        ))}
      </Members>
      {/* <Button>View Project</Button> */}
      <SocialMediaIcon>
        <ExpandMoreIcon />
      </SocialMediaIcon>
    </Card>
  );
};

export default ProjectCards;
