export type V3=[number,number,number];
export type Shape='box'|'rounded'|'cylinder'|'sphere'|'torus'|'plane'|'imported';
export interface Part {id:string;name:string;shape:Shape;size:V3;position:V3;rotation:V3;scale:V3;color:string;roughness:number;metalness:number;opacity:number;texture?:string;repeat:[number,number];offset:[number,number];label?:string;payload?:object}
export interface Asset {id:string;name:string;data:string;view:'Front'|'Side'|'Back'|'Other'}
export interface Project {schemaVersion:1;name:string;description:string;type:string;parts:Part[];assets:Asset[];background:string;lighting:string;grid:boolean;axes:boolean;orthographic:boolean;revision:number}
export const uid=()=>crypto.randomUUID();
export function part(name:string,shape:Shape,size:V3,position:V3,color='#cbd4bd',extra:Partial<Part>={}):Part{return {id:uid(),name,shape,size,position,color,rotation:[0,0,0],scale:[1,1,1],roughness:.38,metalness:.12,opacity:1,repeat:[1,1],offset:[0,0],...extra}}
export const templateNames=['FreshKeep refrigerator','Bottle','Consumer box','Everyday bag','Friendly mascot','Branded mug','Service room','Symbolic sculpture'];
export function template(name:string):Project {
const p:Part[]=[];const add=(...a:Parameters<typeof part>)=>p.push(part(...a));
if(name===templateNames[0]){
add('Cabinet','rounded',[.8,1.82,.67],[0,.95,-.025],'#b9c6ad');
add('Upper refrigerator door','rounded',[.774,1.35,.075],[0,1.17,.337],'#e3e8d9');
add('Freezer drawer','rounded',[.774,.408,.075],[0,.274,.337],'#e3e8d9');
add('Display bezel','rounded',[.574,1.06,.035],[.025,1.23,.389],'#9daa8e');
add('Touchscreen','box',[.534,1.018,.012],[.025,1.23,.411],'#ffffff',{label:'screen',roughness:.2,metalness:.05});
add('Door handle','rounded',[.025,.55,.045],[-.335,1.2,.41],'#a9b697',{metalness:.65});
add('Drawer grip','rounded',[.44,.018,.035],[0,.455,.391],'#7f8e75');
add('FreshKeep wordmark','plane',[.44,.075,.001],[0,.26,.378],'#ffffff',{label:'brand'});
add('Food symbols','plane',[.35,.075,.001],[.025,.637,.379],'#ffffff',{label:'food'});
add('Rear service panel','rounded',[.72,1.62,.015],[0,1,-.368],'#a9ada5',{metalness:.72,roughness:.48});
add('Compressor grille','box',[.6,.27,.012],[0,.28,-.381],'#26342b');
for(let i=0;i<7;i++)add('Rear ventilation slat '+(i+1),'box',[.6,.014,.014],[0,.16+i*.035,-.393],'#8d9785',{metalness:.6});
for(const x of [-.29,.29])for(const z of [-.24,.24])add('Adjustable foot','cylinder',[.06,.055,.06],[x,.032,z],'#253027',{metalness:.5});
}else if(name==='Bottle'){
add('Bottle body','cylinder',[.3,.64,.3],[0,.35,0],'#bacfb5');add('Shoulder','sphere',[.3,.18,.3],[0,.66,0],'#bacfb5');add('Neck','cylinder',[.14,.16,.14],[0,.77,0],'#bacfb5');add('Cap','cylinder',[.16,.085,.16],[0,.87,0],'#273e34',{metalness:.6});add('Brand label','plane',[.19,.18,.001],[0,.4,.151],'#ffffff',{label:'brand'});
}else if(name==='Consumer box'){
add('Box base','rounded',[.65,.45,.4],[0,.25,0],'#d8b297');add('Lid','rounded',[.68,.08,.43],[0,.51,0],'#243d35');add('Label','plane',[.4,.11,.001],[0,.29,.203],'#ffffff',{label:'brand'});
}else if(name==='Everyday bag'){
add('Bag body','rounded',[.55,.48,.22],[0,.29,0],'#9aa98a',{roughness:.95,metalness:0});add('Front pocket','rounded',[.4,.24,.035],[0,.23,.126],'#bcc5ac',{roughness:.95});add('Handle','torus',[.24,.24,.035],[0,.6,0],'#354d40');add('Zip line','box',[.43,.012,.018],[0,.47,.126],'#dcbd78',{metalness:.8});
}else if(name==='Friendly mascot'){
add('Body','sphere',[.4,.48,.3],[0,.55,0],'#b7cc96');add('Head','sphere',[.35,.34,.31],[0,.94,0],'#d7e5b9');for(const x of [-.072,.072])add('Eye','sphere',[.037,.05,.025],[x,.98,.15],'#20382c');for(const x of [-.25,.25])add('Arm','rounded',[.1,.31,.1],[x,.57,0],'#a4bf8c');for(const x of [-.1,.1]){add('Leg','rounded',[.1,.24,.11],[x,.22,0],'#6e8c5c');add('Shoe','rounded',[.16,.09,.24],[x,.065,.04],'#f1e9d7');}
}else if(name==='Branded mug'){
add('Cup body','cylinder',[.32,.35,.32],[0,.2,0],'#e9ddc4',{roughness:.2});add('Rim','torus',[.32,.32,.018],[0,.38,0],'#d5c9ae',{rotation:[Math.PI/2,0,0]});add('Coffee surface','cylinder',[.28,.008,.28],[0,.377,0],'#352418');add('Handle','torus',[.22,.26,.045],[.23,.23,0],'#e9ddc4');add('Brand','plane',[.2,.08,.001],[0,.23,.162],'#ffffff',{label:'brand'});
}else if(name==='Service room'){
add('Floor','box',[3,.08,2.4],[0,0,0],'#dccdb6');add('Back wall','box',[3,2,.08],[0,1,-1.2],'#dce4d3');add('Side wall','box',[.08,2,2.4],[-1.5,1,0],'#aab99a');add('Service counter','rounded',[1.4,.85,.5],[.2,.465,-.3],'#28453c');add('Counter top','rounded',[1.5,.07,.6],[.2,.925,-.3],'#eee5d3');add('Wall sign','plane',[1,.26,.001],[0,1.55,-1.155],'#ffffff',{label:'brand'});
}else{
add('Plinth','cylinder',[.65,.12,.65],[0,.06,0],'#dedccc');add('Ring','torus',[.7,.7,.12],[0,.65,0],'#a7bc87',{metalness:.7});add('Core','sphere',[.3,.3,.3],[0,.65,0],'#d6b770',{metalness:.8});add('Stem','cylinder',[.07,.5,.07],[0,.32,0],'#395345');}
return {schemaVersion:1,name:name==='FreshKeep refrigerator'?'FreshKeep · Sage edition':name,description:'FreshKeep smart refrigerator with a food status display, freshness reminders, and a lower freezer drawer. Procedural design interpretation of the Mission 1 concept.',type:name==='Friendly mascot'?'Brand mascot':name==='Service room'?'Service environment':name==='Symbolic sculpture'?'Symbolic object':name==='Branded mug'?'Merchandise':'Physical product',parts:p,assets:[],background:'#e9ece5',lighting:'Soft studio',grid:true,axes:false,orthographic:false,revision:1};
}
const vec=(v:unknown)=>Array.isArray(v)&&v.length===3&&v.every(n=>typeof n==='number'&&Number.isFinite(n)&&Math.abs(n)<10000);
export function validateProject(raw:unknown):asserts raw is Project {const p=raw as Project;if(!p||p.schemaVersion!==1||!Array.isArray(p.parts)||p.parts.length>500||!Array.isArray(p.assets)||typeof p.name!=='string')throw Error('This is not a supported Venture Studio project (schema 1).');for(const x of p.parts){if(!x.id||!['box','rounded','cylinder','sphere','torus','plane','imported'].includes(x.shape)||!vec(x.size)||!vec(x.position)||!vec(x.rotation)||!vec(x.scale)||x.size.some(n=>n<=0)||x.scale.some(n=>n<=0)||!/^#[0-9a-f]{6}$/i.test(x.color)||![x.roughness,x.metalness,x.opacity].every(n=>Number.isFinite(n)&&n>=0&&n<=1))throw Error('A component contains invalid geometry or material values.');}for(const a of p.assets)if(!a.data?.startsWith('data:image/'))throw Error('Project references must include embedded image data.');if(new Set(p.parts.map(p=>p.id)).size!==p.parts.length)throw Error('Duplicate component IDs.');
if(typeof p.description!=='string'||typeof p.type!=='string'||!/^#[0-9a-f]{6}$/i.test(p.background)||!['Soft studio','Warm showroom','High contrast'].includes(p.lighting)||!['grid','axes','orthographic'].every(k=>typeof (p as unknown as Record<string,unknown>)[k]==='boolean'))throw Error('Invalid project settings.');
for(const x of p.parts){for(const uv of [x.repeat,x.offset])if(!Array.isArray(uv)||uv.length!==2||!uv.every(Number.isFinite))throw Error('Invalid texture placement.');if(x.texture&&!p.assets.some(a=>a.id===x.texture))throw Error('A texture image is missing from this project.');if(x.shape==='imported'&&!x.payload)throw Error('An imported component is missing its geometry.');const payload=x.payload as {images?:{url?:unknown}[]}|undefined;for(const img of payload?.images||[])if(typeof img.url==='string'&&!img.url.startsWith('data:'))throw Error('Imported model textures must be embedded.');}
}
