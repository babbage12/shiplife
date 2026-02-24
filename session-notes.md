# Shiplife Project - Session Notes

Running log of work sessions, decisions, and progress.

---

# Session - February 17, 2026

## Summary
Major progress on location panels and several important bug fixes for the panel system.

---

## Patmos, Greece - New Rich Panel

### Images
- **Uploaded:** 20 new images to Cloudinary
- **Gallery:** 22 total images (20 new + 2 existing)
- **Hero:** IMG_20130911_122952 (bougainvillea and sea view, using `g_south` crop)

### Narrative
Created "scooter/pasta quest" story:
- Rented a scooter to explore the island
- Historical facts about St. John and the Book of Revelation (written here ~95 AD)
- Monastery of St. John (founded 1088), Cave of the Apocalypse
- Wandering through Skala's vine-shaded lanes
- Finding fresh pasta with monastery view - the triumphant ending

### Panel Structure
- Demographics strip: Dodecanese Islands, Pop 3,000, UNESCO Site, Scooter Required
- Sections: A Mission Find Pasta, The Scooter, Sacred Ground, The Lanes of Skala, The Reward
- More-info-toggle for additional facts
- Gallery with 22 captioned images

---

## Panel System Fixes

### 1. All Images Now Clickable
**File:** `js/ui/panel.js`

Updated `attachImageClickHandlers()` to handle:
- Hero/panel image (`#panelImage`)
- Story images (`.story-image`)
- Inline images in image rows (`.inline-image`) - with left/right navigation within row
- Gallery thumbnails (`.gallery-thumb`)
- Fallback for any other images in panel-text

All images now show `cursor: pointer` to indicate clickability.

### 2. More-Info-Toggle Sections
**Files:** `css/styles.css`, `js/ui/panel.js`

**Problem:** "More about [Location]" sections were showing expanded by default instead of collapsed.

**CSS Added:**
```css
.more-info-toggle {
    color: var(--gold-light);
    cursor: pointer;
    /* ... styling ... */
}

.more-info-content {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease;
}

.more-info-content.expanded {
    max-height: 1000px;
    opacity: 1;
}
```

**JS Handler Added:** Click handler for `.more-info-toggle` elements that toggles the `.expanded` class.

**Panels using this pattern:** Symi, Patmos, Lemaire Channel, Petermann Island, South Shetland Islands, Ibiza, Roses, Le Lavandou

### 3. Duplicate Hero-Section Removal
**File:** `js/data/locations.js`

**Problem:** 7 panels had both an `image` property (rendered as panel header) AND a `hero-section` div in `richContent`, causing the same image to appear twice.

**Panels Fixed:**
- Symi, Greece
- Lemaire Channel, Antarctica
- Petermann Island, Antarctica
- South Shetland Islands
- Ibiza, Spain
- Roses, Spain
- Le Lavandou, France

**Solution:** Removed the `hero-section` divs from richContent since the `image` property already handles the header image.

---

## Santorini, Greece - Gallery Enhancement

### Images
- **Uploaded:** 21 new images to Cloudinary
- **Gallery:** 46 total images (25 existing + 21 new)

### New Gallery Images (with captions)
- img_3466: Rooftops with ship and Nea Kameni
- img_3470: Classic white domes cascading to caldera
- img_3472: Bronze sculpture with cathedral dome
- img_3473: Cycladic architecture detail
- img_3477-3480: Bell towers, domes, terraces, light/shadow
- img_3481: Fira promenade
- img_3488: Wine barrels (volcanic soil wines)
- img_3492: Stained glass window
- img_3493: Traditional door
- img_3496: Catholic pink tower + Orthodox white dome
- img_3502-3506: Volcanic stone, terraces, bougainvillea
- img_3511: Old port zigzag path view
- img_3518: Cave houses
- img_3522-3523: Catholic Cathedral details
- img_3525: Famous Santorini donkeys (588 steps)

### Inline Image Additions
1. **"The Postcard Made Real"** section:
   - Added image-row-2 with img_3511 (Fira cascading) + img_3466 (caldera view)
   - Followed by img_3470 (classic domes shot)

2. **"Getting Ashore"** section:
   - Added img_3525 (donkeys on the 588 steps)

