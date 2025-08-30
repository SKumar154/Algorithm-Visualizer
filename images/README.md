# Images Directory

## Background Image for About Me Page

To complete the About Me page setup, please add your background image here:

1. **File Name**: `good_pfp.jpg` (or any image format: .jpg, .png, .webp)
2. **Location**: Place the image in this `images/` directory
3. **Recommended Size**: At least 1920x1080 pixels for optimal quality
4. **Format**: JPG, PNG, or WebP

### Current Setup

The About Me page (`pages/community_hub.html`) is configured to use:
- **Image Path**: `../images/good_pfp.jpg`
- **Background Position**: `center right` (focuses on the right side where you appear)
- **Gradient Overlay**: Applied for text readability

### Alternative Setup

If you want to use a different image name or path, update the CSS in `pages/community_hub.html`:

```css
.hero-section {
    background-image: url('../images/YOUR_IMAGE_NAME.jpg');
    /* ... other properties ... */
}
```

### Image Requirements

- **High Quality**: Clear, professional photo
- **Good Lighting**: Well-lit so you're clearly visible
- **Scenic Background**: The mountain landscape and town view will create a beautiful backdrop
- **Aspect Ratio**: 16:9 or similar wide format works best

Once you add the image, the About Me page will display with your photo as the full-screen background, positioned to show you clearly on the right side with the beautiful landscape visible.

