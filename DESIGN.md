# Design System: Sum ImgHub

## 1. Visual Theme & Atmosphere
Sum ImgHub is a calm local-first AI image workbench. The mood should sit close to ImageHub: light canvas, quiet controls, precise cards, and a soft blue-white technical background that keeps the app from feeling empty. Density is balanced: forms stay compact, galleries are scannable, and preview details feel like an asset inspector.

## 2. Color Palette & Roles
- **Studio Canvas** (#F7F8FC): page background and soft blue-white visual field.
- **Paper Surface** (#FFFFFF): primary panels, dialogs, and sidebar surfaces.
- **Soft Surface** (#F4F7FB): input fields, empty states, and thumbnail stages.
- **Charcoal Ink** (#121414): primary readable text.
- **Muted Graphite** (#656A66): helper text, timestamps, captions, and secondary metadata.
- **Line Border** (#DDE3EA): 1px dividers, card borders, and inspector cells.
- **Sum Green** (#10A37F): one accent for active states, primary actions, and focus rings.
- **Preview Black** (#111310): image preview stage background.

## 3. Typography Rules
- Use the existing Chinese-friendly sans stack. Keep headings strong but not oversized in workbench views.
- Body copy should stay between 13px and 15px inside controls, 16px maximum in page introductions.
- Numbers and dimensions should be easy to scan; use tabular numerals where metadata is shown.
- Keep letter spacing at 0. Avoid decorative marketing text in the app shell.

## 4. Component Styling
- **Sidebar:** translucent white surface, compact vertical navigation, active item as a white raised tile.
- **Panels:** 8px to 12px radius, soft border, restrained shadow, no nested card piles.
- **Inputs:** label above field, soft off-white fill, Sum Green focus ring.
- **Gallery tiles:** fixed-height image stage, contained image, prompt and actions pinned to the bottom. Tiles never grow with the original image height.
- **Preview modal:** dark checkerboard image stage on the left, white metadata inspector on the right. Actions sit in the inspector header.
- **Buttons:** icon plus short label for actions, subtle translate on hover, visible focus state.

## 5. Layout Principles
- The app is a workbench first, not a landing page. First screens should show useful controls immediately.
- Use grid for galleries and inspector layouts. Avoid masonry for local assets because it makes scanning and selection harder.
- Keep all pages on the same blue-white background system so generated images become the strongest color on screen.
- On small screens, preview modal collapses into a single column with the inspector below the image.

## 6. Motion & Interaction
- Transitions should be short: 140ms to 220ms.
- Animate only transform, opacity, background, border, and shadow.
- Thumbnail hover may scale the image slightly, but card size must remain stable.
- Escape closes preview dialogs.

## 7. Anti-Patterns
- No purple-blue AI neon gradients.
- No oversized local gallery images.
- No masonry gallery for the main asset library.
- No login form for SumAPI inside this app.
- No hidden metadata: generated images need a clear preview inspector.
- No pure white empty page without visual background texture.