3. **"Fira"** section:
   - Added img_3496 (Catholic + Orthodox church towers side by side)

---

## Git Commits

1. `913e4f0` - Add Patmos panel with scooter/pasta quest story + make all images clickable
2. `9890750` - Fix more-info-toggle sections to collapse by default
3. `af9ac4a` - Remove duplicate hero-sections from 7 panels
4. *(Pending)* - Santorini gallery and inline image updates

---

## Files Modified

### Core Files
- `js/data/locations.js` - Patmos panel, hero-section removals, Santorini inline images
- `js/data/galleries.js` - Patmos (22 images), Santorini (+21 images)
- `js/ui/panel.js` - Clickable images, more-info-toggle handlers
- `css/styles.css` - More-info-toggle/content styles
- `js/bundle.js` - Rebuilt multiple times

### Helper Files Created
- `patmos-thumbnails.html` - Image selection tool
- `upload-patmos-images.js` - Cloudinary upload script
- `santorini-thumbnails.html` - Image selection tool
- `upload-santorini-images.js` - Cloudinary upload script

---

## Panel Status Update

After today's work:
- **Rich panels with stories:** 48 (added Patmos)
- **Santorini gallery:** 46 images (was 25)
- **Patmos gallery:** 22 images (was 2)
- **All panels:** Images now clickable throughout
- **8 panels:** More-info sections now properly collapse

---

## Mykonos, Greece - Panel Enhancement

### Images
- **Uploaded:** 16 new images to Cloudinary
- **Gallery:** 26 total images (10 existing + 16 new)

### New Gallery Images
- img_20130930_130255, 130304: Harbor views from above
- img_20140620_120347, 120410, 120413, 120433: Whitewashed architecture, ship at anchor
- img_20140620_123523, 132633: Quiet alleys, harbor promenade
- img_3128, 3129: Little Venice waterfront
- img_3130, 3131: Iconic red shutters and blue window details
- img_3135, 3137: Alleys and whitewashed steps
- img_3145, 3148: Windmill ridge and harbor panorama

### Story Enhancements
1. **"The Maze of Chora"** section:
   - Added image-row-2 with red shutters + blue window (img_3130, img_3131)

2. **New "Little Venice" section:**
   - Two waterfront images showing houses over water (img_3128, img_3129)
   - Text about 18th-century captains' houses, sunset cocktails

3. **"The Windmills" section:**
   - Added golden hour windmill shot (img_3145)

4. **New "The Harbor" section:**
   - Panorama with windmills (img_3148)

---

## Sky Bounce Effect - New Feature

**Files:** `js/globe/core.js`, `js/globe/animation.js`, `js/input.js`

### Description
A subtle golden atmospheric glow that pulses once around a marker when it receives focus.

### Implementation
- Created `skyBounceSprite` - a canvas-based sprite with radial gradient (golden center → blue edge)
- Triggers on:
  1. Sidebar click → globe rotates → lands → sky bounce
  2. Direct marker click → sky bounce
- Animation: 600ms, scales 0.025 → 0.06, opacity pulses to 0.9

### Key Code
```javascript
// Gradient for the glow
gradient.addColorStop(0.2, 'rgba(255, 225, 100, 0.9)'); // Bright golden
gradient.addColorStop(0.4, 'rgba(255, 215, 80, 0.8)');  // Strong gold
gradient.addColorStop(0.6, 'rgba(255, 200, 120, 0.5)'); // Warm glow

// Animation
const opacity = Math.sin(progress * Math.PI) * 0.9;
```

---

## UI Change: Sidebar Click → Auto-Open Panel

**File:** `js/ui/sidebar.js`

### Before
- Click sidebar item → globe rotates → marker bounces → must click marker to open panel

### After
- Click sidebar item → globe rotates → sky bounce → panel auto-opens (400ms delay)

### Change
```javascript
// Old: skipPanelOpen = true;
// New:
autoOpenPanel = true;
```

---

## Zoom Transition Smoothing

**Files:** `js/globe/animation.js`, `js/data/config.js`, `js/globe/core.js`

### Problem
Stuttering during zoom-out phase - was recalculating start position each frame.

### Fix
- Store `transitionStartZ` when zoom-out begins
- Properly interpolate: `startZ + (zoomOutDistance - startZ) * easeOut`
- Changed from quadratic to cubic easing for smoother motion

