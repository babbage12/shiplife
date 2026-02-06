# Images

Web-ready images hosted on GitHub. Older images remain on Cloudinary.

## Structure

```
images/
├── hero/          # Hero images for location panels
│   └── {location-slug}.jpg
└── gallery/       # Gallery photos organized by location
    └── {location-slug}/
        └── {descriptive-name}.jpg
```

## Naming Convention

**Location slugs** — lowercase, hyphens, no special chars:
- `hong-kong.jpg`
- `punta-arenas.jpg`
- `port-moresby.jpg`

**Gallery photos** — descriptive names:
- `gallery/hong-kong/victoria-peak-view.jpg`
- `gallery/hong-kong/star-ferry.jpg`

## Before Committing

1. **Resize** to max 1600px width (1200px is fine for most)
2. **Compress** using ImageOptim, Squoosh, or similar
3. **Target file size**: under 200KB for hero images, under 150KB for gallery

## Usage in locations.js

```javascript
// Hero image
image: "./images/hero/hong-kong.jpg"

// Gallery images
photos: [
    { src: "./images/gallery/hong-kong/victoria-peak.jpg", caption: "View from Victoria Peak" }
]
```
