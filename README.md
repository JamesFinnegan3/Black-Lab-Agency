# Black Lab Agency Website

A modern, sleek agency website built for Black Lab Agency - full-service advertising for measurable growth.

## Overview

This website features a clean, conversion-focused design with:
- Modern black, white, and gray color scheme
- **Automatic dark mode support** - detects user's system preference and switches color scheme
- Responsive design that works on all devices
- Multiple category-specific pages
- Integrated Calendly booking system
- Case studies showcasing real results

## Website Structure

```
Black-Lab-Agency/
├── index.html                    # Home page with hero and category router
├── regulated-products.html       # Regulated products page
├── local-services.html           # Local services page
├── ecommerce.html                # E-commerce page
├── coaches-creators.html         # Coaches & creators page
├── assets/
│   ├── css/
│   │   └── styles.css            # Main stylesheet
│   ├── js/
│   │   └── main.js               # JavaScript for interactions
│   └── images/
│       └── logo.svg              # Black Lab Agency logo
└── README.md                     # This file
```

## Pages

### Home Page (index.html)
- Hero section with main value proposition
- Category router section linking to specific pages
- Services overview
- CTA section with Calendly integration

### Regulated Products Page
- Hero with compliance-focused messaging
- Free infrastructure setup offer
- "How It Works" process steps
- Drop by Sol case study with impressive results

### Local Services Page
- Performance-based model messaging
- Two case studies:
  - Finnegan Hauling
  - Three Points Hospitality
- Inline Calendly widget

### E-commerce Page
- Free product page offer
- Benefits of dedicated landing pages
- Complete process breakdown

### Coaches/Creators Page
- Booking system focus
- The Training Room case study
- Complete system overview

## Setup Instructions

### 1. Add Your Logo

**IMPORTANT:** Your website is configured to use your black lab profile image.

**Required:**
- Save your black lab profile image (the detailed side profile silhouette) as `logo.png`
- Place it in: `assets/images/logo.png`
- Recommended size: 400px height (width auto-scales)
- Format: PNG with transparent or white background

**See LOGO-INSTRUCTIONS.md for detailed setup instructions.**

### 2. Configure Calendly Integration

Update all Calendly links throughout the website:

**Find and replace:**
```
https://calendly.com/your-calendly-link
```

**Replace with your actual Calendly URL, for example:**
```
https://calendly.com/blacklabagency/consultation
```

**Files to update:**
- index.html
- regulated-products.html
- local-services.html
- ecommerce.html
- coaches-creators.html

**Search for:** `'https://calendly.com/your-calendly-link'`

### 3. Launch the Website

#### Option A: Open Locally
Simply open `index.html` in a web browser to view the site locally.

#### Option B: Deploy to a Web Server
Upload all files to your web hosting provider:
- Upload via FTP/SFTP
- Use a service like Netlify, Vercel, or GitHub Pages
- Ensure all file paths remain intact

### 4. Customization

#### Update Colors
Edit `assets/css/styles.css` and modify the CSS variables:

```css
:root {
  --color-black: #0d0d0d;
  --color-white: #f8f7f5;
  /* etc. */
}
```

#### Update Content
All content can be edited directly in the HTML files. Maintain the structure but feel free to update:
- Headlines
- Descriptions
- Case study details
- Statistics

#### Add Analytics
Add your analytics tracking code (Google Analytics, Facebook Pixel, etc.) before the closing `</body>` tag in each HTML file.

## Features

### Design Features
- Clean, modern aesthetic inspired by top agency websites
- **Automatic dark mode** - responds to system preferences (light/dark mode)
  - Light mode: White background with black text
  - Dark mode: Black background with white text
  - No manual toggle needed - seamless system integration
- Smooth scroll animations
- Hover effects on cards and buttons
- Mobile-responsive navigation
- Sticky header with scroll effects

### Conversion Features
- Multiple strategic CTAs throughout each page
- Calendly integration for easy booking
- Case studies with real metrics
- Clear value propositions
- Category-specific landing pages

### Technical Features
- Vanilla JavaScript (no framework dependencies)
- CSS custom properties for easy theming
- Automatic dark mode using `prefers-color-scheme` media query
- Intersection Observer for scroll animations
- Mobile-first responsive design
- Cross-browser compatible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance:
- Minimal external dependencies
- Web fonts loaded efficiently
- CSS and JS minification ready
- Image optimization recommended

## SEO Considerations

Each page includes:
- Proper meta descriptions
- Semantic HTML structure
- Descriptive page titles
- Clear heading hierarchy

**Recommended additions:**
- Add Open Graph tags for social sharing
- Add schema.org markup for case studies
- Create a sitemap.xml
- Add robots.txt

## Next Steps

1. ✅ Replace placeholder Calendly links with your actual link
2. ✅ Add your logo files to assets/images/
3. ✅ Test all pages on mobile and desktop
4. ✅ Add your analytics tracking code
5. ✅ Test Calendly integration
6. ✅ Deploy to your hosting provider
7. ✅ Set up your domain name
8. ✅ Add SSL certificate (HTTPS)

## Support

For questions or customization requests, contact Black Lab Agency.

## License

© 2024 Black Lab Agency. All rights reserved.
