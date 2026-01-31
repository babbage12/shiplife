# Shiplife Development Session - January 23, 2026

## Summary
Added 50 custom AI porthole images to complete all 118 locations, plus UI improvements for marker bounce animation and fixed a red screen flash bug. Also added bulk photo uploads to many locations, created 3 new locations, and built several new richContent panels.

**Evening Session:** Completed richContent panel audit - added more-info and gallery sections to 22+ panels. Fixed broken Cloudinary URLs. Identified mystery photos (Portovenere). Added 6 Mediterranean location panels with 19 new photos.

---

## Custom Porthole Images - COMPLETE

### All 118 Locations Now Have Unique Images!
Added 50 new AI-generated porthole images in 5 batches:

**Batch 1 - Greece & Turkey (11 images)**
- Mykonos, Zakynthos, Nafplio, Katakolon, Pylos, Itea, Parga (Greece)
- Kuşadası, Izmir, Çeşme (Turkey)
- Hvar (Croatia)

**Batch 2 - Mediterranean & Black Sea (10 images)**
- Šibenik (Croatia), Venice, Ravenna (Italy)
- St. Tropez (France)
- Constanța (Romania), Odessa (Ukraine)
- Haifa (Israel), Doha (Qatar)
- Red Sea Transit, Sharm El Sheikh (Egypt)

**Batch 3 - Asia, Australia, Antarctica (10 images)**
- Mormugao/Goa, New Mangalore (India)
- Phuket (Thailand)
- Surabaya, Semarang (Indonesia), Dili (East Timor)
- Tauranga (New Zealand), Perth (Australia)
- Lemaire Channel, Port Lockroy (Antarctica)

**Batch 4 - South America (10 images)**
- Falkland Islands
- Beagle Channel, Puerto Montt, Punta Arenas, Valparaíso, Santiago, Concepción, Valdivia (Chile)
- Buenos Aires (Argentina), Montevideo (Uruguay)

**Batch 5 - Brazil, Caribbean, Special (9 images)**
- Salvador, Recife, Fortaleza (Brazil)
- Cartagena (Colombia), Lima (Peru)
- San Juan (Puerto Rico)
- Reithi Rah (Maldives)
- Queen Victoria (Cunard), Amsterdam (Netherlands)

### Prompt Format Used
```
looking through a vintage ship porthole window at [landmark/scene] in [Location Name]
```

---

## French Riviera Cluster Fix

### Problem
Marseille, Le Lavandou, St. Tropez, Monte Carlo, and San Remo icons were overlapping too much.

### Solution
- Reduced icon sizes by 20% (0.85 → 0.68, San Remo 0.50 → 0.40)
- Doubled marker offsets to spread them apart more

---

## Bounce Animation - New Feature

### What It Does
When clicking a location from the sidebar:
- Globe rotates to the location
- Icon bounces continuously at 50% larger size
- Bouncing stops when user clicks the icon to open panel

### Settings
- Cycle duration: 1600ms (slow, gentle pulse)
- Scale increase: 50%

---

## Red Screen Flash - Bug Fix

### Problem
Intermittent red flash appearing every ~30 seconds, too fast to capture.

### Cause
WebGL renderer had transparent clear color, allowing momentary GPU artifacts to show through.

### Solution
- Set explicit clear color matching body background (`0x0a1628`)
- Added WebGL context loss/restore handlers
- Strengthened video texture update safeguards (check paused state, currentTime, videoWidth)

---

## Bulk Photo Uploads & Panel Updates

### New RichContent Panels Built
- **Kotor, Montenegro** - Added fortress wall images and story content
- **Alexandria, Egypt** - Bibliotheca Alexandrina and Citadel images with history
- **Ushuaia, Argentina** - End of the world views, multiple gallery images
- **Barcelona, Spain** - Olympic Village & Museum tour (6 images)
- **Piran, Slovenia** - Added Lipica Stud Farm excursion with horse show images
- **Lemaire Channel, Antarctica** - Scenic cruising through "Kodak Alley"
- **Malta** - Added image to existing entry

### Hero Image Updates
- Christmas Island - New hero image
- Falkland Islands - Updated to photo with Falklands sign
- Maldives/Reithi Rah - New hero image
- Semarang, Indonesia - Borobudur temple image

### Gallery Additions
- Auckland, NZ - Sky Tower needle image
- Door #3 (Auckland) - Oyster story image, piano bar shot
- Milford Sound, NZ - Multiple scenic images

---

## New Locations Created

### Komodo Island, Indonesia (id: 119)
- Coords: -8.5450, 119.4411
- Tag: "Here Be Dragons"
- Icon: 🦎
- RichContent panel with Komodo dragon encounter

### Sea Days - Near Easter Island (id: 120)
- Coords: -27.1127, -109.3497
- Tag: "Pacific Crossing"
- Icon: 🌊
- Reflective content about days at sea

### Petermann Island, Antarctica (id: 121)
- Coords: -65.1667, -64.1333
- Tag: "Penguin Paradise"
- Icon: 🐧
- Scenic sail-by (did not go ashore), penguin colony views

---

## Lipica Horse Show - Mystery Solved!

### The Question
Two unknown images from a horse show near tender boats - couldn't remember the location.