### Config Changes
```javascript
// Before → After
zoomOutDistance: 4.05 → 4.8    // Further back for more rotation room
zoomOutDuration: 600 → 450     // Faster zoom out
zoomInDuration: 800 → 900      // Slower, smoother landing
```

---

## Files Modified (This Session)

### Core Files
- `js/data/locations.js` - Mykonos new sections (Little Venice, The Harbor)
- `js/data/galleries.js` - Mykonos (+16 images = 26 total)
- `js/data/config.js` - Zoom transition timing
- `js/globe/core.js` - Sky bounce sprite, transition state
- `js/globe/animation.js` - Sky bounce animation, fixed zoom interpolation
- `js/ui/sidebar.js` - Auto-open panel on click
- `js/input.js` - Sky bounce trigger on marker click

### Helper Files Created
- `mykonos-thumbnails.html` - Image selection tool
- `mykonos-current-gallery.html` - Preview of existing gallery
- `mykonos-uploaded-preview.html` - Preview of new uploads
- `upload-mykonos-images.js` - Cloudinary upload script

---

---

## Muscat, Oman - Gallery Addition

### Changes
- **Kept as song panel** but added gallery
- **Hero changed:** muscat-fortress-portrait (crooked statue face)
- **Gallery:** 6 images selected by user (03, 08, 10, 14, 16, 17)

### Images Uploaded
- muscat-boulevard-palms, muscat-fort-boulevard, muscat-scene-06
- muscat-souk-03, muscat-souk-05, muscat-souk-treasures
- muscat-fortress-portrait (hero)

---

## Parga, Greece - Full Story Panel

