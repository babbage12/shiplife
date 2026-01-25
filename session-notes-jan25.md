# Shiplife Development Session - January 25, 2026

## Summary
Major performance optimizations and bug fixes. Implemented smart texture loading with priority locations, fixed the red globe flash bug by replacing video Earth texture with static image, optimized all 263 Cloudinary images for faster loading, and improved panel image transitions.

---

## Performance Optimizations

### Smart Texture Loading
- **Priority loading:** Three doors (Toledo, Darwin, Auckland) + Australian locations load first
- **Background loading:** Remaining ~110 locations load in parallel after priority
- **20 second timeout:** Ensures page becomes interactive even if some textures fail
- Replaced progressive/lazy loading approach that wasn't working well

### Image Optimization (263 images)
- Added Cloudinary optimization parameters to ALL images in locations.js
- Format: `w_1200,q_80` (width 1200px, quality 80%)
- **Example savings:** Egypt images went from 13MB to 310KB (97% reduction)
- Applied via find/replace: `/image/upload/v` → `/image/upload/w_1200,q_80/v`

### Panel Image Preloading
- Hero images now preload before panel displays them
- Added 0.2s fade transition for smooth image swaps
- Prevents old image from flashing when switching locations

---

## Bug Fixes

### Red Globe Flash - FIXED
- **Cause:** Video Earth texture had decoding issues causing red frame artifacts
- **Solution:** Replaced NASA Blue Marble video with static image
- File: `js/globe/core.js` - simplified `createGlobe()` function
- Removed video texture update code from `animation.js`
- Added background color to `#canvas-container` in CSS as additional safeguard

### Toledo Panel Not Opening - FIXED
- **Cause 1:** Video ShaderMaterial on Sprite broke raycaster detection
- **Cause 2:** Video texture was overwriting static texture
- **Solution:** All markers use SpriteMaterial, video stored separately in `locationVideos`

### Mobile Hang - ADDRESSED
- Original issue: Loading 122 textures with pixel processing blocked main thread
- Now uses priority loading strategy - main story locations first
- Globe appears quickly, remaining textures load without blocking UI

---

## Git Workflow Learned
- `git add <files>` - Stage specific files for commit
- `git commit -m "message"` - Create local commit
- `git push` - Upload to GitHub
- Personal Access Token setup for authentication
- Credential helper stores token for future pushes

---

## Files Modified
- `js/globe/core.js` - Smart texture loading, removed video Earth texture
- `js/globe/animation.js` - Removed video texture update code
- `js/globe/markers.js` - All markers use SpriteMaterial
- `js/input.js` - Fixed door click handling for AI textures
- `js/ui/panel.js` - Added hero image preloading
- `js/data/locations.js` - Optimized 263 image URLs
- `css/styles.css` - Added panel image fade transition, canvas-container background

---

## Commits Today
1. Fix mobile hang by lazy loading porthole textures
2. Add progressive texture loading
3. Pre-load Toledo immediately, stagger rest over 60 seconds
4. Fix Toledo panel - skip iris animation for AI texture markers
5. Add error handling for video playback
6. Fix: don't overwrite Toledo static texture with video texture
7. Remove video shader from markers, clean up debug logging
8. Add background to canvas-container to prevent GPU flash
9. Replace video Earth texture with static image
10. Stagger textures over 30s, load Canadian locations last
11. Restore preloading all icons at startup
12. Load three doors + Australia first, then rest in background
13. Load all remaining textures in parallel with 20s timeout
14. Optimize all 263 Cloudinary images with w_1200,q_80
15. Preload hero image before showing in panel
16. Add smooth fade transition for panel image swap

---

## Next Steps / Future Improvements
- Consider re-implementing animated Earth video with better error handling
- May need to re-encode video in different format to prevent decode errors
- Could add loading indicator while textures load
- Consider lazy loading images within panels (not just hero)
