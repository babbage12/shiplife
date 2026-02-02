# Shiplife Development Session - February 1, 2026

## Summary
Implemented the "Three Doors Guided Experience" - a comprehensive onboarding flow for first-time visitors that guides them through the three narrative doors before free exploration.

---

## Three Doors Guided Experience - Complete Implementation

### The Concept
First-time visitors are guided through three "doors" that tell the story:
- **Door #1: Toledo, Ohio - "Escape"** (leaving the corporate world)
- **Door #2: Darwin, Australia - "The Path"** (the journey continues)
- **Door #3: Auckland, New Zealand - "Full Circle"** (completing the journey)

### Features Implemented

#### 1. localStorage Progress Tracking
- Added `STORAGE_KEY`, `DOORS_REQUIRED`, `MED_COORDS` constants to `config.js`
- Progress functions in `core.js`: `getProgress()`, `saveProgress()`, `markDoorVisited()`, `allDoorsVisited()`, `markGuidedComplete()`, `isGuidedComplete()`
- Tracks: doors visited, intro seen, guided mode complete

#### 2. Intro Modal ("Welcome to 12 Years at Sea")
- Appears at bottom of screen after globe intro animation
- Shows three door icons with Door #2 and #3 dimmed
- Instructs user: "Click the bouncing icon above to begin"
- No close button needed - closes automatically when user clicks Toledo
- Toledo icon bounces while modal is displayed

#### 3. Custom Door Icons (AI-Generated)
Created new porthole-style door icons for all three doors:
- **Toledo**: Brass porthole showing office cubicles with wooden door (escape theme)
- **Darwin**: Brass porthole showing ship's door opening to tropical waters
- **Auckland**: Brass porthole showing ship's door with Auckland skyline

Cloudinary URLs:
```
Toledo:   v1769977828/ComfyUI_00864__s9njoz.png
Darwin:   v1769977819/ComfyUI_00873__yfqqdw.png
Auckland: v1769977815/ComfyUI_00896__zn6bdc.png
```

#### 4. Soft Gating (Marker Dimming)
- Non-door markers dimmed to 35% opacity during guided mode
- Non-door markers non-clickable until all 3 doors visited
- Clicking dimmed marker shows toast: "Complete the three doors first"
- Sidebar entries also dimmed to match globe

#### 5. Door Completion Prompts
- After closing Door #1 or #2, floating prompt appears
- Text: "Door #2 - Click icon to continue"
- Positioned closer to the door icon (bottom: 35%)
- Auto-dismisses after 6 seconds
- "Go to Door" button rotates globe to next door

#### 6. Celebration Sequence (After Door #3)
- "The world is yours" message appears
- All markers flare to full brightness with pulse animation
- Sidebar items undim
- Globe spins dramatically to Mediterranean (with extra rotation)
- Message fades after 4 seconds
- Guided mode marked complete in localStorage

#### 7. Tooltip Suppression
- Blue hover tooltip hidden while intro modal is active
- Prevents visual clutter during onboarding

#### 8. Click Blocking
- Toledo icon not clickable until intro modal appears
- Prevents premature clicks during globe animation

---

## Files Modified

| File | Changes |
|------|---------|
| `js/data/config.js` | localStorage constants, door texture URLs updated |
| `js/globe/core.js` | Progress tracking functions |
| `js/globe/markers.js` | Dimming logic, flare animation |
| `js/globe/animation.js` | Intro modal trigger, celebration sequence |
| `js/ui/modal.js` | Intro modal show/close functions |
| `js/ui/panel.js` | Door completion tracking, next-door prompts |
| `js/ui/sidebar.js` | Sidebar dimming |
| `js/ui/tooltip.js` | Tooltip suppression during intro |
| `js/input.js` | Block clicks on dimmed markers, wait for intro modal |
| `index.html` | Intro modal HTML with door images |
| `css/styles.css` | Intro modal, prompt, celebration, dimmed styles |

---

## Testing Checklist

```
[x] localStorage.clear() resets to fresh visitor state
[x] Intro modal appears after globe animation
[x] Toledo bounces while modal is showing
[x] Tooltip hidden while modal is showing
[x] Clicking Toledo opens panel AND closes modal
[x] Non-door markers dimmed and non-clickable
[x] Sidebar entries dimmed
[x] Door #1 close → prompt for Door #2
[x] Door #2 close → prompt for Door #3
[x] Door #3 close → celebration sequence
[x] Celebration: message, flare, globe spin to Mediterranean
[x] After celebration: all markers/sidebar clickable
[x] Returning visitor: no intro modal, no dimming
```

---

## Technical Notes

### localStorage Structure
```javascript
{
  doorsVisited: ['Toledo, Ohio', 'Darwin, Australia', 'Auckland, New Zealand'],
  introSeen: true,
  guidedComplete: true
}
```

### Key Functions Added
- `getProgress()` / `saveProgress()` - localStorage management
- `markDoorVisited()` - track door completion
- `allDoorsVisited()` / `isGuidedComplete()` - state checks
- `showIntroModal()` / `closeIntroModal()` - modal management
- `showNextDoorPrompt()` / `dismissNextDoorPrompt()` - between-door prompts
- `triggerDoorsCompleteSequence()` - celebration animation
- `flareAllMarkers()` / `animateMarkerFlare()` - marker brightness animation
- `undimSidebarItems()` - sidebar restoration

### Mediterranean Spin Coordinates
```javascript
const MED_COORDS = { lat: 42.5, lon: 14.0 }; // Adriatic coast
```

---

## Next Steps (Future Sessions)
- Mobile testing of guided experience
- Potentially add skip option for returning visitors who cleared localStorage
- Consider adding progress indicator (1/3, 2/3, 3/3)

---

## Session Stats
- Duration: ~3 hours
- Files modified: 11
- New features: Complete guided onboarding system
- AI images created: 3 custom door icons
