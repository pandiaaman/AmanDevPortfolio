/**
 * Image optimization utility using Netlify Image CDN
 * Based on Netlify Image CDN documentation: https://developers.netlify.com/guides/how-to-serve-optimized-images-using-netlify-image-cdn/
 */

import { shouldUseOptimizedImages } from '../config/environment';

// Base URL for Netlify Image CDN
const NETLIFY_IMAGE_CDN_BASE = '/.netlify/images';

/**
 * Generate optimized image URL using Netlify Image CDN
 * @param {string} imageUrl - Original image URL
 * @param {Object} options - Optimization options
 * @param {number} options.width - Image width
 * @param {number} options.height - Image height
 * @param {number} options.quality - Image quality (1-100)
 * @param {string} options.format - Image format (webp, avif, jpg, png)
 * @param {boolean} options.fit - Fit mode (cover, contain, fill)
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (imageUrl, options = {}) => {
  // In development, return the original image URL
  if (!shouldUseOptimizedImages()) {
    return imageUrl;
  }

  const {
    width,
    height,
    quality = 80,
    format,
    fit = 'cover'
  } = options;

  // Build query parameters
  const params = new URLSearchParams();
  params.append('url', imageUrl);

  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  if (format) params.append('fm', format);
  if (fit) params.append('fit', fit);

  return `${NETLIFY_IMAGE_CDN_BASE}?${params.toString()}`;
};

/**
 * Generate responsive image srcset for different screen sizes
 * @param {string} imageUrl - Original image URL
 * @param {Array} breakpoints - Array of width breakpoints
 * @param {Object} options - Additional options
 * @returns {string} srcset string
 */
export const getResponsiveSrcSet = (imageUrl, breakpoints = [200, 400, 800, 1200], options = {}) => {
  // In development, return empty srcset
  if (!shouldUseOptimizedImages()) {
    return '';
  }

  return breakpoints
    .map(width => {
      const optimizedUrl = getOptimizedImageUrl(imageUrl, { ...options, width });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 * @param {Array} sizes - Array of size objects with breakpoint and width
 * @returns {string} sizes string
 */
export const getSizesAttribute = (sizes = [
  { breakpoint: 450, width: '200px' },
  { breakpoint: 850, width: '400px' },
  { breakpoint: 1200, width: '800px' },
  { breakpoint: Infinity, width: '1200px' }
]) => {
  // In development, return empty sizes
  if (!shouldUseOptimizedImages()) {
    return '';
  }

  return sizes
    .map(({ breakpoint, width }) => {
      if (breakpoint === Infinity) {
        return width;
      }
      return `(max-width: ${breakpoint}px) ${width}`;
    })
    .join(', ');
};

/**
 * Predefined image sizes for common use cases
 */
export const IMAGE_SIZES = {
  THUMBNAIL: { width: 150, height: 150 },
  SMALL: { width: 300, height: 200 },
  MEDIUM: { width: 600, height: 400 },
  LARGE: { width: 1200, height: 800 },
  HERO: { width: 1920, height: 1080 }
};

/**
 * Get optimized image URL for specific size
 * @param {string} imageUrl - Original image URL
 * @param {string} size - Size key from IMAGE_SIZES
 * @param {Object} additionalOptions - Additional optimization options
 * @returns {string} Optimized image URL
 */
export const getImageBySize = (imageUrl, size, additionalOptions = {}) => {
  const sizeConfig = IMAGE_SIZES[size];
  if (!sizeConfig) {
    console.warn(`Unknown image size: ${size}`);
    return imageUrl;
  }
  
  return getOptimizedImageUrl(imageUrl, { ...sizeConfig, ...additionalOptions });
};

/**
 * Generate lazy loading optimized image URL
 * @param {string} imageUrl - Original image URL
 * @param {number} width - Image width
 * @param {number} quality - Image quality (lower for thumbnails)
 * @returns {string} Optimized thumbnail URL for lazy loading
 */
export const getLazyLoadImage = (imageUrl, width = 50, quality = 30) => {
  return getOptimizedImageUrl(imageUrl, { width, quality, format: 'webp' });
};

/**
 * Generate WebP format image URL
 * @param {string} imageUrl - Original image URL
 * @param {Object} options - Optimization options
 * @returns {string} WebP optimized image URL
 */
export const getWebPImage = (imageUrl, options = {}) => {
  return getOptimizedImageUrl(imageUrl, { ...options, format: 'webp' });
};

/**
 * Generate AVIF format image URL
 * @param {string} imageUrl - Original image URL
 * @param {Object} options - Optimization options
 * @returns {string} AVIF optimized image URL
 */
export const getAVIFImage = (imageUrl, options = {}) => {
  return getOptimizedImageUrl(imageUrl, { ...options, format: 'avif' });
};

/**
 * Check if image optimization is available
 * @returns {boolean} True if image optimization is available
 */
export const isImageOptimizationAvailable = () => {
  return shouldUseOptimizedImages();
};

const imageOptimizer = {
  getOptimizedImageUrl,
  getResponsiveSrcSet,
  getSizesAttribute,
  getImageBySize,
  getLazyLoadImage,
  getWebPImage,
  getAVIFImage,
  isImageOptimizationAvailable,
  IMAGE_SIZES
};

export default imageOptimizer;
