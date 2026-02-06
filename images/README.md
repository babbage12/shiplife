# Images

Web-ready images hosted on GitHub. Older images remain on Cloudinary.

## Structure

```
images/
├── hero/          # Hero images for location panels
│   └── {location-slug}/
│       └── {image}.jpg
└── gallery/       # Gallery photos organized by location
    └── {location-slug}/
        └── {image}.jpg
```

## Naming Convention

**Location folders** — lowercase, hyphens, no special chars:
- `hero/hong-kong/`
- `hero/punta-arenas/`
- `gallery/hong-kong/`

**Image files** — descriptive names or numbers:
- `hero/rome/27.jpg`
- `gallery/rome/colosseum.jpg`

## Before Committing

1. **Resize** to max 1600px width (1200px is fine for most)
2. **Compress** using ImageOptim, Squoosh, or similar
3. **Target file size**: under 200KB for hero images, under 150KB for gallery

## Usage in locations.js

```javascript
// Hero image
image: "./images/hero/rome/27.jpg"

// Gallery images
photos: [
    { src: "./images/gallery/rome/colosseum.jpg", caption: "The Colosseum" }
]
```
