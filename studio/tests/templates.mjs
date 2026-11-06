import assert from 'node:assert/strict';
import {template,templateNames,validateProject} from '../src/model.ts';
for(const name of templateNames){const p=template(name);validateProject(p);assert.ok(p.parts.length>=3);assert.equal(new Set(p.parts.map(v=>v.id)).size,p.parts.length);assert.ok(p.parts.every(v=>v.size.every(n=>n>0)));console.log(`${name}: ${p.parts.length} editable components — PASS`);}
const bad=template(templateNames[0]);bad.parts[0].scale[0]=NaN;assert.throws(()=>validateProject(bad));console.log('Invalid model data rejected — PASS');
