import React from 'react';
import styled, { keyframes } from 'styled-components';

const flyAcross = keyframes`
  0% {
    transform: translateX(-100px) translateY(20px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(100vw + 100px)) translateY(-50px);
    opacity: 0;
  }
`;

const wingFlap = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(15deg);
  }
`;

const BirdsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const Bird = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  left: -100px;
  animation: ${flyAcross} ${props => props.duration}s linear;
  animation-delay: ${props => props.delay}s;
  transform-origin: center;
`;

const BirdBody = styled.div`
  width: 12px;
  height: 8px;
  background: #2a2a2a;
  border-radius: 50%;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -6px;
    width: 8px;
    height: 4px;
    background: #2a2a2a;
    border-radius: 50%;
    transform-origin: 100% 50%;
    animation: ${wingFlap} 0.35s infinite;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    right: -6px;
    width: 8px;
    height: 4px;
    background: #2a2a2a;
    border-radius: 50%;
    transform-origin: 0% 50%;
    animation: ${wingFlap} 0.35s infinite;
    animation-delay: 0.175s;
  }
`;

const FlyingBirds = ({ isVisible, onAnimationEnd }) => {
  // Generate random birds with different positions and timings
  const birds = React.useMemo(() => Array.from({ length: 6 }, (_, index) => ({
    id: index,
    top: 15 + Math.random() * 20, // Between 15% and 35% from top
    duration: 2.5 + Math.random() * 1, // Between 2.5 and 3.5 seconds
    delay: Math.random() * 0.8, // Up to 0.8 seconds delay
  })), []);

  // Call onAnimationEnd after the longest animation completes
  React.useEffect(() => {
    if (!isVisible) return;
    
    const maxDuration = Math.max(...birds.map(bird => bird.duration + bird.delay));
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, maxDuration * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, birds, onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <BirdsContainer>
      {birds.map(bird => (
        <Bird
          key={bird.id}
          top={bird.top}
          duration={bird.duration}
          delay={bird.delay}
        >
          <BirdBody />
        </Bird>
      ))}
    </BirdsContainer>
  );
};

export default FlyingBirds;