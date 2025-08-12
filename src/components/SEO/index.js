import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Aman Pandia',
  twitterHandle = '@pandiaaman'
}) => {
  const defaultTitle = "Aman Pandia (amanpandia, pandiaaman) | Full Stack Developer & Software Architect Portfolio";
  const defaultDescription = "Aman Pandia (amanpandia, pandiaaman) - Full Stack Developer, Software Architect, and UI/UX Designer with 4+ years experience. Expert in Java, React, Spring Boot, AWS, and Machine Learning.";
  const defaultKeywords = "Aman Pandia, amanpandia, pandiaaman, pandia aman, aman pandia, pandya, full stack developer, software architect, Java, React, Spring Boot, AWS, machine learning";
  const defaultImage = "https://i.imgur.com/VNiFw6l.png";
  const defaultUrl = "https://www.pandiaaman.com";

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Aman Pandia Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
    </Helmet>
  );
};

export default SEO;
