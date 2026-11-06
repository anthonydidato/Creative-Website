# Mission 2 validation — November 6, 2026

## Functional browser checks

- Initial project rendered as 22 actual mesh components with the final Mission 1 reference.
- Camera orbit, zoom and pan exercised with real pointer interactions; front/side/top/isometric presets and orthographic projection selected.
- Scene selection and numeric scale edit tested (upper door X scale 1 → 1.05).
- Color changed to sage and material changed to matte polymer; manual save survived a page refresh with the edited scale and color intact.
- A PNG reference was uploaded, applied as a texture, and included in a confirmed GLB.
- Texture-bearing test handoff downloaded and opened externally: 22 meshes, four embedded images, SHA-256 matched; no external image URIs.
- Bottle template opened; duplicate, undo, redo, remove tested.
- Move gizmo dragged the upper door by 8.303 cm; Undo restored it.
- All eight templates pass structural validation and have multiple editable components.
- Invalid non-finite transform data rejected by the project validator.
- Portable project JSON imported successfully.
- Final GLB reimported into the editor as 22 individually editable meshes.
- Final GLB loaded and rendered in the separate independent viewer; dimensions/materials verified.
- Confirm Model created a confirmed snapshot and downloaded a five-file ZIP.
- ZIP entries, GLB magic/version, embedded images and SHA-256 checked independently with Python.
- Laptop viewport 1440 × 1000 visually inspected. Narrow layout was inspected at the browser's initial small width; panels stack and controls remain accessible.
- Studio TypeScript check and Vite production build passed. Existing repository TypeScript and production build passed without editing original site source.

## Confirmed artifact

`deliverables/model.glb`: 803,524 bytes; 22 meshes; three embedded images.
Bounding size: approximately 0.800 × 1.856 × 0.833 meters, including projecting handles/rear parts.
`deliverables/project.json`: editable snapshot with one embedded Mission 1 reference.
`deliverables/Venture_3D_Confirmed_Handoff.zip`: all five required files; schema 1.0.0; integrity verified.

## Testing limits

Interactive tests used the Codex in-app browser on macOS. No claim is made of a comprehensive cross-browser/device matrix. No engineering or manufacturing accuracy tests apply to this visual concept. Deployment verification is recorded separately after GitHub Actions finishes.
