CargoGo Landing v5.2 — Route Interaction Repair

# CargoGo Landing v5 — Real Product Edition

Static production-ready landing page for Vercel.

## v5 changes
- Dark theme remains the default; Light theme is optional and persisted.
- Marketing mockups replaced with real CargoGo Android screenshots from the current app build.
- Hero uses real CargoGo home + live route screens.
- Product showcase uses real route, trip detail, theme selector and cargo creation screens.
- Added an interactive Route Pulse section: pointer/touch/keyboard route progress, live marker, metrics and replay animation.
- Founder `Contact / Support` CTA removed.
- Mobile drawer now exposes EN / UA / RU, since the compact header hides the desktop language switch.
- Responsive layouts tuned for narrow Android/iPhone widths, tablets and desktop; the real screenshot showcase becomes a swipeable snap carousel on phones.
- Respects `prefers-reduced-motion` and keeps touch interactions independent of hover-only effects.

## Deploy to Vercel
Framework preset: **Other**. No build command is required. Deploy the contents of this folder as the project root.

## Store/direct links
Update `CONFIG` at the top of `app.js`. Direct APK/IPA placeholders live in `downloads/`.

## v5.4 — Cargo Cult field note
A restrained floating field-note easter egg was added to the landing page. It opens on demand (never as an automatic modal), supports EN/UA/RU, uses a lightweight inline SVG scene with subtle fire/smoke/aircraft motion, respects reduced-motion preferences, and collapses into a mobile bottom sheet.
