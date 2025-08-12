import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  getOptimizedImageUrl, 
  getResponsiveSrcSet, 
  getSizesAttribute,
  IMAGE_SIZES 
} from '../../utils/imageOptimizer';
import { shouldUseOptimizedImages } from '../../config/environment';
import FallbackImage from '../FallbackImage';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${props => props.placeholderColor || '#f0f0f0'};
  
  ${props => props.styles}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.loaded ? 1 : 0};
  
  ${props => props.styles}
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  format = 'webp',
  objectFit = 'cover',
  placeholderColor = '#f0f0f0',
  lazy = true,
  responsive = true,
  sizesConfig = [
    { breakpoint: 450, width: '200px' },
    { breakpoint: 850, width: '400px' },
    { breakpoint: 1200, width: '800px' },
    { breakpoint: Infinity, width: '1200px' }
  ],
  breakpoints = [200, 400, 800, 1200],
  onLoad,
  onError,
  styles = {},
  className,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    const currentElement = document.querySelector(`[data-image-id="${src}"]`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [lazy, src]);

  // Generate optimized image URLs
  const generateImageUrls = () => {
    if (!src) return { main: '', srcset: '', sizes: '' };

    // In development, use original image URL
    if (!shouldUseOptimizedImages()) {
      return { 
        main: src, 
        srcset: '', 
        sizes: '' 
      };
    }

    const mainUrl = getOptimizedImageUrl(src, {
      width,
      height,
      quality,
      format
    });

    let srcset = '';
    let sizesAttr = '';

    if (responsive && shouldUseOptimizedImages()) {
      srcset = getResponsiveSrcSet(src, breakpoints, {
        height,
        quality,
        format
      });
      sizesAttr = getSizesAttribute(sizesConfig);
    }

    return { main: mainUrl, srcset, sizes: sizesAttr };
  };

  const { main, srcset, sizes } = generateImageUrls();

  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    if (onError) onError();
  };

  if (error) {
    return (
      <ImageContainer 
        styles={styles} 
        className={className}
        placeholderColor={placeholderColor}
        style={{ width, height }}
      >
        <FallbackImage 
          alt={alt || 'Image'}
          width="100%"
          height="100%"
          borderRadius={styles.borderRadius || '8px'}
        />
      </ImageContainer>
    );
  }

  return (
    <ImageContainer 
      styles={styles} 
      className={className}
      placeholderColor={placeholderColor}
      style={{ width, height }}
      data-image-id={src}
    >
      {!loaded && <Placeholder />}
      
      {isInView && (
        <StyledImage
          src={main}
          alt={alt}
          srcSet={srcset}
          sizes={sizes}
          objectFit={objectFit}
          loaded={loaded}
          styles={styles}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? 'lazy' : 'eager'}
          {...props}
        />
      )}
    </ImageContainer>
  );
};

// Predefined image components for common use cases
// These now use the passed width/height props or fall back to predefined sizes
export const ThumbnailImage = (props) => (
  <OptimizedImage 
    {...props} 
    width={props.width || IMAGE_SIZES.THUMBNAIL.width} 
    height={props.height || IMAGE_SIZES.THUMBNAIL.height}
    quality={props.quality || 60}
  />
);

export const SmallImage = (props) => (
  <OptimizedImage 
    {...props} 
    width={props.width || IMAGE_SIZES.SMALL.width} 
    height={props.height || IMAGE_SIZES.SMALL.height}
    quality={props.quality || 70}
  />
);

export const MediumImage = (props) => (
  <OptimizedImage 
    {...props} 
    width={props.width || IMAGE_SIZES.MEDIUM.width} 
    height={props.height || IMAGE_SIZES.MEDIUM.height}
    quality={props.quality || 80}
  />
);

export const LargeImage = (props) => (
  <OptimizedImage 
    {...props} 
    width={props.width || IMAGE_SIZES.LARGE.width} 
    height={props.height || IMAGE_SIZES.LARGE.height}
    quality={props.quality || 85}
  />
);

export const HeroImage = (props) => (
  <OptimizedImage 
    {...props} 
    width={props.width || IMAGE_SIZES.HERO.width} 
    height={props.height || IMAGE_SIZES.HERO.height}
    quality={props.quality || 90}
    lazy={props.lazy !== undefined ? props.lazy : false}
  />
);

export default OptimizedImage;
