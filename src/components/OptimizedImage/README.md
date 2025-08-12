# OptimizedImage Component

This component provides automatic image optimization using Netlify Image CDN in production while maintaining full functionality in development.

## Features

- **Automatic Environment Detection**: Uses regular images in development, optimized images in production
- **Lazy Loading**: Images load only when they come into view
- **Responsive Images**: Automatic srcset generation for different screen sizes
- **Fallback Handling**: Beautiful fallback images when images fail to load
- **Multiple Formats**: Support for WebP, AVIF, and other modern formats
- **Predefined Sizes**: Common image sizes for different use cases

## Usage

### Basic Usage

```jsx
import { OptimizedImage } from '../components/OptimizedImage';

<OptimizedImage 
  src="https://example.com/image.jpg"
  alt="Description"
  width={300}
  height={200}
/>
```

### Predefined Components

```jsx
import { 
  ThumbnailImage, 
  SmallImage, 
  MediumImage, 
  LargeImage, 
  HeroImage 
} from '../components/OptimizedImage';

// Thumbnail (150x150)
<ThumbnailImage src="..." alt="..." />

// Small (300x200)
<SmallImage src="..." alt="..." />

// Medium (600x400)
<MediumImage src="..." alt="..." />

// Large (1200x800)
<LargeImage src="..." alt="..." />

// Hero (1920x1080)
<HeroImage src="..." alt="..." />
```

## Environment Behavior

### Development Mode
- Uses original image URLs directly
- No optimization applied
- Faster loading for development
- No Netlify Image CDN dependency

### Production Mode (Netlify)
- Automatically optimizes images using Netlify Image CDN
- Converts to modern formats (WebP, AVIF)
- Responsive image generation
- Lazy loading enabled

## Configuration

### Environment Variables

```bash
# Set to true when deploying to Netlify
REACT_APP_NETLIFY=true
```

### Netlify Configuration

The `netlify.toml` file includes:
- Image CDN configuration
- Remote image domains
- Image optimization redirects

## Fallback Images

When images fail to load, the component shows a beautiful fallback with:
- Gradient background
- Image initials
- Alt text display
- Consistent styling

## Performance Benefits

- **Faster Loading**: Optimized images in production
- **Reduced Bandwidth**: Modern formats and compression
- **Better UX**: Lazy loading and fallbacks
- **SEO Friendly**: Proper alt tags and responsive images

## Troubleshooting

### Images Not Loading in Development
This is expected behavior. The component uses original URLs in development for faster iteration.

### Images Not Optimizing in Production
1. Ensure you're deployed to Netlify
2. Check that `netlify.toml` is properly configured
3. Verify image URLs are accessible

### Fallback Images Showing
1. Check image URLs are correct
2. Ensure images are accessible
3. Check network connectivity

## Migration from Regular Images

Replace standard `<img>` tags:

```jsx
// Before
<img src="..." alt="..." />

// After
<OptimizedImage src="..." alt="..." />
```

Or use predefined components:

```jsx
// Before
<img src="..." alt="..." style={{ width: 150, height: 150 }} />

// After
<ThumbnailImage src="..." alt="..." />
```
