# Shiplife Development Session - February 10, 2026

## Summary

Cloudinary migration session. Moved large gallery folders from GitHub to Cloudinary to reduce repo size. Migrated selected images from three major galleries (Ushuaia, Florence, Bora Bora), updated locations.js with Cloudinary URLs, and removed local folders.

---

## Gallery Migrations to Cloudinary

### Ushuaia, Argentina
- **Migrated:** 25 images to Cloudinary (with w_400,q_auto,f_auto transformations)
- **Kept on GitHub:** 25 images (37 files remain including duplicates)
- **Gallery count:** Still 50 images total
- **Notes:** Deleted only the 25 images uploaded to Cloudinary from local folder

### Florence, Italy
- **Migrated:** 18 images to Cloudinary (with w_400,q_auto,f_auto transformations)
- **Removed:** Entire florence folder (57 images total)
- **Gallery count:** Updated from 27 to 18 images
- **Space saved:** ~155 MB

### Bora Bora, French Polynesia
- **Migrated:** 19 images to Cloudinary (with w_400,q_auto,f_auto transformations)
- **Removed:** Entire bora bora folder (25 images total)
- **Gallery count:** Updated from 25 to 19 images
- **Space saved:** ~130 MB

---

## Technical Changes

- Updated all image references in locations.js from local paths to Cloudinary URLs
- Added transformation parameters (w_400,q_auto,f_auto) to all migrated images
- Deleted local gallery folders to reduce GitHub repo size

---

## Commits

1. `c20f927` - Move 25 Ushuaia images to Cloudinary
2. `3a8b258` - Move Florence gallery to Cloudinary and remove local folder
3. `2c59cf7` - Move Bora Bora gallery to Cloudinary and remove local folder

---

## Session Stats

- **Total images migrated to Cloudinary:** 62
- **Total space freed from GitHub repo:** ~476 MB (Florence 155 MB + Bora Bora 130 MB + partial Ushuaia)
- **Remaining large folders to consider:** Portovenere (93 MB), Barcelona (78 MB), Buenos Aires (113 MB)

---

## Notes

- Switched from Opus 4.5 to Sonnet 4.5 to conserve Claude Pro usage credits
- Worked in batches to manage Cloudinary uploads efficiently
- All gallery functionality maintained with Cloudinary URLs
- Hybrid approach: some galleries on Cloudinary, some on GitHub

---

## Repository Size Analysis

**Current repo size:**
- Total local: 13 GB
- Git history (.git): 6.4 GB
- Images folder: 1.2 GB (down from 1.5 GB)

**GitHub limits:**
- Soft limit: 1 GB (recommended)
- Hard limit: 5 GB
- **Current status: OVER LIMIT at 6.4 GB**

**Problem identified:**
GitHub is not designed for binary files like images. Git stores complete copies of every image in history, causing the repo to balloon. Even deleted images remain in git history forever unless purged.

---

## Decision: Full Cloudinary Migration + Git History Cleanup

**Phase 1: Move all remaining images to Cloudinary**
- Wait for monthly Cloudinary bandwidth reset (avoids hitting usage limits)
- Migrate all remaining gallery images (~1.2 GB) to Cloudinary
- Update all locations.js references to Cloudinary URLs
- Delete all local image folders from working directory

**Phase 2: Clean git history**
- Use BFG Repo Cleaner or git filter-repo to purge all images from git history
- This will rewrite history and require force push
- Expected result: Reduce .git folder from 6.4 GB to ~1-2 GB
- Repo will be safely under GitHub's 5 GB hard limit

**Going forward:**
- Never commit large binary files to git again
- Keep git repo lean (code, config, docs only)
- All images hosted on Cloudinary with URL references

---

End of session.
