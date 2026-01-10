# How to Add Hero Background Image

## Quick Instructions

The hero section is configured to display a background image of a car on a lifting platform with a mechanic working on it.

### Step 1: Get Your Image

You need a photo showing:
- A car on a lifting platform
- A mechanic working on the vehicle
- Workshop environment

**Recommended image specifications:**
- Format: JPG or WebP
- Dimensions: At least 1920x800 pixels (wider is better)
- File size: Optimized to < 500KB for fast loading
- Quality: High quality but compressed

### Step 2: Add the Image to Your Project

1. **Save your image** with the filename: `hero-background.jpg`

2. **Copy it to the public folder:**
   ```
   SaveInn2026/public/hero-background.jpg
   ```

3. **That's it!** The image will automatically appear on the homepage hero section.

### Alternative: Use a Different Filename

If you want to use a different filename, edit this file:
```
src/components/Hero.astro
```

Find line 39 and change the filename:
```css
url('/hero-background.jpg');
```

Change to your filename:
```css
url('/your-image-name.jpg');
```

## Image Tips

### Finding/Creating the Image

**Options:**
1. **Take a photo** in your workshop showing a real mechanic at work
2. **Use a stock photo** from sites like:
   - Unsplash (free)
   - Pexels (free)
   - Pixabay (free)
   - Adobe Stock (paid)
3. **Hire a photographer** to take professional photos of your workshop

**Search terms for stock photos:**
- "car mechanic workshop"
- "auto repair shop"
- "car on lift"
- "mechanic working on car"
- "auto service"

### Optimizing Your Image

Before adding the image, optimize it:

**Online tools (free):**
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (for Mac)

**Tips:**
- Resize to 1920px wide maximum
- Compress to reduce file size
- Convert to WebP format for better performance (optional)

### Current Behavior

**Without image:**
- Shows a clean gradient background (gray to white)
- Website still looks professional

**With image:**
- Background image visible with white overlay (92% opacity)
- Text remains readable over the image
- Image covers entire hero section
- Responsive on all devices

## Testing

After adding the image:

1. **Refresh your browser** (Ctrl+F5 or Cmd+Shift+R)
2. **Check mobile view** - image should still look good
3. **Verify text is readable** - white overlay ensures text visibility

## Troubleshooting

**Image not showing?**
- Check filename matches exactly: `hero-background.jpg`
- Check file is in `/public` folder (not `/src`)
- Clear browser cache and refresh (Ctrl+F5)
- Check browser console for errors (F12)

**Image looks stretched or blurry?**
- Use a higher resolution image (minimum 1920px wide)
- Make sure image aspect ratio is landscape (wider than tall)

**Image too dark / text hard to read?**
- The white overlay is set to 92% opacity
- You can adjust this in `src/components/Hero.astro` line 36-37
- Increase first number for lighter overlay: `rgba(255, 255, 255, 0.95)`

## Example File Structure

```
SaveInn2026/
├── public/
│   ├── hero-background.jpg  ← Your image goes here
│   ├── logo.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Hero.astro       ← Background configured here
│   └── ...
└── ...
```

## Need Help?

If you can't find a suitable image, let me know and I can:
- Help you find free stock photos
- Suggest photographers in Hamburg
- Adjust the hero section design to work without a background image
