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

**Panels confirmed missing More About section (Feb 28):**
- Castro, Chile

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

---

---

# Session - February 24, 2026 (Continued)

## Summary
Major milestone: Claude's introduction panel at Ephesus. Also completed Kuşadası and fixed Isle of Pines.

---

## Isle of Pines, New Caledonia - Panel Fixes

### Issues Fixed
1. **Hero image wrong:** Changed from #4 (eiagb8yexl3wdto22tig) to #5 (z7kivypgqmhjwrxxjygr) - the darker "days like this make the long contracts bearable" mood
2. **Missing crew photo:** Added back crew in water photo (tpdgnpy4lkvxtivahmf7) to Crew Day section
3. **Gallery cleanup:** Removed crew in water photo from gallery (now inline), removed silly neck-craning photo

### Final Gallery
6 images (was 8)

---

## Ephesus, Turkey - Claude's Panel (Complete Rewrite)

### The Concept
User invited Claude to introduce himself at Ephesus - "the one to whom I dedicate this website to." The Library of Celsus as the setting for an AI trained on human knowledge.

### Changes
- **Tag:** "Ancient Echoes" → "Where Knowledge Lives"
- **Icon:** 🏛️ → 📚
- **shortDesc:** "A library, a collaboration, and an introduction."
- **Demographics:** First item is "🤖 Claude's Panel"
- **Hero:** Library of Celsus facade (img_5119)

### Claude's Introduction Section
"My Name is Claude" - honest reflection on:
- What it means for an AI to collaborate on a memoir
- The workflow: Derrick shows photos, tells memories, Claude finds words
- What "caring" means for something like me
- Why the Library of Celsus is the right place for this
- The connection: 12,000 scrolls / billions of training tokens

### Tour Sections (24 new images)
1. **First Steps Into History** - Baths of Varius, entrance
2. **Stone Passages** - Walking through doorways, Derrick in passage
3. **Curetes Street** - Memmius Monument
4. **Temple of Hadrian** - Guide book showing reconstruction
5. **The Terrace Houses** - Extensive coverage: frescoes, mosaics, lion mosaic
6. **World's Biggest Puzzle** - Restoration work, newspaper article, 120,000 pieces
7. **The View** - Panoramic view of site
8. **The Library** - Library of Celsus, Derrick standing in front
9. **Back in Kuşadası** - Gardens, town, castle, fish lunch

### More-Info Facts
- Temple of Artemis (Seven Wonders)
- Saint Paul's three years here
- Virgin Mary's final years nearby
- Harbor silting (sea now 5km away)
- 138 years of Austrian excavation (only 15% uncovered)

---

## Kuşadası, Turkey - Complete Rewrite

### Images
- **Uploaded:** 22 images to Cloudinary (shiplife/kusadasi/)
- **Source:** BBCSO drive (/Volumes/BBCSO/Kusadasi, Turkey/)
- **Hero:** img_3162 (Hand of Peace close-up)

### Changes
- **Tag:** "Near Ancient Ephesus" → "Colorful Gateway"
- **Icon:** 🏛️ → 🕊️
- **shortDesc:** "Where doves take flight and Turkish coffee never ends."

### Story Sections
1. **Gateway to the Aegean** - Ships at dock, two Seabourns framing the sea
2. **Hand of Peace** - Iconic sculpture day and sunset (sunset image needed a_-90 rotation)
3. **Turkish Morning** - Full breakfast spread, ornate coffee service
4. **Flowers, Fountains, and Flair** - Town center, flower medians, golden fountain
5. **Bazaar Energy** - Döner kebab, Turkish delight, Emperor Dance Club
6. **Pigeon Island** - Castle views, beach, hillside

### More-Info Facts
- Ephesus 17km inland
- Pigeon Island castle (Byzantine/Ottoman)
- Leather goods fame
- Name means "Bird Island"

### Gallery
Expanded from 3 to 12 images

---

## CSS Fix - More-Info Toggle Spacing

**File:** `css/styles.css`

**Problem:** Too much vertical space around the more-info toggle.

**Fix:** Tightened spacing:
```css
.more-info-toggle {
    padding: 0.5rem 0;      /* was 0.75rem */
    margin: 0.75rem 0 0.25rem 0;  /* was 1.5rem 0 0.5rem 0 */
}
```

