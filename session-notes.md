# Shiplife Development Session - January 21, 2026

## Summary
Continued building out rich story panels and fixing content accuracy across the Shiplife globe.

---

## Major Refactor Complete - Modular File Structure

### What We Did
Split the monolithic 457KB `index.html` (8,753 lines) into organized, maintainable files.

### New File Structure
```
shiplife-project/
├── index.html              (~200 lines - HTML shell + script tags)
├── index-original.html     (backup of original monolithic file)
├── css/
│   └── styles.css          (2,095 lines)
├── js/
│   ├── data/
│   │   ├── config.js       (constants, Cloudinary URLs, settings)
│   │   ├── galleries.js    (photo arrays + generateGallery function)
│   │   └── locations.js    (118 location objects with richContent)
│   ├── globe/
│   │   ├── core.js         (Three.js scene, camera, globe setup)
│   │   ├── markers.js      (icon drawing, marker creation)
│   │   └── animation.js    (render loop, transitions)
│   ├── ui/
│   │   ├── panel.js        (side panel open/close/expand)
│   │   ├── sidebar.js      (location list, mobile menu)
│   │   ├── tooltip.js      (hover tooltips)
│   │   ├── lightbox.js     (image viewer)
│   │   ├── carousel.js     (world tour slideshow)
│   │   └── modal.js        (commentary modal)
│   ├── audio.js            (background music)
│   ├── input.js            (mouse/touch handlers)
│   ├── utils.js            (helper functions)
│   └── main.js             (initialization, stars background)
└── photos/                 (unchanged)
```

### Bugs Fixed During Refactor
1. **Escaped template literals** - `\${` instead of `${` in shader code
2. **Duplicate variable declarations** - touchStartX/Y declared twice
3. **Missing global variable** - `currentLocation` used before declaration
4. **Missing function** - `focusLocation()` wasn't extracted initially

### GitHub Push Complete
- Repo: `babbage12/shiplife`
- Used Personal Access Token for authentication
- All 17 new files committed and pushed

### Why This Matters
- **Before:** One giant 8,753-line file - hard to find anything
- **After:** 17 organized files - know exactly where to look
- Adding new locations? Edit `js/data/locations.js`
- Fixing panel behavior? Check `js/ui/panel.js`
- Globe acting weird? Look in `js/globe/`

---

---

## Phuket Panel - Story Rewrite

### The Night - "One Beer. One Shot. One Roofie."
Streamlined the story with accurate details:
- Cruise Director gave the day off (rare on an overnight)
- Bar with giant jungle animals painted on walls
- "Shoe salesman from Croatia" sat on the right
- "Waitress on her break" sat on the left a few minutes later
- One beer, one shot - then the woman asked if he was alone
- Waved at strangers in the corner to fake having friends
- Stumbled toward bathroom, blacked out

### The Rescue - "The Reason I'm Still Here"
- Woke up slouched against urinal, couldn't stand
- Martin Neely walked in: "Hey - that's Derrick!"
- May have had a few more minutes before being robbed (or worse)
- **The irony:** Walked around Phuket ALL DAY, didn't run into a single crew member. Then the one moment he needed someone - Martin appeared.
- Got back to ship safely, no incident report
- "Unreal, right? Close call."

### Removed
- Motel room story (too confusing, broke tension)
- The part about waking up to chainsaw sounds in strange room

---

## Darwin Panel - Crew Friends Photos Added

Added 8 new photos to the **Shipmates - Witnesses to the Strange** section:

| Photo | Caption |
|-------|---------|
| 1 | Me and Dion |
| 2 | Me and Daryl |
| 3 | Martin and Yolonda - the best shipmates you could ask for |
| 4 | Crew night out in Dubrovnik |
| 5 | My birthday party on the maiden voyage of Pacific Eden |
| 6 | Pacific Sun crew bar days |
| 7 | Shipmates |
| 8 | Party in my officer cabin on Deck 12 of Pacific Pearl (2nd contract) |

