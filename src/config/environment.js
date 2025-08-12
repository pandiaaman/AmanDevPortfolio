/**
 * Environment configuration for development vs production
 */

// Check if we're in development
export const isDevelopment = process.env.NODE_ENV === 'development';

// Check if we're in production
export const isProduction = process.env.NODE_ENV === 'production';

// Check if we're on Netlify
export const isNetlify = process.env.REACT_APP_NETLIFY === 'true' || 
  (typeof window !== 'undefined' && window.location.hostname.includes('netlify'));

// Check if image optimization is available
export const isImageOptimizationAvailable = () => {
  return !isDevelopment || isNetlify;
};

// Get the current environment
export const getEnvironment = () => {
  if (isDevelopment) return 'development';
  if (isProduction) return 'production';
  return 'unknown';
};

// Check if we should use optimized images
export const shouldUseOptimizedImages = () => {
  return isProduction || isNetlify;
};

// Debug information
export const getDebugInfo = () => {
  return {
    environment: getEnvironment(),
    isDevelopment,
    isProduction,
    isNetlify,
    imageOptimizationAvailable: isImageOptimizationAvailable(),
    shouldUseOptimizedImages: shouldUseOptimizedImages(),
    hostname: typeof window !== 'undefined' ? window.location.hostname : 'server-side',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server-side'
  };
};

export default {
  isDevelopment,
  isProduction,
  isNetlify,
  isImageOptimizationAvailable,
  getEnvironment,
  shouldUseOptimizedImages,
  getDebugInfo
};