### Images
- **Uploaded:** 51 images to Cloudinary (shiplife/parga/)
- **Hero:** parga-phone-01 (#43)
- **Gallery:** 22 images

### Story Structure
Journey narrative from arrival to fortress to beach:
- Arriving by tender
- Walking up to the fortress
- Entering the Kastro (Venetian/Ottoman history)
- Inside the walls
- Views from fortress looking toward beach
- The beach below

### Fixes Applied
- Fixed image/caption mismatches (required viewing each image)
- Added CSS for inline-image max-height: 280px
- Made close button sticky (position: sticky, z-index: 200)

---

## Penang, Malaysia - Full Story Panel

### Images
- **Uploaded:** 34 selected images to Cloudinary (shiplife/penang/)
- **Hero:** penang-73-overlook (crooked Kuan Yin statue face)
- **Gallery:** 5 images

### Story Structure
- **Arriving:** Mariner of the Seas in port, 12 hours to explore
- **Hire a Driver:** "Did what all crew members do" - hired driver to go far from port
- **Kek Lok Si Temple:** Founded 1890, Pagoda of Ten Thousand Buddhas, 30m Kuan Yin statue
- **Cultural Immersion:** Colors like never seen, Hokkien language context (Pī-néng)
- **In a Daze:** Temple after temple, kaleidoscope of colors
- **Mystery Meal:** Driver sped up mountain, Hokkien mee (prawn/pork rib broth), street food capital of Asia
- **Penang Hill:** Bukit Bendera, 833m, British hill station since 1780s, Swiss funicular (1923)
- **The Views:** Mind blown at the overlook

### Cultural Details Added
- Hokkien language: locals call it "Pī-néng"
- Kek Lok Si: "Temple of Supreme Bliss", Hokkien immigrants, 12 years to build statue
- Hokkien mee: prawn and pork rib broth with thick yellow noodles
- Penang Hill: Sedan chairs before funicular, one of steepest tunnel railways in world

---

## Workflow Established

**New image selection workflow:**
1. Create selector page from BBCSO drive (local images)
2. User selects images by clicking
3. Upload only selected images to Cloudinary
4. User picks hero image
5. Build story panel with proper captions

This saves Cloudinary storage and ensures only curated images are uploaded.

---

## Panel Image Fix

**Problem:** Images opening in both new tab AND lightbox

**Cause:** Used `<figure><a href="..." target="_blank"><img></a></figure>` pattern

**Fix:** Changed to `<img class="story-image" data-caption="...">` pattern
- No anchor wrapper
- Lightbox handles clicks via story-image class

---

## Git Commits (This Session Continued)

5. `6e58d79` - Add Muscat gallery + Parga rich panel + UI improvements
6. `fbc8811` - Add Penang story panel with 34 images + cultural details

All pushed to origin/main.

---

## Accurate Panel Status (Updated Feb 24, 2026)

### Finished Panels: 62
(Panels with curated shiplife/ images)

Alexandria, Amalfi, Amazon River, Antibes, Auckland, Bali, Barcelona, Bora Bora, Búzios, Celukan Bawang, Çeşme, Christmas Island, Constanța, Corfu, Darwin, Dubai, Dubrovnik, Dunedin, Ephesus, Florence, Hobart, Hvar, Ibiza, Istanbul, Katakolon, Kotor, Le Lavandou, Lemaire Channel, Lipari, Marseille, Milos, Milford Sound, Monte Carlo, Mumbai, Mykonos, Nafplio, Parga, Patmos, Penang, Petermann Island, Piran, Ponza, Portovenere, Pylos, Rio de Janeiro, Rome, Roses, San Remo, Santorini, Sorrento, South Georgia, South Shetland Islands, Sydney, Symi, Syracuse, Toledo, Tonga, Ushuaia, Valletta, Venice, Yalta, Zakynthos

### Not Finished: 37
(Need images and stories)

Akaroa, Beagle Channel, Brisbane, Broome, Buenos Aires, Castro, Isle of Pines, Itea, Komodo Island, Kuşadası, Lifou, Lima, Melbourne, Nessebar, New Caledonia, Noumea, Odessa, Perth/Fremantle, Phuket, Picton, Port Denarau, Port Vila, Portofino, Propriano, Ravenna, Recife, Saguenay, Santarém, Sea Days, Semarang, Šibenik, St. Tropez, Stromboli, Suva, Tierra del Fuego, Valparaíso, Wellington

### Song Panels (excluded): 20

### Completion: 61/99 = 62%

---

---

# Session - February 22, 2026

## Summary
Continued building story panels. Completed Pylos, Rio enhancement, and Búzios. Fixed duplicate location ID bug.

---

## Pylos, Greece - Fortress Exploration Panel

### Images
- **Uploaded:** 18+ images to Cloudinary (shiplife/pylos/)
- **Hero:** Existing image kept

### Story Structure
8 sections telling the story of early morning arrival and fortress exploration:
- **The Arrival:** First tender privilege when Staff Captain was in good mood
- **Wandering:** Finding the way to Neokastro fortress
- **The Fortress:** Ottoman-era fortress, 1573
- **Exploring the Walls:** Multiple fortress images
- **Bay Views:** Views of Navarino Bay
- **Town & Color:** Flowers, oleander, vibrant colors
- **The Gyro:** Food reward

### Notable Details
- Changed "the Seabourn" to "Seabourn Odyssey" - fitting since visiting where Homer set the Odyssey
- Fixed duplicate similar images at top of panel
- Added town waterfront view (IMG_2823) to replace duplicate

---

## Rio de Janeiro, Brazil - Copacabana Enhancement

### Discovery
- Búzios selector images #1-16 were actually Copacabana beach in Rio
- Selected images #5, 8, 9, 10 for Rio panel

### Images Added
- Wave-pattern sidewalk (iconic Copacabana mosaic)
- Copacabana Palace hotel
- Beach with volleyball nets
- Brasil vs USA beach tournament

### Fixes
- Removed incorrect rotation parameter (a_-90)
- Combined duplicate gallery sections (rio + rioLocal → single gallery)

---

## Búzios, Brazil - New Story Panel

### Images
- **Uploaded:** 12 images to Cloudinary (shiplife/buzios/)
- **Hero:** Existing IMG_6213.jpg kept

### Story Structure
4 sections based on user's experience: "quick afternoon ashore looking for food, found vibrant community"
- **Looking for Food:** Harbor arrival, colorful fishing boats
- **A Vibrant Community:** Yellow church, water taxis (Lucas, Maria Alice), fishermen statues
- **Beaches & Boats:** Grid of boutique hotels, schooners, tropical vegetation
- **Bardot's Legacy:** Brigitte Bardot history (1964), panoramic view

### Ship Reference
- Changed all "Seabourn" to "Seabourn Quest"

### Bug Fixes
1. **Lightbox small images:** Grid images using thumbnail URLs (w_400,h_300) opened small in lightbox. Added `data-full` attributes pointing to w_1200 versions.

2. **Gold indicator not lighting up:**
   - **Cause:** Three locations shared id: 130 (Dunedin, Búzios, Lipari)
   - `markers.find(m => m.userData.id === loc.id)` returned Dunedin's marker instead of Búzios
   - **Fix:** Assigned unique IDs - Búzios: 141, Lipari: 142

---

## Git Commits (February 22)

1. `ba3e367` - Expand Pylos panel with fortress exploration story
2. `2b14b9b` - Add Copacabana images to Rio panel
3. `fb2e4ea` - Add Buzios panel with 12 images + fix duplicate location IDs

---

## Files Modified

### Core Files
- `js/data/locations.js` - Pylos expansion, Rio updates, Búzios panel, ID fixes
- `js/data/galleries.js` - Búzios gallery (12 images)
- `js/bundle.js` - Rebuilt multiple times

### Helper Files Created
- `pylos-selector.html` - Image selection (126 images)
- `buzios-selector.html` - Image selection (76 images)
- `upload-pylos-images.js` - Cloudinary upload
- `upload-buzios-images.js` - Cloudinary upload

---

---

# Session - February 24, 2026

## Summary
Fixed broken more-info sections, added Çeşme panel, established clickable image rule.

---

## More-Info Section Fixes

### Broken Panels Fixed (4)
Changed from broken `<div>` with icon spans to working `<p>` toggle format:
- **Pylos** - Added Homer's Odyssey, Battle of Navarino, fortress history
- **San Remo** - Added Pista Ciclabile bike path, flower market, music festival, casino
- **Syracuse** - Added Archimedes, conquerors, wild papyrus, Plato's visits
- **Parga** - Added entirely new section: Venetian rule, Great Betrayal of 1819, exodus story

### Correct Format
```html
<p class="more-info-toggle" onclick="this.nextElementSibling.classList.toggle('expanded'); this.textContent = this.nextElementSibling.classList.contains('expanded') ? '− Less about X' : '+ More about X'">+ More about X</p>
<div class="more-info-content">
    <p>Content here...</p>
</div>
```

---

## Çeşme, Turkey - New Story Panel

### Images
- **Uploaded:** 9 images to Cloudinary (shiplife/cesme/)
- **Source:** Two visits - July 2, 2013 (camera) + October 8, 2013 (phone)
- **Hero:** img_20131008_121115 (castle with minaret)

### Story Structure
- **Opening:** Aegean resort town, unhurried pace
- **The Town Square:** Palm-lined plaza, local cafés
- **The Admiral and His Lion:** Cezayirli Gazi Hasan Pasha statue - Ottoman admiral who walked Istanbul with a pet lion from Africa
- **The Castle:** Built 1508 by Beyazit II
- **Local Life:** Pizza shops, wooden shutters, modern Turkey

### More-Info Facts
- Name means "fountain" (supplied water to ships)
- Windsurfing capital (Alaçatı competitions)
- Battle of Çeşme 1770 (Russian fleet destroyed Ottoman navy)
- Thermal springs (Greek baths to modern spas)
- Greek heritage until 1923 population exchange

---

## Clickable Images Rule

**Rule:** All inline images must be expandable, including hero images, story images, carousel images, and image-row images.

### Implementation
Add to all `<img>` tags:
```html
onclick="openLightbox(this.src.replace('w_1200', 'w_1600'), this.dataset.caption)" style="cursor:pointer"
```

For images with `data-full` attribute:
```html
onclick="openLightbox(this.dataset.full, this.dataset.caption)" style="cursor:pointer"
```

### Panels Fixed
- **Çeşme** - 6 images
- **Beagle Channel** - 5 images
- **Barcelona** - 21 images (4 home section, 8 carousel, 6 Gothic Quarter, 3 views, 2 story)

---

## Pending Audits

### 1. More-Info Sections Audit
**Goal:** All story panels should have a more-info section filled with interesting facts.

**Current Status:**
- 10 working (new toggle style)
- 4 broken → FIXED this session
- 38 using old button style (still functional)
- 63 missing entirely

**Action:** Add more-info sections to the 63 panels missing them.

### 2. Clickable Images Audit
**Goal:** All inline images throughout all panels should have onclick handlers for lightbox expansion.

**Action:** Review all panels and add onclick handlers where missing.

### 3. Em Dash Audit
**Goal:** Remove all em dashes from panel content. Use words, commas, colons, or periods instead.

**Rule:** Do not use em dashes (—). They feel too formal/literary for the conversational tone.

**Status:** ~100+ em dashes across all panels. Hobart fixed (7 removed).

**Action:** Review all panels and replace em dashes with appropriate punctuation.

---

## Patmos Icon Fix

**File:** `js/globe/markers.js`

**Problem:** Patmos icon was too large, covering nearby islands.

**Fix:** Added to `sizeOverrides` at 0.55 scale:
```javascript
"Patmos, Greece": 0.55,
"Symi, Greece": 0.55,
```

---

## Christmas Island - Story Panel

### Images
- **Gallery:** 4 images (removed immigration building #6 - controversial detention center)
- **Hero:** img_0181 (post office)
- **Moved:** lombock.jpg and wrong_side.jpg to Bali gallery (were misplaced)

### Story Structure
"Food Search" narrative:
- **First trip north of Australia** - excitement about new territory
- **The Search for Food** - worried about only finding green bananas
- **The Payoff** - found amazing surf and turf
- **Smugglers Lounge context** - solo show, band sit-ins, passengers loving it

---

## Celukan Bawang, Indonesia - Story Panel

### Images
- **Uploaded:** 7 images to Cloudinary (shiplife/celukan-bawang/)
- **Source:** BBCSO drive (/Volumes/BBCSO/Celukan, Indonesia/)
- **Hero:** img_4020

### Story Structure
"Should Have Taken the Tour" narrative - honest reflection about missing out:
- **The Port:** Just a tender dock
- **Radio Tower:** Excitement at first (#2)
- **The Cows:** Suspicious cows blocking the path (#5)
- **Fine Dining:** Souvenirs and outdoor dining combined (#7)
- **Heading Back:** Tendering back to Odyssey (#9, #10)
- **Landscape:** Nice mountain view (#3)
- **Lesson learned:** Should have taken the excursion

---

## CSS Fix - More-Info Spacing

**File:** `css/styles.css`

**Problem:** Gap too large between collapsed more-info toggle and gallery below.

**Fix:** Added sibling selector:
```css
.more-info-content:not(.expanded) + .photo-gallery-section {
    margin-top: 0.5rem;
}
```

---

## Hobart, Tasmania - Story Panel

### Images
- **Uploaded:** 8 images to Cloudinary (shiplife/hobart/)
- **Source:** BBCSO drive (/Volumes/BBCSO/Hobart, Tazmania 2010/) - March 4-5, 2010
- **Hero:** 015 (Mount Wellington view)

### Story Structure
"Edge of the World" narrative - early ship days excitement:
- **The Edge of the World:** Excitement about wild Tasmania, couldn't believe he was there, sensory overload of early cruise life
- **The Overnight:** Crew party photos - overnight stays meant next-level partying
- **Wild Tasmania:** Saw a Tasmanian devil, learned about DFTD (Devil Facial Tumour Disease)

### More-Info Facts
- Errol Flynn born in Hobart 1909
- Gateway to Antarctica (Mawson, Shackleton, Scott)
- Mount Wellington (kunanyi) - 1,271m
- Salamanca Market - 300+ stalls every Saturday
- MONA - underground eccentric art museum
- Sydney to Hobart yacht race - 628 nautical miles

---

## Panel Status Update

### Finished: 62
Added: Çeşme, Christmas Island, Celukan Bawang, Hobart

### Not Finished: 37
Removed: Çeşme, Christmas Island, Celukan Bawang, Hobart

### Completion: 62/99 = 63%

---

## Next Steps (for future sessions)
- Continue building panels from "Not Finished" list
- Priority locations with images on BBCSO drive
- Use established workflow: BBCSO selector → user picks → upload → build panel
- Complete the two pending audits (more-info sections + clickable images)