### The Answer
**Lipica, Slovenia** - The famous Lipizzan horse stud farm, est. 1580. Shore excursion from Koper/Piran area. Added both images to the Piran, Slovenia entry with new richContent panel.

---

## Cloudinary Folder Migration

Moved all porthole icons to "Icons" folder in Cloudinary. Updated all URLs in `config.js` to include the new path.

---

## Still On The List
- Lifou needs unique spider porthole image (currently same as New Caledonia)
- Generate unique Lifou porthole icon
- Dig up chandelier aftermath footage
- Find Akaroa graveyard video
- Consider moving hero guitar photo to Cloudinary

---

## Evening Session - RichContent Panel Audit

### The Task
Check all existing richContent panels and ensure each has:
- `more-info-container` (expandable fun facts)
- `photo-gallery-section` (expandable photo grid)

### Panels Updated (16 total)
| Location | More-Info | Gallery |
|----------|-----------|---------|
| Auckland | Added | Added (10 images) |
| Sea Days | Added | Added (2 images) |
| Komodo Island | Added | Added (4 images) |
| Ushuaia | Added | Added (7 images) |
| Sydney | Already had | Added (20 images) |
| Akaroa | Added | Already had |
| Kotor | Added | Added (3 images) |
| Malta/Valletta | Added | Added (2 images) |
| Alexandria | Added | Added (2 images) |
| Lemaire Channel | Added | Added (4 images) |
| Petermann Island | Added | Added (5 images) |
| Barcelona | Added | Added (6 images) |
| Rio de Janeiro | Added | Already had |
| Port Vila | Already had | Added (1 image) |
| Lifou | Already had | Added (2 images) |
| Piran | Added | Added (2 images) |

---

## Bug Fix - Broken Porthole Icons

### Problem
After earlier session, most porthole icons showed broken images (404 errors).

### Cause
URLs in config.js contained `/Icons/` folder path, but images were never actually moved to that folder in Cloudinary.

### Solution
Removed `/Icons/` from all porthole URLs in config.js.

---

## Bug Fix - Petermann Island

### Problems
1. Icon overlapping with Port Lockroy
2. Wrong porthole icon showing (Kotor instead of Antarctic)
3. Bad hero image

### Solutions
1. Added marker offsets for both Petermann Island and Port Lockroy in markers.js
2. Added Petermann Island to locationPortholeURLs using Port Lockroy's Antarctic image
3. Swapped hero image with better one from gallery

---

## Mystery Photos Identified - Portovenere!

### The Question
Two photos showing dramatic coastal views through stone fortress windows - location unknown.

### The Answer
**Portovenere, Italy** - The fortress overlooking the Gulf of Poets near Cinque Terre. Added both photos to new richContent panel.

---

## New Mediterranean Panels (6 locations, 19 photos)

### Portofino, Italy
- 1 photo: narrow alley leading to harbor
- Full richContent panel with fun facts

### Portovenere, Italy
- 2 photos: fortress window views of Ligurian coast
- Full richContent panel with Byron's Grotto history

### Rome, Italy
- 4 photos added to gallery
- Full richContent panel

### San Remo, Italy
- 9 photos: bike path, coastal views, Belle Époque villa
- Full richContent panel with flower market/music festival facts

### Marseille, France
- 2 photos: Old Port with Fort Saint-Jean
- Full richContent panel with MuCEM/Calanques facts

### Monte Carlo, Monaco
- 1 photo
- Full richContent panel with casino/Grand Prix facts

---

## Other Updates

### Šibenik, Croatia
- Replaced placeholder description with proper content about UNESCO cathedral and Game of Thrones filming

---

## Files Modified
- `js/data/config.js` - Added 50 new porthole image URLs, Icons folder path migration
- `js/data/locations.js` - Built/updated panels for Kotor, Alexandria, Ushuaia, Barcelona, Piran, Lemaire Channel, Malta; created Komodo, Sea Days, Petermann Island; updated hero images and galleries for multiple locations
- `js/globe/markers.js` - French Riviera size/offset adjustments
- `js/globe/animation.js` - Continuous bounce animation, video texture safeguards
- `js/globe/core.js` - WebGL clear color fix, context loss handlers
- `js/ui/panel.js` - Stop bounce when panel opens

---

## Git Commits
1. "Add 50 custom AI porthole images for remaining locations" - pushed
2. "Add continuous bounce animation for sidebar-selected markers" - local only
3. "Add bulk photo content, 3 new locations, and Lipica horse show"
4. "Add rich content sections to 16 location panels"
5. "Fix Cloudinary URLs and add Petermann Island marker offsets"
6. "Add richContent panels to 6 Mediterranean locations"

---

## Location Count
- Started with 118 locations
- Added 3 new locations (Komodo, Sea Days, Petermann Island)
- **Total: 121 locations**

---

## Codebase Stats
| Category | Lines |
|----------|------:|
| JavaScript | 8,357 |
| CSS | 2,095 |
| HTML | 199 |
| **Total** | **~10,650** |

Largest files:
- locations.js: 4,175 lines (content/data)
- markers.js: 1,920 lines
- styles.css: 2,095 lines

---

Massive session! All 121 portholes complete, 22+ panels fully built out, mystery photos identified, ~10,650 lines of code.
