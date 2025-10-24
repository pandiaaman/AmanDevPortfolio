import React from 'react';
import styled, { keyframes } from 'styled-components';

// Bat flying animation (left to right)
const flyAcross = keyframes`
  0% {
    left: -20vw;
    opacity: 0.1;
  }
  10% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    left: 110vw;
    opacity: 0.1;
  }
`;

// Bat wing flap animation
const wingFlap = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-18deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(18deg);
  }
`;

const BatsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40vh;
  pointer-events: none;
  z-index: 1000;
`;

const Bat = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: -20vw;
  width: 32px;
  height: 16px;
  opacity: 0.8;
  animation: ${flyAcross} ${({ duration }) => duration}s linear;
  animation-delay: ${({ delay }) => delay}s;
`;

const BatBody = styled.div`
  position: relative;
  width: 14px;
  height: 8px;
  background: #888;
  border-radius: 50% 50% 60% 60%;
  margin: 0 auto;
  z-index: 2;

  &:before, &:after {
    content: '';
    position: absolute;
    top: -1px;
    width: 14px;
    height: 10px;
    background: transparent;
    border-radius: 60% 40% 40% 60%;
    border-top: 3px solid #888;
    border-left: 2px solid #888;
    border-right: 2px solid #888;
    z-index: 1;
    animation: ${wingFlap} 0.32s infinite;
  }
  &:before {
    left: -12px;
    transform-origin: 100% 60%;
    border-right: none;
  }
  &:after {
    right: -12px;
    transform-origin: 0% 60%;
    animation-delay: 0.16s;
    border-left: none;
  }

  /* Bat ears */
  & > span {
    position: absolute;
    top: -4px;
    width: 3px;
    height: 5px;
    background: #888;
    border-radius: 60% 60% 0 0;
    z-index: 3;
  }
  & > span.left-ear {
    left: 1px;
  }
  & > span.right-ear {
    right: 1px;
  }
`;

const FlyingBats = ({ isVisible, onAnimationEnd }) => {
  // Generate random bats with different positions and timings
  const bats = React.useMemo(() => Array.from({ length: 5 }, (_, index) => ({
    id: index,
    top: 18 + Math.random() * 18, // Between 18% and 36% from top
    duration: 2.7 + Math.random() * 1.1, // Between 2.7 and 3.8 seconds
    delay: Math.random() * 0.9, // Up to 0.9 seconds delay
  })), []);

  React.useEffect(() => {
    if (!isVisible) return;
    const maxDuration = Math.max(...bats.map(bat => bat.duration + bat.delay));
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, maxDuration * 1000);
    return () => clearTimeout(timer);
  }, [isVisible, bats, onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <BatsContainer>
      {bats.map(bat => (
        <Bat
          key={bat.id}
          top={bat.top}
          duration={bat.duration}
          delay={bat.delay}
        >
          <BatBody>
            <span className="left-ear" />
            <span className="right-ear" />
          </BatBody>
        </Bat>
      ))}
    </BatsContainer>
  );
};

export default FlyingBats;
