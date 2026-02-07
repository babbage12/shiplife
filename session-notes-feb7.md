# Shiplife Development Session - February 7, 2026

## Summary

Gallery update session. Updated Dunedin and Sydney galleries with new images. Reorganized Dunedin files to avoid naming conflicts. Photo organization completed - moved Sydney photos to correct location folders and integrated 5 Pacific locations.

---

## Gallery Updates

### Morning Session

#### Dunedin, New Zealand
- **Renamed files** to avoid conflicts with main gallery:
  - `on the way/004.jpeg` → `on-the-way-001.jpeg`
  - `on the way/006.jpeg` → `on-the-way-002.jpeg`
  - `on the way/008.jpeg` → `on-the-way-003.jpeg`
- **Gallery count:** 13 images total

#### Sydney, Australia
- **Gallery count:** 35 images (updated after photo reorganization)
- Photos moved to their correct Pacific location folders

---

### Afternoon Session - New Location Integration

#### Bora Bora (Updated)
- Added gallery with **21 images**
- Mount Otemanu views, waterfall hike, crew day photos
- Tag: "Jetski Paradise"

#### Tonga (Updated)
- Added gallery with **15 images**
- World signpost photo, local culture
- Tag: "The King's Palace"

#### Port Denarau, Fiji (NEW - id: 134)
- **9 images** including yacht Nirvana
- Coords: [-17.7765, 177.3800]
- Tag: "Marina Paradise"
- Features the $35M yacht Nirvana and Hard Rock Cafe context

#### Isle of Pines, New Caledonia (NEW - id: 135)
- **8 images** - crew beach day
- Coords: [-22.6167, 167.4833]
- Tag: "The Closest to Paradise"

#### Noumea, New Caledonia (NEW - id: 136)
- **7 images** - Melanesian children, beach huts
- Coords: [-22.2758, 166.4580]
- Tag: "France in the Pacific"

---

## Photo Research

### Fiji - Port Denarau Marina
- Identified photo (129.JPG) as Port Denarau Marina, Fiji
- Features yacht "Nirvana" (53m sailing yacht by Vitters Shipyard, 2007)
- **Owner:** Isak Andic, Spanish billionaire founder of Mango
- Yacht won Monaco Yacht Show Prix du Design 2008
- Confirmed Hard Rock Cafe existed at Port Denarau (opened Dec 2007, closed March 2020)

### Camera Date Issue
- Photo EXIF shows March 21, 2009
- Actual date: mid-2010 or later (user didn't start first contract until July 2009)
- **Camera:** Panasonic DMC-FP8 (Lumix)
- **Cause:** Camera internal clock was set incorrectly (~15+ months off)
- Note: EXIF dates from this camera cannot be trusted

---

## Narrative Discussion

### Three Doors Arc
Discussed the core narrative thread:
- **Door 1:** The longing before the leap. Dream as distant star.
- **Door 2:** The doing. 10-11 years with imposter syndrome. Never feeling ready. Playing anyway.
- **Door 3:** Now. The album release. 6 years of recovery/processing after leaving ships.

**Key insight:** This globe isn't just a memoir - it's the runway to the music. 17 years from dream to "here it is."

The imposter syndrome didn't leave - it rode shotgun the whole time. But it made the work better. Each panel should hint at unfulfilled desire leading to Door 3's fulfillment.

---

## Files Modified

| File | Changes |
|------|---------|
| `js/data/locations.js` | Added 3 new locations, updated 2 existing with galleries, updated Sydney gallery |
| `js/data/config.js` | Added porthole icons and icon configs for new locations |

---

## Location Count

- **New locations added:** 3 (Port Denarau, Isle of Pines, Noumea)
- **Locations updated with galleries:** 2 (Bora Bora, Tonga)
- **Total location count:** ~116

---

## Technical Notes

- Image folders use inconsistent naming (`figi/` instead of `fiji/`, `New Caldonia/` instead of `New Caledonia/`)
- Some duplicate images with "Copy" suffix exist in folders
- Mixed JPG/jpeg extensions throughout

---

End of session.