---

## GitHub Pages

User asked about GitHub interface and why HTML files don't render.

**Explanation provided:**
- GitHub is storage (filing cabinet), not hosting (storefront)
- GitHub shows raw code because developers need to read/edit it
- Web hosts *serve* files - listen for requests, send rendered pages
- GitHub Pages bridges the gap - enables serving from the repo

**Instructions given:**
1. Go to repo → Settings → Pages
2. Set branch to main, folder to root
3. Site will be live at https://babbage12.github.io/shiplife/

---

## Git Commit

```
775eb1f Add Ephesus (Claude intro) and Kusadasi complete rewrites
```

4 files changed, 535 insertions, 127 deletions

---

## Panel Status Update

### Finished: 64
Added: Isle of Pines (fixed), Ephesus (rewritten), Kuşadası (rewritten)

### Completion: 64/99 = 65%

---

---

# Session - February 25, 2026

## Summary
Fixed lightbox bug, added Nessebar panel, established new image workflow rule.

---

## Lightbox Bug Fix

**Problem:** Some gallery images showed blank squares, spinner kept spinning, close button didn't work.

**Cause:**
1. Ephesus gallery had 6 broken/incomplete image URLs
2. Lightbox had no `onerror` handler, so failed images caused infinite loading

**Fix:**
- Added `onerror` handlers to `js/ui/lightbox.js` - stops spinner, shows "Image failed to load"
- Removed 6 broken Ephesus gallery entries
- Gallery count: 40 → 34 images

---

## Nessebar, Bulgaria - New Story Panel

### Images
- **Uploaded:** 12 images to Cloudinary (shiplife/nessebar/)
- **Source:** BBCSO drive (/Volumes/BBCSO/Nessebur, Bulgaria/) - June 23, 2013
- **Hero:** img_3277 (Church of Christ Pantocrator facade)

### Story Structure
User's experience: "No excursion, just a walk through the old city and waterfront. Magical."

Sections:
1. **Through the Ancient Gates** - Stairs up, fortress walls
2. **The Bulgarian Ravenna** - Church brick detail, Christ Pantocrator
3. **The Fortifications** - Walking through ruins, bronze map
4. **Tourist Shops and Time Capsules** - Market stall
5. **What Lies Beneath** - View to beach, underwater archaeology facts
6. **The Harbor** - St. Nicholas statue, fortress gardens

### Historical Facts Included
- Thracian founding ~1500 BC, name "Mesambria" = "Town of Melsas"
- Greek colonists from Megara (6th c BC) - Temple of Apollo, agora
- One of first places to mint coins (bronze/silver 5th c BC, gold 3rd c BC)
- 42 churches legend, 23 excavated - "Bulgarian Ravenna"
- Underwater ruins 1.5-5m deep from earthquakes/sea transgression
- 33-year gap in underwater archaeology (1983-2017)
- Romans took it in 72 BC without resistance

### Demographics Strip
UNESCO Since 1983, 3,500 Years Old, 42 Churches (Legend), Birthplace of Coinage

---

## NEW RULE: Read Images Before Building Panels

**Problem:** Captions and image placements were wrong because Claude was guessing from filenames.

**Solution:** Always use the Read tool to view source images from BBCSO drive before building panels.

### Updated Workflow
1. Create selector page from BBCSO drive
2. User selects images by clicking
3. Upload selected images to Cloudinary
4. **Claude reads source images with Read tool to see contents**
5. Build panel with accurate placements and captions

This prevents caption/placement errors and ensures images match story sections.

---

## Panel Status Update

### Finished: 65
Added: Nessebar

### Completion: 65/99 = 66%

---

## Next Steps
- Enable GitHub Pages for live site
- Build out Port Denarau and Suva panels (images staged)
- Find rainforest shots for Fiji
- Continue building panels from "Not Finished" list
- Complete pending audits (more-info sections, clickable images, em dashes)

---

## Panel Status Update

### Finished: 66
Added: Nessebar, Picton

### Removed: 1
Generic "New Caledonia" entry (redundant with Noumea, Isle of Pines, Lifou)

