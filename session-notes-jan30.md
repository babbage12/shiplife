# Shiplife Development Session - January 30, 2026

## Summary
Bug fixes for Door navigation, added 21 hero images, created 6 new locations (Castro, Ponza, Amalfi, Elba, Bonifacio, Barbados), removed Concepción. Historical research on Marseille's carousel and WW2 destruction. Photo identification help for mystery locations.

---

## Bug Fixes

### "Continue to Door #2" Button Missing
**Problem:** The button disappeared after opening a Door panel once, on both mobile and desktop.

**Cause:** The button was being moved inside `#panelText` (after `.final-quote`), then destroyed when `panelText.innerHTML` was replaced on the next panel open.

**Fix:** Added code to restore `nextDoorHint` to its original position in `.panel-content` before setting innerHTML.

**File:** `js/ui/panel.js` (lines 78-85)

### Door #2 Opening to Middle Instead of Top
**Problem:** On desktop, Door #2 panel scrolled to center instead of top.

**Fix:** Added `requestAnimationFrame` to ensure scroll reset happens after layout is complete.

**File:** `js/ui/panel.js` (lines 109-112)

---

## Hero Images Added (21)

| Location | Notes |
|----------|-------|
| Venice, Italy | |
| Nessebar, Bulgaria | |
| Muscat, Oman | |
| Yalta, Ukraine | |
| Çeşme, Turkey | Castle photo with Derrick, old image moved to gallery |
| Itea, Greece | |
| Katakolon, Greece | |
| Kuşadası, Turkey | |
| Nafplio, Greece | |
| Odessa, Ukraine | |
| Broome, Australia | |
| Marseille, France | La Belle Époque Carrousel at Old Port |
| Panama Canal | March 2020 - just before pandemic |
| Haifa, Israel | |
| Hvar, Croatia | |
| Ravenna, Italy | Dante's tomb! |
| Šibenik, Croatia | |
| Barcelona, Spain | Changed to new hero image |
| Rio de Janeiro, Brazil | Panorama from ship arriving at port |
| Buenos Aires, Argentina | |
| San Juan, Puerto Rico | |

---

## New Locations Created (6)

### Castro, Chile (id: 122)
- Coords: -42.48, -73.76
- Tag: "Chiloé Island"
- Icon: ⛪
- Famous for palafitos (stilted houses) and UNESCO wooden churches
- Porthole: PLACEHOLDER

### Ponza, Italy (id: 123)
- Coords: 40.895, 12.958
- Tag: "Pontine Islands"
- Icon: 🏝️
- Volcanic island with ancient Roman cisterns, between Rome and Naples
- Porthole: PLACEHOLDER

