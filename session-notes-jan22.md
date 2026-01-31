# Shiplife Development Session - January 22, 2026

## Summary
Added Akaroa photo gallery and established workflow for processing location photos from external drive.

---

## Akaroa, New Zealand - Panel Complete

### Photos Added
- **30 photos** resized to 1920px and uploaded to Cloudinary
- Naming convention: `akaroa-01.jpg` through `akaroa-30.jpg`

### Panel Structure
- **Hero:** #9 (harbor overlook)
- **Section 1:** "The Walk" / "Edge of the World" - intro text about the peaceful, tranquil feeling
- **Section 2:** "Hardy Boys Mystery Vibes" - #11-15 inline photos
- **Section 3:** Collapsible gallery with remaining 24 photos

### Story Elements
- Peaceful and tranquil feeling magnified in Akaroa
- Harbor walk that "compelled you along"
- Lighthouse at the edge
- Ancient forest graveyard (Stephen King vibes) - video still to be found
- Hardy Boys mystery novel atmosphere

### Files Created
- `akaroa-photo-reference.html` - visual reference for all 30 photos
- Resized photos in `/Volumes/BBCSO/Akaroa, NZ/resized/`

---

## Bug Fix
- **Martin Neely** - corrected last name from "Neese" to "Neely" across all files

---

## Workflow Established

### Photo Processing Pipeline
1. List location folder from BBCSO drive
2. Create `resized/` subfolder
3. Batch resize to 1920px with descriptive names: `location-01.jpg`, `location-02.jpg`, etc.
4. Upload to Cloudinary
5. Screenshot Cloudinary display names to capture IDs
6. Generate photo reference HTML for visual verification
7. Add richContent to location in `locations.js` with `useRichContent: true`

### Cloudinary URL Pattern
```
https://res.cloudinary.com/de5jbyhxx/image/upload/w_800,q_auto,f_auto/FILENAME.jpg
```

---

## Next Up - Location Folders (Alphabetical)

| # | Location | Status |
|---|----------|--------|
| 1 | Akaroa, NZ | Done |
| 2 | Amazonia, Brazil | Next |
| 3 | Antartica | Pending |
| 4 | Armacao, Brazil | Pending |
| 5 | Ashdod, Israel | Pending |
| ... | ... | ... |

---

## Still On The List
- Generate unique Lifou porthole icon
- Dig up chandelier aftermath footage
- Find Akaroa graveyard video
- Push to fullsite repo
- Consider moving hero guitar photo to Cloudinary

---

Good night!
