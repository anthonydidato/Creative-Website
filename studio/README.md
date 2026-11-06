# Venture 3D Studio — Mission 2

A browser-based, editable product design studio for FreshKeep. Built with React, TypeScript, Vite, Three.js and fflate. It uses real procedural mesh geometry, not the earlier image-wrapped CSS viewer. No paid service or API key is needed.

## Student guide

1. Open the studio. FreshKeep loads with 22 editable components and the final Mission 1 reference.
2. Drag to orbit; scroll/pinch to zoom; right-drag or use two fingers to pan. Front, Side, Back, Top and Isometric buttons frame the model. Choose orthographic or perspective projection.
3. Select a part from Scene objects or click it in the viewport. Use Move, Rotate or Resize gizmos, or enter numerical values in the inspector. Positions and dimensions are displayed in centimeters. Actual model units are meters.
4. Change its color, finish, roughness, metallic appearance or opacity. Branding & textures applies an imported image. Use a Plane for a flat label; box textures repeat over faces. Texture repeat and offset control placement.
5. Import accepts PNG/JPEG/WebP references, portable project JSON and static GLB models. Assign Front, Side or Back to your references. Images do not automatically become 3D geometry. Codex interpreted the initial fridge during development; browser templates are procedural starting points.
6. Save project creates a manual browser snapshot. Autosave recovers edits after refresh. Import → Download editable backup produces a portable JSON file including images. Restore saved version recovers the manual save. Browser data can be cleared, and does not follow you to another device.
7. Confirm model validates an actual GLB and reimports it independently, then saves a confirmed snapshot. Download the confirmed ZIP. Carry **Venture_3D_Confirmed_Handoff.zip** into Mission 3. Confirmation does not publish anything or modify a venture website.
8. Open the independent GLB viewer and upload `model.glb` to inspect the exported result outside the editor.

Seven additional editable templates cover a bottle, box, bag, mascot, mug, room and sculpture. Opening a template is undoable. Undo/Redo tracks up to 40 common changes in the current session.

## Development

Node 22+; pnpm 11.25.0. From `studio/`:

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
pnpm build
node tests/templates.mjs
```

The production base is `/Creative-Website/studio/`. The repository Pages workflow builds the existing site unchanged, then builds the studio and copies its output into `dist/studio/`. The original website's HTML, components and assets are preserved.

## Limits

This is an approximate visual product concept, not accurate reconstruction or manufacturing CAD. It does not infer new geometry when a reference is uploaded. Translucent materials are alpha-blended approximations rather than physically accurate glass. Imports support static GLB meshes, not animated/skinned or compressed models requiring external decoders. The room, bag and mascot are stylized editable templates. Models have no door-opening rig. Dimensions of imported meshes are local bounding sizes before rotation. Maximum reference size: 8 MB each. GLB import limit: 30 MB. Project import limit: 70 MB. An internet connection is needed to load the hosted application; editing and exports run locally. Optional Google Fonts falls back to system fonts.

The stable handoff format is documented in [docs/HANDOFF-SCHEMA.md](docs/HANDOFF-SCHEMA.md). Final deliverables are retained under `../deliverables/`.
