# 12 Years at Sea

An interactive 3D globe memoir of twelve years as a cruise ship musician.

**Live:** [babbage12.github.io/shiplife](https://babbage12.github.io/shiplife/)

## About

Spin the globe and click a brass porthole to open a story. More than 120 ports of call across six continents, each with photos and memories from performing on ships for Seabourn, Holland America, Cunard, and P&O Australia. Some panels also carry original music.

### The Three Chapters

First-time visitors can follow the story in order or explore freely:

1. **Toledo, Ohio** - Chapter 1: Escape
2. **Darwin, Australia** - Chapter 2: My First Contract
3. **Auckland, New Zealand** - Chapter 3: Full Circle

Finishing Chapter 3 lights up every port on the globe and flies you to the Mediterranean.

## Features

- **3D globe** built with Three.js: drag to rotate, scroll or pinch to zoom
- **Flights between ports** - the camera lifts off, crosses the globe at an altitude matched to the distance, and lands on the next port
- **AI-generated porthole art** for each location (Stable Diffusion via ComfyUI)
- **Story panels** with inline photos, galleries, a lightbox, and expandable "More about..." facts
- **Director's Commentary** - hidden behind-the-scenes stories inside some panels
- **Music player** for songs attached to panels
- **Mobile-friendly** layout with its own location menu and touch controls

## Tech

- Three.js r128 (from cdnjs) and plain JavaScript - no framework
- Cloudinary for all photos, porthole icons, and audio
- GitHub Pages for hosting (deploys on push to `main`)

## Working on it

The page loads one file, `js/bundle.js`, built from the source modules. **Edit the files under `js/`, never `bundle.js`**, then rebuild:

```bash
./build-bundle.sh
```

Preview locally:

```bash
python3 -m http.server 8742
# open http://localhost:8742
```

The guided chapters remember progress in `localStorage` (key `shiplife_progress`). Clear it to see the first-visit experience again.

## Project structure

```
index.html            Page shell, modals, Director's Commentary text
build-bundle.sh       Concatenates the modules below into js/bundle.js
css/styles.css        All styling
js/
  data/
    config.js         Settings, timing, porthole icon URLs
    locations.js      Every location and its story panel HTML
    galleries.js      Photo lists for each panel's gallery
  globe/
    core.js           Scene, renderer, globe, icon loading
    markers.js        Porthole markers, sizing, overlap offsets
    animation.js      Render loop, flights between ports, celebration
  ui/
    panel.js          Story panel open/close and chapter navigation
    sidebar.js        Location list and mobile menu
    lightbox.js       Full-size photo viewer
    carousel.js       Photo carousels inside stories
    modal.js          Welcome and Director's Commentary pop-ups
    tooltip.js        Hover labels
  audio.js            Panel music player
  input.js            Mouse and touch handling
  utils.js            Shared math helpers
  main.js             Starfield and startup
```

## Author

**Derrick Hudson** - musician and entertainer

- Website: [derrickhudson.com](https://derrickhudson.com)
- 12 years performing on cruise ships worldwide
- Queen's Room Vocalist on the Queen Victoria
- Resident musician at Reithi Rah Resort, Maldives

## License

This project contains personal photographs, stories, and music. Please contact the author for any use beyond personal viewing.
