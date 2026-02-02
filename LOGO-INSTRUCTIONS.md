# Logo Setup Instructions

## Your Black Lab Profile Logo

Your website is now configured to use your black lab profile image as the logo.

### How to Add Your Logo:

1. **Save Your Image:**
   - Save the black lab profile image (the one you showed me - the detailed side profile of the black lab's head)
   - Save it as `logo.png`
   - Recommended size: 400px height (width will auto-scale)
   - File format: PNG with transparent background (preferred) or white background

2. **Upload to Your Website:**
   - Place the file here: `assets/images/logo.png`
   - Replace any existing file at that location

3. **The image you need to use is the black lab profile you showed me** - the beautiful side profile silhouette of the black lab's head with detailed fur texture and artistic shading.

### File Path:
```
Black-Lab-Agency/
└── assets/
    └── images/
        └── logo.png  <-- Place your logo here
```

### Current Status:
- ✅ All 5 HTML pages are configured to use `logo.png`
- ✅ Logo height is set to 50px in header (will scale proportionally)
- ✅ Dark mode support: The image will automatically invert in dark mode
- ⏳ **Action needed:** Save your black lab profile image as `logo.png` in `assets/images/`

### If You Need to Change the File Format:

**For JPG instead of PNG:**
- Save as `logo.jpg`
- Update all HTML files: Find `logo.png` and replace with `logo.jpg`

**For SVG:**
- Save as `logo.svg`
- Update all HTML files: Find `logo.png` and replace with `logo.svg`

### Testing Your Logo:

After adding your logo file:
1. Open `index.html` in your browser
2. The logo should appear in the top-left corner
3. Resize the window to test mobile view
4. Change your system to dark mode to test dark mode appearance

### Need Help?

If your logo doesn't appear:
- Check the file path is exactly: `assets/images/logo.png`
- Check the filename is lowercase
- Clear your browser cache
- Check browser console for errors (F12 → Console tab)
