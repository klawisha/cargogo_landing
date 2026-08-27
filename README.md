# CargoGo Landing v2

Static production-oriented landing page for Vercel.

## Deploy to Vercel
1. Create a new Vercel project and upload/import this folder.
2. Framework preset: **Other**.
3. Build command: leave empty.
4. Output directory: leave empty / project root.
5. Deploy.

## Before public release
- Put direct builds into `downloads/cargogo.apk` and `downloads/cargogo.ipa`.
- Set Google Play and App Store URLs in `app.js` → `CONFIG`.
- After Vercel assigns the final production URL, add an absolute canonical URL and `og:url` to `index.html` if desired.
- Replace legal placeholder text with the approved production policies before public launch.

## Included
- EN / UA / RU runtime localization
- CargoGo branded assets and product screens
- OpenGraph image, favicon, Apple touch icon, PWA manifest
- Support / Legal drawer
- Responsive layout
- Reduced-motion support
- Vercel caching and security headers

## Theme system
CargoGo now starts in the dark theme by default. The header theme control switches to the light theme and stores the choice in `localStorage` under `cargogo-theme`.


## v4 dark refinement
- Dark ticker is graphite rather than white, with muted type and a restrained MOVE highlight.
- Founder section is fully dark with two levels of graphite and an orange monogram.
- Light theme retains the brighter editorial treatment.