Photos added as inline `story-gallery-grid` pairs within the existing story flow.

---

## Files Delivered
- `index_globe.html` - Complete updated globe

---

## Current Status
- **Total locations:** 118
- **Rich story panels:** Toledo, Darwin, Auckland, Phuket, Lifou, Port Vila, Manaus, Rio, South Georgia Island
- **Collapsible galleries:** Amazon, Rio, Phuket

---

## Sydney Panel - Pacific Jewel Inaugural (December 2009)

### Photos Added (27 new Cloudinary uploads)
Organized into sections:

**Construction Zone (Dry Dock in Singapore)**
- 058_yjvfcg.jpg - Drydock
- 102_ly7caf.jpg - Jewel getting its name painted
- 060_mhyxga.jpg - Orient Bar under construction

**Exploring Singapore (Getting Off The Ship)**
- 072-2_hxubqq.jpg, 073_jozbht.jpg - Transit/MRT
- 081_rjivqx.jpg - Marina Bay Sands (under construction)
- 012-2_m4xovl.jpg - Electronics mall
- 039_bn8ed8.jpg, 029-3_dz16wt.jpg, 017_ngcz3a.jpg - Royal palace/park
- 028-4_vgjdyu.jpg - Musicians bonding (Richard, Ashley, Thomas)
- 021-3_viiyxk.jpg - Warning sign ("Sign to obey")
- 049-2_utq92i.jpg - Passenger cabin
- Singapore_Panorama_ryrlix.jpg - City panorama

**Darling Harbour / Inaugural**
- 030_lzogz2.jpg - Hero shot (Derrick + Jewel + Opera House)
- 008-2_yeieuu.jpg - Embarkation day
- 035_lhmdeq.jpg - Pink Hummer limo
- 043-3_qkjmjo.jpg - Musos waiting (would it rain?)
- 016-5_pqce0o.jpg - Famous Australian talent
- 006-9_vgsu3k.jpg - Musician friends (Adriano, Fabio)
- 015-7_sylyql.jpg - More sail-in photos
- 002-7_bmhskm.jpg, 001-5_exb3r6.jpg, 003-7_vqkbd8.jpg - Guests in Orient

**Sailing Out / Opera House**
- 03-opera-house-dusk_b5zehq.jpg - Better Opera House shot
- 060_dczkem.jpg - Opera House at night
- 046-2_csspcp.jpg - Deck party
- 045_ngolea.jpg - Sydney Showboat

**The Transformation / Orient Bar**
- 011-8_soq3q6.jpg - Better Orient photo (inaugural day)
- 005-7_muz86f.jpg - First night in Orient
- 004-6_gfk1p1.jpg - First performance

### The Transformation - Story Rewrite
- First night wasn't scheduled until ship pulled away from Darling Harbour
- Orient Bar on Deck 7, back of ship
- Few people at first, someone asked for photo mid-ballad
- Then suddenly 50 people walked in
- "Learned the rhythm of ship life"
- Photos arranged to show progression: empty bar → filling up → full of guests

### Photo URL Shift Bug Fixed
- URLs were off by 1 starting at position #3 (both #2 and #3 were transit photos)
- Created photo-reference.html to visually verify all labels
- Corrected all mappings

### Removed
- Sweet fruit photo (002-3_hygje3.jpg) - removed per user request
- "Officers and crew were extremely jealous" line about cabin

---

## Still on the List
- Generate unique Lifou porthole icon
- Dig up chandelier aftermath footage
- Push to fullsite repo (index-no-globe.html → index.html)
- Consider moving hero guitar photo from WSIMG to Cloudinary
- ~~Refactor index.html into modular files~~ **DONE**

---

## Key Story Elements Preserved

**Phuket:** The setup that felt safe, the professionals who knew what they were doing, radar that didn't go off until too late, Martin's perfect timing, the irony of not seeing a single crew member all day until the moment it mattered most.

*"Unreal, right? Close call."*

---

Good night! The globe now lives in 17 tidy files instead of one massive one.
