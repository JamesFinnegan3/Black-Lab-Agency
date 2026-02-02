# Black Lab Agency - Quick Setup Guide

## 🚀 Getting Started

Your new Black Lab Agency website is ready! Follow these steps to complete the setup.

## Step 1: Add Your Black Lab Profile Logo

**Your website is ready for your logo image!**

### What You Need to Do:

1. **Save your black lab profile image** (the beautiful side profile silhouette you showed me)
2. **Name it:** `logo.png`
3. **Place it in:** `assets/images/logo.png`

### Image Specifications:
- **Recommended size:** 400px height (width will auto-scale)
- **Format:** PNG (preferred with transparent background) or JPG
- **The image:** Your black lab profile silhouette with the detailed artistic rendering

### That's it!
The website is already configured to display your logo. Just drop the file in the right location.

**For detailed instructions, see LOGO-INSTRUCTIONS.md**

## Step 2: Configure Calendly

### Get Your Calendly Link
1. Log in to your Calendly account
2. Go to your event type (e.g., "Consultation" or "Discovery Call")
3. Click "Copy Link"
4. Your link will look like: `https://calendly.com/yourname/consultation`

### Update All Files
You need to replace the placeholder Calendly link in these 5 files:

1. **index.html**
2. **regulated-products.html**
3. **local-services.html**
4. **ecommerce.html**
5. **coaches-creators.html**

### Search and Replace
**Find:** `https://calendly.com/your-calendly-link`

**Replace with:** Your actual Calendly link (e.g., `https://calendly.com/blacklabagency/consultation`)

### Quick Command (if using command line):
```bash
# Replace YOUR_ACTUAL_LINK with your Calendly URL
find . -name "*.html" -exec sed -i 's|https://calendly.com/your-calendly-link|YOUR_ACTUAL_LINK|g' {} +
```

## Step 3: Test Locally

### Open the Website
1. Navigate to the project folder
2. Double-click `index.html` to open in your browser
3. Test all pages:
   - Home page (index.html)
   - Regulated Products
   - Local Services
   - E-commerce
   - Coaches & Creators

### Test Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu works (resize browser window)
- [ ] All "Book a Call" buttons open Calendly
- [ ] Smooth scrolling works for anchor links
- [ ] Logo displays correctly
- [ ] All case studies are visible
- [ ] Footer links work

## Step 4: Customize (Optional)

### Update Contact Information
If you want to add contact details to the footer, edit the footer section in each HTML file.

### Adjust Colors
The color scheme uses CSS custom properties. Edit `assets/css/styles.css`:

```css
:root {
  --color-black: #0d0d0d;      /* Main black */
  --color-white: #f8f7f5;      /* Off-white background */
  --color-gray-700: #404040;   /* Text color */
  /* etc. */
}
```

### Add Analytics
Add your tracking code before `</body>` in each HTML file:

```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-ID');
  </script>

  <!-- JavaScript -->
  <script src="assets/js/main.js"></script>
</body>
```

## Step 5: Deploy

### Option A: Deploy to Netlify (Recommended - FREE)
1. Create account at https://netlify.com
2. Drag and drop the entire project folder
3. Your site will be live in seconds
4. Add your custom domain in settings

### Option B: Deploy to GitHub Pages
1. Create a GitHub repository
2. Push your code to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repo-name`

### Option C: Traditional Web Hosting
1. Use FTP/SFTP to upload all files
2. Upload to your web server's public directory (usually `public_html` or `www`)
3. Ensure all files maintain their folder structure

## Step 6: Add SSL Certificate

Most hosting providers offer free SSL certificates:
- **Netlify**: Automatic HTTPS
- **GitHub Pages**: Automatic HTTPS
- **Traditional hosting**: Usually free through Let's Encrypt

## Common Issues & Solutions

### Logo Not Showing
- Check that the logo file exists in `assets/images/`
- Verify the filename matches what's in the HTML
- Try a different image format (SVG, PNG, or JPG)

### Calendly Not Opening
- Make sure you've replaced ALL instances of the placeholder link
- Check that the Calendly script is loading (check browser console)
- Verify your Calendly link is correct and public

### Mobile Menu Not Working
- Clear your browser cache
- Make sure `assets/js/main.js` is loading
- Check browser console for errors

### Styling Issues
- Clear browser cache
- Verify `assets/css/styles.css` is in the correct location
- Check browser console for 404 errors

## Performance Tips

### Optimize Images
- Use SVG for your logo (scalable and small file size)
- Compress any photos you add
- Use WebP format for modern browsers

### Enable Caching
Add a `.htaccess` file (for Apache servers):
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## Need Help?

### Resources
- [Calendly Help Center](https://help.calendly.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Support
Contact Black Lab Agency for customization or technical support.

## Checklist: Pre-Launch

- [ ] Logo added and displaying correctly
- [ ] Calendly link updated in all 5 HTML files
- [ ] Tested all pages on desktop
- [ ] Tested all pages on mobile (or resized browser)
- [ ] Tested dark mode (change system appearance settings)
- [ ] All CTAs open Calendly correctly
- [ ] Analytics tracking code added
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Tested booking flow from each page
- [ ] Reviewed all content for accuracy
- [ ] Tested in multiple browsers

## What's Included

✅ 5 fully responsive HTML pages
✅ Modern, conversion-focused design
✅ **Automatic dark mode** - detects system preferences
✅ Calendly integration throughout
✅ Mobile-responsive navigation
✅ Smooth scroll animations
✅ Interactive hover effects
✅ Case studies with real metrics
✅ Category-specific landing pages
✅ SEO-friendly structure
✅ Cross-browser compatible

## Ready to Launch! 🚀

Once you've completed the checklist above, your website is ready to start generating leads and booking calls for Black Lab Agency!
