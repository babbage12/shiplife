# Shiplife Development Session - January 25, 2026

## Summary
Major mobile fixes, fullsite deployment updates, captain's icon sizing, and setlist page creation. Fixed sidebar duplicate icon bug and rearranged setlist chronologically.

---

## Fullsite Updates

### Shiplife Now Live!
- Changed status from "Coming Soon" to "Live" on derrickhudson.com
- Fixed text: "12 years of life at sea to life" → "12 years at sea to life"

### Setlist Page Created
- Built new `setlist.html` with full song repertoire (600+ songs)
- Styled to match site theme (navy/gold, Cormorant Garamond font)
- Organized by genre with artist groupings and anecdotes
- **Rearranged chronologically** - Contemporary favorites first, then back through decades:
  1. Contemporary Favorites (2000s+)
  2. 80's & 90's Hits
  3. 70's Rock & Pop Legends
  4. The 60's - Beatles & Motown
  5. The 50's - Rock & Roll Origins
  6. Timeless Standards & Jazz

### Font Matching
- Changed Josefin Sans to Cormorant Garamond on fullsite to match shiplife

### Image Optimization
- Added Cloudinary transforms to hero and globe preview images

---

## Mobile Fixes

### Header Text Overlap
- Fixed "Shiplife" and tagline overlapping on mobile
- Adjusted CSS spacing and font sizes

### Mobile Zoom & Tap Hint
- Added closer zoom for mobile (1.8 vs 2.2 desktop)
- Added "Tap to begin" animated hint pointing to Toledo

### Sidebar Location Names Bug (Major)
- **Problem:** Location names disappeared/flickered on Android Chrome
- **Tried:** GPU transforms, removing backdrop-filter, emoji icons
- **Solution:** Text-only list on mobile (no icons/canvas elements)
- Root cause: 120+ canvas elements overwhelmed Android Chrome rendering

---

## iPad Transparent Globe Fix

### Problem
Globe appeared transparent on iPad

### Solution
- Initial fix `alpha: false` broke globe (plain black)
- Working fix: `premultipliedAlpha: false` while keeping `alpha: true`

---

## Captain's Icon Sizing

Increased captain's icon (director's commentary button) by ~68% total:

| Element | Original | After 40% | After +20% |
|---------|----------|-----------|------------|
| Icon | 60px | 84px | 101px |
| Click-me circle | 90px | 126px | 151px |
| Text size | 10px | 14px | 17px |

---

## Sidebar Duplicate Icon Bug Fix

### Problem
Each location in sidebar showed TWO icons - both emoji and door icon

### Cause
Code was setting `iconDiv.textContent = emoji` AND appending a canvas

### Solution
Removed the textContent line - emoji now only stored in `data-emoji` attribute for CSS fallback

---

## Porthole Image Optimization
- Added Cloudinary transforms to all 120+ porthole URLs
- Format: `w_256,q_80,f_auto`

---

## Other Updates
- Disabled Toledo (Door 1) audio
- Created README.md for both repos
- Fixed git push issues (photos folder accidentally staged)

---

## Git Commits (Shiplife)
1. Optimize porthole images with Cloudinary transforms
2. Fix iPad transparent globe with premultipliedAlpha
3. Mobile header and sidebar fixes
4. Increase captain icon size by 40%
5. Increase captain icon size by another 20%
6. Fix duplicate icons in sidebar

## Git Commits (Fullsite)
1. Switch Shiplife to Live status
2. Optimize Cloudinary images
3. Match fonts to Shiplife
4. Add setlist page with matching site styling
5. Rearrange setlist: contemporary first, then back through decades

---

Good night session! Mobile experience improved, fullsite deployed with setlist, sidebar bug squashed.
