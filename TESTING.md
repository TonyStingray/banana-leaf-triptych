# Testing Checklist — Banana Leaf Triptych Composer v1.0.0

## Core Functionality
- [ ] Upload 3 images to each field → Generate produces 3 triptychs
- [ ] Upload 1 image to each field → Generate produces 1 triptych
- [ ] Upload 10+ images to each field → All render correctly
- [ ] Mismatched counts (e.g., 3/2/3) → Error displayed, no generation
- [ ] Empty field(s) → Error displayed
- [ ] Images of varying aspect ratios → All scale to 1200px height
- [ ] All three images bottom-aligned in output
- [ ] Left/right black padding = 50px
- [ ] Images rotated 90° clockwise before composition
- [ ] Top 10% cropped after rotation
- [ ] Left and right 5% cropped after rotation
- [ ] File name sorting is numeric-aware (img2 before img10)

## Upload Zones
- [ ] Click to upload opens file picker
- [ ] Drag-and-drop works for all three zones
- [ ] Drag-over visual feedback (border color change)
- [ ] File count badge updates correctly
- [ ] Non-image files are rejected
- [ ] Files > 50MB are rejected with error message
- [ ] Multiple files can be selected at once

## ZIP Download
- [ ] ZIP contains all generated PNGs
- [ ] Files named triptych_001.png, triptych_002.png, etc.
- [ ] ZIP file downloads with name triptych_output.zip
- [ ] Button shows "正在打包中…" during packaging

## Clear Functionality
- [ ] Clear button resets all three upload fields
- [ ] Clear button removes gallery
- [ ] Clear button hides download/clear buttons
- [ ] Status text hidden after clear

## UI / UX
- [ ] Loading spinner appears during generation
- [ ] Progress text updates (第 1/N 組…)
- [ ] Elapsed time shown after completion
- [ ] Error banner appears for validation errors
- [ ] Error banner dismisses on next valid action
- [ ] Gallery cards have fade-in animation
- [ ] Responsive: 3 columns on desktop, 1 on mobile

## Security
- [ ] CSP meta tag present and correct
- [ ] X-Content-Type-Options: nosniff present
- [ ] Referrer policy: no-referrer present
- [ ] No innerHTML used with user-provided data
- [ ] File MIME type validated before processing
- [ ] File size validated before processing
- [ ] Filename sanitization in ZIP output

## Accessibility (WCAG 2.1 AA)
- [ ] Skip-to-content link visible on focus
- [ ] All drop zones keyboard-accessible (Enter/Space)
- [ ] aria-live regions update on file count change
- [ ] aria-live region on loading text
- [ ] Error banner has role="alert" and aria-live="assertive"
- [ ] All buttons have aria-label
- [ ] Gallery section has aria-label
- [ ] focus-visible outline visible on all interactive elements
- [ ] prefers-reduced-motion disables animations
- [ ] Color contrast ≥ 4.5:1 for all text

## PWA
- [ ] Service Worker registers on page load
- [ ] manifest.json loads without errors
- [ ] App works offline after first load
- [ ] Install prompt appears on compatible browsers
- [ ] Icons (192px, 512px) load correctly

## Cross-Browser
- [ ] Chrome (latest) — full functionality
- [ ] Firefox (latest) — full functionality
- [ ] Safari (latest) — full functionality
- [ ] Edge (latest) — full functionality

## Mobile
- [ ] Touch targets ≥ 44x44px
- [ ] Upload zones usable on mobile
- [ ] Gallery scrollable and readable
- [ ] Landscape orientation works
- [ ] No horizontal overflow