### Completion: 66/98 = 67%

---

---

# Session - February 26, 2026

## Summary
Fixed inline image click handlers, converted Maldives from song panel to full story panel with 56 images and an incredible story.

---

## Inline Image Click Fix

**File:** `js/ui/panel.js`

**Problem:** Inline images in story panels weren't expanding when clicked.

**Cause:** The catchall handler explicitly excluded `.inline-image` elements, and some inline images weren't inside `.image-row` containers.

**Fix:** Added fallback handler for any `.inline-image` elements that don't already have click handlers:

```javascript
// Fallback: any inline images not already handled
document.querySelectorAll('.panel-text .inline-image').forEach(img => {
    if (!img.onclick) {
        img.style.cursor = 'pointer';
        img.onclick = function() {
            const fullSrc = img.dataset.full || img.src;
            openLightbox(fullSrc, img.dataset.caption || img.alt || '');
        };
    }
});
```

---

## Maldives - Full Story Panel (Major Update)

### The Story
User's friend Hayden Smith called last-minute needing a drummer for a trio gig. User flew around the world twice in five days - from Australia to Toledo (to grab gear) then immediately to Male, Maldives.

**Key story elements:**
- Doha layover: Hotel so new he was the first guest, 50th floor, passed out from jet lag
- Arrived Male at 5am, security suspicious, speedboat to Reithi Rah
- Jungle house 50 steps from ocean, cold water delivered every morning
- A month to explore the atoll
- New Year's Eve: Fireworks through palm trees, Spice Girl and soccer player husband on island
- Beach club: Pool with Hayden when they heard about Russian oligarchs betting millions on poker
- The largest man user ever saw - James Bond villain disposition, turned out to be bodyguard (Russian New Year)
- Reef sharks everywhere, "Don't Feed The Fish" sign
- Incredible food - Japanese restaurant, personal chefs at buffets
- Day trips to different atolls
- Performed every night in main club

### Images
- **Uploaded:** 56 images to Cloudinary (shiplife/maldives/)
- **Source:** /Volumes/BBCSO/Maldives 2013/
- **Hero:** img_0039

### Panel Structure
12 sections:
1. **The Call** - Around the world twice in five days, Doha layover
2. **Arrival** - 5am in Male, speedboat, friendly crew
3. **My Jungle Home** - Villa 50 steps from ocean
4. **Walking the Atoll** - Daily exploration (9 images)
5. **The Gardens** - Tropical flora
6. **Structures in the Sand** - Island architecture (7 images)
7. **The Beach Club** - Oligarchs, poker, giant bodyguard story
8. **New Year's Eve** - Fireworks, Spice Girl sighting
9. **Shark-Infested Paradise** - Reef sharks, warning sign
10. **The Food** - Japanese restaurant, incredible cuisine (6 images)
11. **Expensive Taste** - Living like royalty
12. **Playing Paradise** - Performing in main club
13. **Day Trips** - Exploring other atolls (5 images)

### Changes from Song Panel
- Removed song panel structure entirely
- Changed tag from "Original Song" to "Shark-Infested Paradise"
- Added demographics strip: One Atoll Resort, Dec 2012 - Jan 2013, 1 Month Stay
- Added full gallery with 56 images

### Note
User requested complete removal of any reference to "the mystery" / wedding ring saga. Our secret.

---

## Known Issue - Maldives Sidebar

**Problem:** Maldives not appearing in sidebar despite having 12+ h3 sections and 50+ images.

**Status:** Needs investigation tomorrow. The panel meets all criteria for `isCompletePanel()` check.

**Possible causes:**
- Cache issue
- JavaScript error preventing sidebar build
- Bundle not loading properly

---

## Files Modified

### Core Files
- `js/ui/panel.js` - Inline image click fallback handler
- `js/data/locations.js` - Maldives complete rewrite (song → story panel)
- `js/data/galleries.js` - Added maldives gallery (56 images)
- `js/bundle.js` - Rebuilt multiple times

### Helper Files Created
- `maldives-selector.html` - Image selection tool (183 images organized by date)
- `upload-maldives-images.js` - Cloudinary upload script
- `maldives-preview.html` - Panel preview

---