### Amalfi, Italy (id: 124)
- Coords: 40.634, 14.602
- Tag: "Amalfi Coast"
- Icon: ⛪
- Hero: Cathedral steps (Duomo di Sant'Andrea)
- Porthole: PLACEHOLDER

### Elba, Italy (id: 125)
- Coords: 42.815, 10.318
- Tag: "Napoleon's Exile"
- Icon: 👑
- Hero: Portoferraio harbor with Medici fortresses
- Porthole: PLACEHOLDER

### Bonifacio, Corsica (id: 126)
- Coords: 41.387, 9.159
- Tag: "City on the Cliff"
- Icon: 🏰
- Dramatic limestone cliffs, medieval citadel
- Porthole: PLACEHOLDER

### Barbados (id: 127)
- Coords: 13.1939, -59.5432
- Tag: "Little England"
- Icon: 🌴
- Caribbean with British traditions, Mount Gay rum
- Porthole: PLACEHOLDER

---

## Location Removed

### Concepción, Chile
- Removed from locations.js and config.js (porthole entry)

---

## Gallery Updates

### Çeşme, Turkey
- New hero: Castle photo with Derrick (Çeşme Kalesi)
- Previous hero moved to gallery
- Added richContent with gallery section

### Monte Carlo, Monaco
- Added yacht panorama to gallery (superyacht "Dubai" + Seabourn Sojourn)
- Gallery now has 2 images
- The yacht "Dubai" is one of the largest private yachts in the world, owned by Sheikh Mohammed bin Rashid Al Maktoum

---

## Historical Research

### Marseille Carousel (La Belle Époque Carrousel)
- Two-level Venetian carousel dating to 18th century
- Same type as Sacré-Cœur carousel (from film Amélie)
- Sent to Venice for restoration in 2020, returned February 2021
- Original mechanical Gavioli Barbary organ still intact
- Location: Place du Général de Gaulle near Vieux-Port

### Marseille Old Port - WW2 Destruction (January 1943)
- Nazis dynamited most of the Old Port district
- 1,500 buildings destroyed
- 30,000 residents expelled
- 782 Jews deported to Sobibor
- Reconstruction not completed until 1956
- The carousel was likely removed before destruction or installed after

---

## Photo Identification

Helped identify several mystery photos:
- **Çeşme Castle** - Genoese fortress with Ottoman mosque minaret
- **Ponza, Italy** - Volcanic tufa walls, Pontine Islands harbor
- **Monaco harbor** - Superyacht "Dubai" with Seabourn Sojourn
- **Amalfi Cathedral** - Distinctive Arab-Norman facade, 62 steps
- **Portoferraio, Elba** - Medici fortresses on hilltop
- **Bonifacio, Corsica** - Limestone cliffs with citadel
- **Rio de Janeiro** - Porto Maravilha area from ship

---

## Files Modified
- `js/ui/panel.js` - Door button fix, scroll position fix
- `js/data/locations.js` - 21 hero images, 6 new locations, 1 removal, gallery updates
- `js/data/config.js` - Porthole placeholders for 6 new locations, removed Concepción

---

## Location Count
- Previous: 122
- Removed: 1 (Concepción)
- Added: 6 (Castro, Ponza, Amalfi, Elba, Bonifacio, Barbados)
- **Current: 128 locations**

---

## Still Need Hero Images: 44 locations

### Empty (32)
Adelaide, Apia, Beagle Channel, Cartagena, Constanța, Dili, Fortaleza, Hong Kong, Honolulu, Izmir, Lima, Monaco, Montevideo, Mormugao, Mykonos, New Mangalore, Parga, Perth, Port Moresby, Portovenere, Puerto Montt, Punta Arenas, Pylos, Rarotonga, Recife, Salvador, San Remo, Santiago, Surabaya, Suva, Valdivia, Valparaíso

### Unsplash Placeholders (12)
Bali, Bora Bora, Brisbane, Dubrovnik, Napier, New Caledonia, Picton, Queen Victoria, Santorini, Tauranga, Tonga, Wellington

---

## Porthole Placeholders Needing Custom Images
- Castro, Chile
- Ponza, Italy
- Amalfi, Italy
- Elba, Italy
- Bonifacio, Corsica
- Barbados

These are marked with `// PLACEHOLDER` comment in config.js

---

## Project Context for Future Sessions

### Style Rules
- **No em dashes** - use periods or commas instead
- No emojis unless explicitly requested

### Key Files
- `js/data/locations.js` - All 128 location objects with richContent (~4,300 lines)
- `js/data/config.js` - Cloudinary URLs for porthole images
- `js/ui/panel.js` - Panel open/close, Door navigation logic
- `css/styles.css` - All styling (~2,100 lines)

### Cloudinary URL Patterns
- Hero images: `https://res.cloudinary.com/de5jbyhxx/image/upload/v{version}/{filename}.jpg`
- Portholes: `https://res.cloudinary.com/de5jbyhxx/image/upload/w_256,q_80,f_auto/v{version}/{filename}.png`
- Gallery thumbs: `https://res.cloudinary.com/de5jbyhxx/image/upload/w_400,q_auto,f_auto/...`
- Story images: `https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/...`

### Door Panels
- Door #1: Toledo, Ohio (id: 1) - "Escape"
- Door #2: Darwin, Australia (id: 22) - "My First Contract"
- Door #3: Auckland, New Zealand (id: 3) - "Seabourn"
- Each Door has `isDoor: true` property
- "Continue to Door" button appears after `.final-quote` element

### Photo Source
- External drive: `/Volumes/BBCSO/`
- Photos sorted by location or in "Unsorted apple photos" folders
- User often has mystery photos that need location identification

### Personal Notes
- User mentioned wanting to write an album of songs about places that moved them: Barcelona, Istanbul, Marseille, South Georgia
- Marseille carousel left a distinct sad impression despite its cheerful appearance (connected to WW2 history)
- The project is reconstructing a decade of cruise ship musician experiences
- Information overload during those years means many locations are forgotten until photos trigger memories

### GitHub
- Repo: `babbage12/shiplife`

---

## GIMP Tips Shared
- Darken image: Colors > Brightness-Contrast (drag brightness left)
- More control: Colors > Curves (drag line down)
- Crop: Shift+C, draw area, Enter
- Yellow border after crop: Image > Fit Canvas to Layers

---

End of session.
