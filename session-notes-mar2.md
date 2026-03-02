# Session Notes - March 2, 2026

## Toledo Panel (Chapter 1) Image Rearrangements
- Moved Stony Ridge Fair photo under "By thirteen, I had joined my first band" text
- Placed two red guitar photos (Gibson SG + "Different drummer") side-by-side below it
- Moved Brothers of Badness photo above its paragraph
- Removed redundant Brothers of Badness paragraph

## Easter Egg / Director's Commentary Fixes
- Fixed issue where captain image was opening in lightbox after commentary modal closed
- Modified `openCommentaryModal()` to close the side panel first - commentary now appears against globe background
- Added close button (×) to the commentary modal for easier dismissal
- Updated `panel.js` to exclude images inside `.commentary-trigger` from lightbox handlers
- Added `position: relative` to `.commentary-modal` CSS

## Easter Eggs Inventory
1. **Darwin (Chapter 2)** - Director's Commentary (Captain phone call story)
2. **Port Vila** - "The Cursed Maiden Voyage" (Pacific Pearl refit story)

## Darwin Panel Update
- Moved "Goofing off in crew bar" photo directly under "Witnesses to the Strange" heading

## Fullsite Updates (derrickhudson.com)
- Made "12" larger in "12 Years at Sea" headings (both section title and mini-globe label)
- Added `.num` class with `font-size: 1.3em` and `font-weight: 400`

## Crew Section Added to Fullsite
- New nav item "Crew" after "Video"
- New section with subtitle "Did we sail together?"
- Copy: "I have lost touch with so many of you. Social media may have become too toxic, but that does not mean I have forgotten you. I'm collecting photos and stories from our time at sea."
- Email link to derrick@derrickhudson.com

## Email Setup (GoDaddy/Microsoft 365)
- Set up email forwarding from derrick@derrickhudson.com to Gmail
- Attempted "Send mail as" setup in Gmail but hit SMTP AUTH disabled issue
- GoDaddy/Microsoft 365 requires SMTP AUTH to be enabled (can contact support later)
- Forwarding is working - incoming emails to derrick@derrickhudson.com will arrive in Gmail

## Music Integration Options (Added to song-panels-spec.md)
- Documented Cloudinary audio hosting as recommended approach
- Hybrid model: Cloudinary for full playback + streaming platform links
- Custom HTML5 audio player matching site aesthetic
- Audio specs: MP3, 320kbps, `/video/upload/` path in Cloudinary

## Files Modified
- `js/data/locations.js` - Toledo and Darwin panel updates
- `js/ui/modal.js` - Commentary modal fixes
- `js/ui/panel.js` - Exclude commentary trigger from lightbox handlers
- `css/styles.css` - Commentary modal positioning
- `index.html` - Commentary close button
- `song-panels-spec.md` - Music integration options
- **fullsite:** `index.html` - Crew section, "12" sizing
