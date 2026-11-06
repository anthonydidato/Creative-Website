# Venture confirmed handoff schema 1.0.0

The ZIP filename is `Venture_3D_Confirmed_Handoff.zip`. Each confirmation includes an ISO-8601 timestamp and an editable design revision. Existing downloads should be retained as versions; browsers may append a numeric suffix to repeated downloads.

Required entries are `model.glb`, `model-manifest.json`, `project.json`, `preview.png`, and `README.txt`. No network-hosted textures or browser storage identifiers are required by the model.

`model-manifest.json` is UTF-8 JSON:

| Field | Type / meaning |
|---|---|
| schemaVersion | Literal `1.0.0`; major changes are incompatible |
| projectName, modelName, modelType | Human-readable strings |
| confirmationTimestamp | UTC ISO-8601 timestamp |
| revision | Design revision number, within the current editable history |
| dimensions | width, height, depth numbers; units = `meters`; world bounding box |
| coordinateSystem | up = `+Y`, front = `+Z` |
| preferredCamera | preset = `isometric`, target = [x,y,z], fieldOfViewDegrees |
| preferredBackground | CSS hexadecimal color |
| preferredLighting | Soft studio / Warm showroom / High contrast |
| description | Product/brand description |
| featureHotspots | Optional descriptions; empty array by default |
| files | Relative names for model, project, preview, readme |
| integrity | algorithm = `SHA-256`, file = `model.glb`, value = lowercase hex digest |
| validation | Reimported boolean, actual mesh count, and dimensions from a separate GLTFLoader scene |
| modelingMethod | Identifies procedural interpretation, not image reconstruction |

`project.json` schemaVersion is the integer `1`. It stores part transforms (meters/radians), geometry dimensions, materials, optional imported mesh JSON, reference images as embedded data URIs, texture asset references, and environment settings. The portable project is not the same format as the GLB. GLB reimport preserves static meshes and embedded material images but cannot recreate original primitive parameters. Imported meshes remain independently movable, rotatable, scalable and recolorable.

Confirmation builds a new export group from the project, excludes editing gizmos/grid/floor/lights, exports a binary glTF, reimports it with GLTFLoader, captures a preview in a separate renderer, computes SHA-256, packages the files, and reopens the ZIP to verify its required entries. Save errors or export errors are shown instead of claiming success.
