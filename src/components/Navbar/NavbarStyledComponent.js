import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  width: 60%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const HangingLightContainer = styled.div`
  position: absolute;
  top: 0;
  left: 220px;
  z-index: 15;
  cursor: pointer;
  overflow: visible;
  transform-origin: top center;
  animation: ${({ isSwinging }) => 
    isSwinging ? 'containerSwing 3s ease-in-out infinite alternate' : 'none'};
  
  @keyframes containerSwing {
    0% { transform: rotate(-8deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(-3deg); }
    75% { transform: rotate(6deg); }
    100% { transform: rotate(-8deg); }
  }
  
  @media (max-width: 768px) {
    left: 200px;
  }
  
  @media (max-width: 640px) {
    left: 160px;
  }
`;

export const Wire = styled.div`
  width: 1.5px;
  height: 65px;
  background: linear-gradient(to bottom, 
    ${({ theme }) => theme.text_secondary} 0%, 
    ${({ theme }) => theme.text_secondary}80 50%, 
    ${({ theme }) => theme.text_secondary} 100%
  );
  margin: 0 auto;
  position: relative;
  border-radius: 1px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 3px;
    background: ${({ theme }) => theme.text_secondary};
    border-radius: 1px;
  }
  
  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const LightBulb = styled.div`
  width: 28px;
  height: 36px;
  background: ${({ isLight, theme }) => 
    isLight 
      ? `radial-gradient(ellipse at center top, #fff9e6 0%, #ffd700 40%, #ffb347 80%, #ff8c00 100%)`
      : `radial-gradient(ellipse at center top, #4a4a4a 0%, #3a3a3a 40%, #2a2a2a 80%, #1a1a1a 100%)`
  };
  border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%;
  position: relative;
  margin: 0 auto;
  border: 1px solid ${({ theme, isLight }) => 
    isLight ? `${theme.text_secondary}40` : `${theme.text_secondary}80`
  };
  transition: all 0.3s ease;
  box-shadow: ${({ isLight }) => 
    isLight 
      ? '0 0 15px rgba(255, 215, 0, 0.5), 0 0 25px rgba(255, 215, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
      : '0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 0 10px rgba(255, 215, 0, 0.2)'
  };
  
  /* Screw thread at top */
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 6px;
    background: ${({ theme }) => theme.text_secondary};
    border-radius: 1px;
    box-shadow: 
      0 2px 0 ${({ theme }) => theme.text_secondary},
      0 4px 0 ${({ theme }) => theme.text_secondary};
  }
  
  /* Base contact */
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 4px;
    background: ${({ theme }) => theme.text_secondary};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.text_secondary}60;
  }
  
  /* Filament inside the bulb */
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 10px;
    opacity: 1;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: ${({ isLight }) => isLight ? '1px' : '1.5px'};
      height: ${({ isLight }) => isLight ? '6px' : '8px'};
      background: ${({ isLight }) => 
        isLight 
          ? '#cc8800' 
          : '#ffd700'
      };
      border-radius: 0.5px;
      box-shadow: ${({ isLight }) => 
        isLight 
          ? 'none' 
          : '0 0 3px rgba(255, 215, 0, 0.6), 0 0 6px rgba(255, 215, 0, 0.4)'
      };
      animation: ${({ isLight }) => 
        isLight 
          ? 'none' 
          : 'filamentGlow 2s ease-in-out infinite alternate'
      };
    }
    
    &::before {
      left: 4px;
      transform: rotate(15deg);
    }
    
    &::after {
      right: 4px;
      transform: rotate(-15deg);
    }
  }
  
  @keyframes filamentGlow {
    0% { 
      filter: brightness(1);
      box-shadow: 0 0 3px rgba(255, 215, 0, 0.6), 0 0 6px rgba(255, 215, 0, 0.4);
    }
    100% { 
      filter: brightness(1.3);
      box-shadow: 0 0 4px rgba(255, 215, 0, 0.8), 0 0 8px rgba(255, 215, 0, 0.6);
    }
  }
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
  
  @media (max-width: 768px) {
    width: 24px;
    height: 30px;
    
    &:before {
      width: 12px;
      height: 5px;
    }
    
    &:after {
      width: 14px;
      height: 3px;
    }
    
    & > div {
      width: 12px;
      height: 8px;
      
      &::before,
      &::after {
        width: ${({ isLight }) => isLight ? '1px' : '1.5px'};
        height: ${({ isLight }) => isLight ? '5px' : '6px'};
      }
    }
  }
`;

export const LightRays = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  opacity: ${({ isLight }) => isLight ? 0.7 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 12px;
    background: #ffd700;
    transform-origin: center;
    animation: ${({ isLight }) => isLight ? 'rayGlow 2s ease-in-out infinite alternate' : 'none'};
  }
  
  &:before {
    transform: translate(-50%, -50%) rotate(0deg);
    box-shadow: 
      0 0 2px #ffd700,
      12px 0 0 0 #ffd700,
      -12px 0 0 0 #ffd700,
      0 12px 0 0 #ffd700,
      0 -12px 0 0 #ffd700;
  }
  
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
    box-shadow: 
      0 0 2px #ffd700,
      8px 8px 0 0 #ffd700,
      -8px -8px 0 0 #ffd700,
      8px -8px 0 0 #ffd700,
      -8px 8px 0 0 #ffd700;
  }
  
  @keyframes rayGlow {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    
    &:before {
      height: 10px;
      box-shadow: 
        0 0 2px #ffd700,
        10px 0 0 0 #ffd700,
        -10px 0 0 0 #ffd700,
        0 10px 0 0 #ffd700,
        0 -10px 0 0 #ffd700;
    }
    
    &:after {
      height: 10px;
      box-shadow: 
        0 0 2px #ffd700,
        7px 7px 0 0 #ffd700,
        -7px -7px 0 0 #ffd700,
        7px -7px 0 0 #ffd700,
        -7px 7px 0 0 #ffd700;
    }
  }
`;
export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.logo};
`;
export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.navitems};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.9s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