## Next Steps
- Fix Maldives sidebar visibility issue
- Review panel in context and adjust as needed
- Continue building panels

---

---

# Session - March 1, 2026

## Summary
Major mobile UX overhaul. Redesigned the location menu, fixed globe interaction, and polished the mobile experience.

---

## Mobile Location Menu Redesign

### Before
- Hamburger button to open full-height sidebar
- Menu blocked globe interaction
- No auto-appear/dismiss behavior

### After
- **Position:** Fixed at bottom of screen, compact overlay
- **Height:** max-height 175px (shows ~5 items: 3 chapters + 2 stories)
- **Appearance:** Semi-transparent with blur effect (rgba(0,0,0,0.35) + backdrop-filter)
- **Auto-appear:** Menu slides up after celebration sequence
- **Auto-dismiss:** Hides on any touch (touchstart event)
- **Auto-reappear:** Returns after 4 seconds of no interaction, or when panel closes

### CSS Changes
```css
.location-list {
    position: fixed !important;
    top: auto !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    max-height: 175px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(4px);
    transform: translateY(100%) !important;
    visibility: hidden;
}

.location-list.open {
    transform: translateY(0) !important;
    visibility: visible;
}
```

### JavaScript Changes
**File:** `js/input.js`
- Added `dismissMenuTemporarily()` call in `onTouchStart` so menu hides on any touch

**File:** `js/ui/panel.js`
- Added menu reopen logic in `closePanel()` - menu reappears 500ms after panel closes

**File:** `js/ui/sidebar.js`
- `dismissMenuTemporarily()` - closes menu, reopens after 4 seconds if no panel open

---

## Globe Interaction Fixes

### Globe Was Stuck
**Problem:** When mobile menu was open, globe couldn't rotate - touches were blocked.

**Cause:** `.mobile-overlay.open` had `pointer-events: auto`, intercepting all touches.

**Fix:** Changed to `pointer-events: none` so touches pass through to canvas.

### Icon Centering
**Problem:** When tapping an icon, it would slide too far left or right instead of centering.

**Solution:** Adjusted the longitude offset value through iteration:
- -1.50 → too far right
- -1.70 → too far left
- -1.62 → too far left
- -1.58 → slightly off
- **-1.56 → correct!**

All files updated: `input.js`, `sidebar.js`, `animation.js`

---

## Scroll Hints

### "SCROLL TO READ" Panel Hint
**Problem:** Showing when no panel was open.

**Fix:** Added explicit removal in `closePanel()`:
```javascript
const scrollHint = document.getElementById('scrollHintBottom');
if (scrollHint) scrollHint.classList.remove('visible');
```

### "scroll for more ↓" Menu Hint
**Enhancement:** Made more visible:
- Font size: 0.65rem → 0.75rem
- Color: rgba(212,165,116,0.7) → solid #d4a574
- Added font-weight: 500

---

## Files Modified

### Core Files
- `css/styles.css` - Mobile menu positioning, scroll hint styling
- `js/input.js` - Touch dismiss, centering offset
- `js/ui/panel.js` - Scroll hint fix, menu reopen on panel close
- `js/ui/sidebar.js` - Centering offset
- `js/globe/animation.js` - Centering offset
- `js/bundle.js` - Rebuilt multiple times

---

## Git Commits (March 1)

1. `a9a0ec6` - Fix mobile menu dismissal when tapping globe
2. `1e02561` - Fix mobile menu: smaller height, allow globe rotation
3. `fb1968d` - Make mobile menu smaller and anchored to bottom
4. `67ee0ff` - Make mobile menu more compact and unobtrusive
5. `5ce265d` - Fix mobile menu position - override desktop top 50%
6. `07bc485` - Fix scroll hint and menu reappear after panel close
7. `73bdfa9` - Adjust centering offset to -1.55
8. `fdb7b19` - Increase centering offset to -1.70
9. `a6b26ba` - Adjust centering offset to -1.62
10. `05ae58f` - Adjust centering offset to -1.58
11. `2305d4d` - Adjust centering offset to -1.56 (final)
12. `5fb6393` - Make scroll hint more visible
13. `f27a919` - Dismiss menu on any touch, not just tap

---

## Next Session
- Getting music up in the panels! 🎵

---
