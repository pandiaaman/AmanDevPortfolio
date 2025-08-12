import React from 'react';
import styled from 'styled-components';

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: ${props => props.borderRadius || '8px'};
  min-height: ${props => props.minHeight || '100px'};
`;

const FallbackImage = ({ 
  alt = 'Image', 
  width, 
  height, 
  borderRadius,
  minHeight,
  style = {},
  className 
}) => {
  // Generate initials from alt text
  const getInitials = (text) => {
    if (!text) return 'IMG';
    const words = text.split(' ');
    if (words.length === 1) {
      return text.substring(0, 2).toUpperCase();
    }
    return words.map(word => word.charAt(0)).join('').substring(0, 2).toUpperCase();
  };

  return (
    <FallbackContainer
      style={{ width, height, ...style }}
      borderRadius={borderRadius}
      minHeight={minHeight}
      className={className}
    >
      <div>
        <div style={{ fontSize: '24px', marginBottom: '4px' }}>
          {getInitials(alt)}
        </div>
        <div style={{ fontSize: '12px', opacity: 0.8 }}>
          {alt}
        </div>
      </div>
    </FallbackContainer>
  );
};

export default FallbackImage;
