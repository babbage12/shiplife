# Shiplife

An interactive 3D globe experience documenting 12 years of life at sea as a cruise ship musician.

## Live Demo

**[babbage12.github.io/shiplife](https://babbage12.github.io/shiplife/)**

## About

Shiplife is an immersive storytelling experience built around an interactive globe. Click on brass porthole markers to explore over 120 ports of call across six continents, each with photos, stories, and memories from a career performing on cruise ships including Seabourn, Holland America, Cunard, and P&O Australia.

### The Three Doors

The experience is structured around three pivotal moments - "doors" that changed everything:

1. **Toledo, Ohio** - Where it all began
2. **Darwin, Australia** - The path continues
3. **Auckland, New Zealand** - A new chapter

## Features

- **Interactive 3D Globe** - Built with Three.js, featuring smooth rotation, zoom, and marker interactions
- **AI-Generated Porthole Art** - Custom porthole frames created with Stable Diffusion for each location
- **Rich Content Panels** - Each location features photos, stories, and contextual information
- **Responsive Design** - Works on desktop and mobile devices
- **Progressive Loading** - Textures load in parallel for optimal performance

## Tech Stack

- **Three.js** - 3D rendering and globe visualization
- **Vanilla JavaScript** - No framework dependencies
- **Cloudinary** - Image hosting and optimization
- **GitHub Pages** - Hosting

## Project Structure

```
shiplife/
├── index.html          # Main entry point
├── js/
│   ├── main.js         # Application initialization
│   ├── input.js        # User interaction handling
│   ├── globe/
│   │   ├── core.js     # Globe setup and rendering
│   │   ├── markers.js  # Porthole marker system
│   │   └── animation.js # Camera and globe animations
│   ├── ui/
│   │   ├── panel.js    # Location panel display
│   │   ├── sidebar.js  # Navigation sidebar
│   │   └── lightbox.js # Image gallery viewer
│   └── data/
│       ├── locations.js # All 120+ location definitions
│       └── config.js    # Configuration and URLs
└── css/
    └── styles.css      # All styling
```

## Author

**Derrick Hudson** - Musician, entertainer, and world traveler

- Website: [derrickhudson.com](https://derrickhudson.com)
- 12 years performing on cruise ships worldwide
- Former Queen's Room Vocalist on the Queen Victoria
- Resident musician at Reithi Rah Resort, Maldives

## License

This project contains personal photographs and stories. Please contact the author for any usage beyond personal viewing.
