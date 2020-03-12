var materials = [];
var clipMAX = 100.0;
var clipMIN = 0.0;
var camera,headlight;
main_wgl();
init();
render();
// function scenechange(cpos,ctgt,fov){
// 	camera.fov = fov;
// 	controls.object.position.set(cpos[0],cpos[1],cpos[2]);
// 	controls.target = new THREE.Vector3(ctgt[0],ctgt[1],ctgt[2] ); 
// 	document.getElementById("modal").style.display="none";
// 	camera.updateProjectionMatrix();
// }renderer = new THREE.WebGLRenderer( { alpha: true } );
function init() {
if (window.WebGLRenderingContext) {
    renderer = new THREE.WebGLRenderer({ alpha:true,antialias: true });
} else {
    renderer = new THREE.CanvasRenderer();
}
var chk_tex_ok = false;
var width = 300;
var height = 300;
aspr = width/height;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( width, height );
document.getElementById('container').appendChild(renderer.domElement);
renderer.setClearColor(0xffffff, 0);
renderer.autoClear = false;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
scene = new THREE.Scene();
var scene_length = 7764;
camera = new THREE.PerspectiveCamera(45, aspr, 10, scene_length);
scene.add(camera);
light1 = new THREE.AmbientLight(0xbbbbbb);
scene.add( light1 );
light2 = new THREE.DirectionalLight(0xcccccc, 1.0);
// tpos =new THREE.Vector3( 287.68828382364734,100.75437499999967,-239.7189002231314 );
tpos =new THREE.Vector3( 50,50,10 );
// sunvec = new THREE.Vector3( -0.42387602377331074,0.470199606123914,0.774106870445576 );
sunvec = new THREE.Vector3( 0,0,0);
sunvec.setLength( scene_length / 2 );
light2.position.set(sunvec.x + tpos.x , sunvec.y + tpos.y, sunvec.z + tpos.z);
light2.target.position.set(tpos);
light2.castShadow = true;
light2.shadowCameraNear = scene_length / 2 * 0.85;
light2.shadowCameraFar = scene_length / 2 * 1.15;
light2.shadowCameraRight = scene_length/15;
light2.shadowCameraLeft = -scene_length/15;
light2.shadowCameraTop	= scene_length/15;
light2.shadowCameraBottom = -scene_length/15;
light2.shadowCameraFov = 1.0;
light2.shadowCameraVisible = true;
light2.shadowBias = 0.0001;
light2.shadowMapWidth = 2048;
light2.shadowMapHeight = 2048;
scene.add( light2 );
light3 = new THREE.DirectionalLight(0x333333, 1.0);
light3.position.set(-sunvec.x,-sunvec.y,-sunvec.z);
scene.add( light3 );
headlight = new THREE.DirectionalLight(0x333333, 1.0);
headlight.position.set(0, 0, 0);
scene.add( headlight );
hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 0, 0 );
scene.add( hemiLight );
// SKYDOME
var vertexShader = document.getElementById( 'vertexShader' ).textContent;
var fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
var uniforms = {
    topColor: 	 { type: "c", value: new THREE.Color( 0xffffff,0 ) },
    bottomColor: { type: "c", value: new THREE.Color( 0xffffff,0 ) }
    // offset:		 { type: "f", value: 33 },
    // exponent:	 { type: "f", value: 0.6 }
};
uniforms.topColor.value.copy( hemiLight.color );
// //scene.fog.color.copy( uniforms.bottomColor.value );
// var skyGeo = new THREE.SphereGeometry( scene_length/2, 32, 15 );
// skyGeo.translate(tpos.x,tpos.y,tpos.z);
// var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );
// var sky = new THREE.Mesh( skyGeo, skyMat );
// scene.add( sky );
// init controls : use OrbitControls.js
controls = new THREE.OrbitControlsTH(camera, renderer.domElement);
controls.userZoom = true;
controls.userZoomSpeed = 1.0;
controls.userRotate = true;
controls.userRotateSpeed = 1.0;
controls.userPan = true;
controls.userPanSpeed = 1.0;
controls.autoRotate = false;
controls.autoRotateSpeed = 1.0;
controls.minPolarAngle = 0; 
controls.maxPolarAngle = Math.PI; 
controls.minDistance = 0;
controls.maxDistance = Infinity;
controls.object.position.set( 1107.612,732.833,-1163.584 );
controls.target = new THREE.Vector3( 180.671,143.709,-312.703 ); 
controls.lookaround = false;
controls.flyspeed = 50;

var mrot = new THREE.Matrix4();
mrot.makeRotationX(-Math.PI/2);


// init materials
codeclips = "vec3 clipDIST = vec3( 574.992,208.811,478.155 ) + vec3(40,40,40);vec3 clipBASE = vec3( 0.192,-3.651,-478.796 ) - vec3(20,20,20);"
for(var i=0; i < mat.length; i++){
 materials[i] = new THREE.ShaderMaterial( {
    uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib[ "common" ],
        //THREE.UniformsLib[ "fog" ],
        THREE.UniformsLib[ "lights" ],
        THREE.UniformsLib[ "shadowmap" ],
        {
        usemap : { type : "i" , value : 0 },
        clipmaxX: { type: 'f', value: clipMAX },
        clipminX: { type: 'f', value: clipMIN },
        clipmaxY: { type: 'f', value: clipMAX },
        clipminY: { type: 'f', value: clipMIN },
        clipmaxZ: { type: 'f', value: clipMAX },
        clipminZ: { type: 'f', value: clipMIN },
        opacity: { type: 'f', value: mat[i][1] },
        alphatest: { type: 'f', value: 0.0 },
        use_clipping: { type: 'i', value: 1 },
        diffuse: { type: 'c', value: new THREE.Color(mat[i][0]) },
        emissive : { type: "c", value: new THREE.Color( 0x000000 ) }
    }]),
    vertexShader: [	
        THREE.ShaderChunk[ "common" ],
        "varying vec3 mdpos;","varying vec3 vLightFront;",
        "#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","#endif",
        "varying vec2 vUv;",
        "uniform vec4 offsetRepeat;",
        THREE.ShaderChunk[ "lights_lambert_pars_vertex" ],
        THREE.ShaderChunk[ "color_pars_vertex" ],
        THREE.ShaderChunk[ "shadowmap_pars_vertex" ],
        "void main() {",
            "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;",
            THREE.ShaderChunk[ "color_vertex" ],
            THREE.ShaderChunk[ "beginnormal_vertex" ],
            THREE.ShaderChunk[ "defaultnormal_vertex" ],
            THREE.ShaderChunk[ "begin_vertex" ],
            THREE.ShaderChunk[ "project_vertex" ],
            THREE.ShaderChunk[ "worldpos_vertex" ],
            THREE.ShaderChunk[ "envmap_vertex" ],
            THREE.ShaderChunk[ "lights_lambert_vertex" ],
            THREE.ShaderChunk[ "shadowmap_vertex" ],
        "mdpos = vec3(position);}"
    ].join( "\n" ),
    fragmentShader: [
        "uniform float clipmaxX;", "uniform float clipminX;", "uniform float clipmaxY;", "uniform float clipminY;", "uniform float clipmaxZ;", "uniform float clipminZ;","uniform int use_clipping;",
        "varying vec3 mdpos;",
        "uniform vec3 diffuse;","uniform vec3 emissive;","uniform float opacity;","uniform vec3 ambientLightColor;","varying vec3 vLightFront;","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","#endif",
        "varying vec2 vUv;",
        "uniform sampler2D map;",
        "uniform int usemap;",
        "uniform float alphatest;",
        THREE.ShaderChunk[ "common" ],
        THREE.ShaderChunk[ "color_pars_fragment" ],
        THREE.ShaderChunk[ "alphamap_pars_fragment" ],
        THREE.ShaderChunk[ "shadowmap_pars_fragment" ],
        codeclips,
        "void main() {",
        "	vec3 outgoingLight = vec3( 0.0 );",
        "	vec4 diffuseColor = vec4( diffuse, opacity );",
        "	vec3 totalAmbientLight = ambientLightColor;",
        "	vec3 shadowMask = vec3( 1.0 );",
        THREE.ShaderChunk[ "logdepthbuf_fragment" ],
        "if( usemap == 1 ){",
        "vec4 texelColor = texture2D( map, vUv );",
        "texelColor.xyz = inputToLinear( texelColor.xyz );",
        "diffuseColor *= texelColor;}",
        THREE.ShaderChunk[ "color_fragment" ],
        THREE.ShaderChunk[ "alphamap_fragment" ],
        "if( alphatest > 0.0 && diffuseColor.a < alphatest ){ discard;}",
        THREE.ShaderChunk[ "shadowmap_fragment" ],
        "	#ifdef DOUBLE_SIDED",
        "		if ( gl_FrontFacing )",
        "			outgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;",
        "		else",
        "			outgoingLight += diffuseColor.rgb * ( vLightBack * shadowMask + totalAmbientLight ) + emissive;",
        "	#else",
        "		outgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;",
        "	#endif",
        THREE.ShaderChunk[ "linear_to_gamma_fragment" ],
        "if( use_clipping == 1 ){",
        "	vec3 clipmax = clipDIST * vec3( clipmaxX , clipmaxY , clipmaxZ ) * 0.01 + clipBASE;",
        "	vec3 clipmin = clipDIST * vec3( clipminX , clipminY , clipminZ ) * 0.01 + clipBASE;",
        "	vec3 linemax = clipDIST * vec3( clipmaxX , clipmaxY , clipmaxZ ) * 0.01 + clipBASE - vec3( 10,10,10 );",
        "	vec3 linemin = clipDIST * vec3( clipminX , clipminY , clipminZ ) * 0.01 + clipBASE + vec3( 10,10,10 );",
        "	if( any(lessThan( clipmax,mdpos )) || any(lessThan( mdpos,clipmin )) ){",
        "		discard;",
        "	}else if( any(lessThan( linemax,mdpos )) || any(lessThan( mdpos,linemin )) ){",
        "		gl_FragColor = vec4( outgoingLight, 1.0 ) * vec4(1.0,0.3,0.3,1.0);",
        "	}else{",
        "		gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        "	}",
        "}else{",
        "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        "}",
        "}"
    ].join( "\n" )
  });
    if(mat[i][2] !="" ){
        var texture  = new THREE.ImageUtils.loadTexture(tex[i]);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        //texture.repeat.set( mat[i][4] ,mat[i][5]);
        materials[i].uniforms.map.value = texture;
        if( mat[i][2] == "png" || mat[i][2] =="gif" ){
            materials[i].uniforms.alphatest.value = 0.5;
        }
    }
    if(mat[i][1] < 1.0){
        materials[i].transparent = true;
        materials[i].blending = THREE.NormalBlending;
    }
    materials[i].side = THREE.DoubleSide;
    materials[i].lights = true;
}
linemat = new THREE.ShaderMaterial( {
    vertexShader: "varying vec3 mdpos;void main() {mdpos = vec3(position);gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);}",
    fragmentShader: [
        "uniform float clipmaxX;", "uniform float clipminX;", "uniform float clipmaxY;", "uniform float clipminY;", "uniform float clipmaxZ;", "uniform float clipminZ;","uniform int use_clipping;",
        "uniform vec3 diffuse;",
        "varying vec3 mdpos;",
        codeclips,
        "void main() {",
        "if( use_clipping == 1 ){",
        "	vec3 clipmax = clipDIST * vec3( clipmaxX , clipmaxY , clipmaxZ ) * 0.01 + clipBASE;",
        "	vec3 clipmin = clipDIST * vec3( clipminX , clipminY , clipminZ ) * 0.01 + clipBASE;",
        "	vec3 linemax = clipDIST * vec3( clipmaxX , clipmaxY , clipmaxZ ) * 0.01 + clipBASE - vec3( 10,10,10 );",
        "	vec3 linemin = clipDIST * vec3( clipminX , clipminY , clipminZ ) * 0.01 + clipBASE + vec3( 10,10,10 );",
        "	if( any(lessThan( clipmax,mdpos )) || any(lessThan( mdpos,clipmin )) ){",
        "		discard;",
        "	}else if( any(lessThan( linemax,mdpos )) || any(lessThan( mdpos,linemin )) ){",
        "		gl_FragColor = vec4( diffuse, 1.0 ) * vec4(1.0,0.3,0.3,1.0);",
        "	}else{",
        "		gl_FragColor = vec4( diffuse, 1.0 );",
        "	}",
        "}else{",
        "	gl_FragColor = vec4( diffuse, 1.0 );",
        "}",
        "}"
    ].join( "\n" ),
    uniforms: {
        clipmaxX: { type: 'f', value: clipMAX },
        clipminX: { type: 'f', value: clipMIN },
        clipmaxY: { type: 'f', value: clipMAX },
        clipminY: { type: 'f', value: clipMIN },
        clipmaxZ: { type: 'f', value: clipMAX },
        clipminZ: { type: 'f', value: clipMIN },
        opacity: { type: 'f', value: 1.0 },
        use_clipping: { type: 'i', value: 1 },
        diffuse: { type: 'c', value: new THREE.Color( 0x000000 ) },
        emissive : { type: "c", value: new THREE.Color( 0x000000 ) }
    },
        linewidth:2
} );
materials.push( linemat);

for(var k = 0;k < ngeom	; k++){
for(var l = 0;l < inslist[k].nins;l++){
var dfmatid = inslist[k].props[l].dfmat;
var uscale = mat[dfmatid][4];
var vscale = mat[dfmatid][5];
var matrix = new THREE.Matrix4();
var mtx = inslist[k].props[l].matrix;
matrix.set(
mtx[0]/mtx[15],mtx[4]/mtx[15],mtx[8]/mtx[15],mtx[12]/mtx[15],
mtx[1]/mtx[15],mtx[5]/mtx[15],mtx[9]/mtx[15],mtx[13]/mtx[15],
mtx[2]/mtx[15],mtx[6]/mtx[15],mtx[10]/mtx[15],mtx[14]/mtx[15],
mtx[3]/mtx[15],mtx[7]/mtx[15],mtx[11]/mtx[15],1.0
);
var geom, vt,vt2, fc, mface,fst,vst;
geom = new THREE.Geometry();
for(var j=0; j < geomlist[k].nv; j++){
  vst = geomlist[k].v[j].split(",");//
  vt = new THREE.Vector3(parseInt(vst[0],36)/Math.pow(10,prec),parseInt(vst[1],36)/Math.pow(10,prec),parseInt(vst[2],36)/Math.pow(10,prec));
  geom.vertices.push(vt);
}
for(var j=0; j < geomlist[k].nf; j++){
    fst = geomlist[k].f[j].split(",")
    if( use_texture == true ){
        var uvst = [];
        for(var m=0;m < 3;m++){
            uvst[m] = geomlist[k].uv[j][m].split(",");
        }
    }
    var mati = geomlist[k].mti[j];
    if( mati == 0 ){ //mati = dfmatid; }
        fc = new THREE.Face3( parseInt(fst[0], 36), parseInt(fst[1], 36), parseInt(fst[2], 36), null, null, dfmatid );
        geom.faces.push(fc);
        if( use_texture == true ){
            geom.faceVertexUvs[0].push( [
              new THREE.Vector2(parseInt(uvst[0][0], 36)/Math.pow(10,prec) * uscale, parseInt(uvst[0][1], 36)/Math.pow(10,prec) * vscale),
              new THREE.Vector2(parseInt(uvst[1][0], 36)/Math.pow(10,prec) * uscale, parseInt(uvst[1][1], 36)/Math.pow(10,prec) * vscale),
              new THREE.Vector2(parseInt(uvst[2][0], 36)/Math.pow(10,prec) * uscale, parseInt(uvst[2][1], 36)/Math.pow(10,prec) * vscale)]
            );
        }
    }else{
        fc = new THREE.Face3( parseInt(fst[0], 36), parseInt(fst[1], 36), parseInt(fst[2], 36), null, null, mati );
        geom.faces.push(fc);
        if( use_texture == true ){
            geom.faceVertexUvs[0].push( [
              new THREE.Vector2(parseInt(uvst[0][0], 36)/Math.pow(10,prec), parseInt(uvst[0][1], 36)/Math.pow(10,prec)),
              new THREE.Vector2(parseInt(uvst[1][0], 36)/Math.pow(10,prec), parseInt(uvst[1][1], 36)/Math.pow(10,prec)),
              new THREE.Vector2(parseInt(uvst[2][0], 36)/Math.pow(10,prec), parseInt(uvst[2][1], 36)/Math.pow(10,prec))]
            );
        }
    }
}
geom.applyMatrix(matrix);
geom.applyMatrix(mrot);
geom.computeFaceNormals();
mface = new THREE.Mesh(geom, new THREE.MeshFaceMaterial(materials));
mface.castShadow = true;
mface.receiveShadow = true;
scene.add( mface );
var edgeom = new THREE.Geometry();
for(var j=0; j < geomlist[k].ne; j++){
    if(geomlist[k].ed[j]){
    edst = geomlist[k].ed[j].split(",")
    vst = geomlist[k].v[parseInt(edst[0], 36)].split(",");//
    edgeom.vertices.push( new THREE.Vector3(parseInt(vst[0],36)/Math.pow(10,prec),parseInt(vst[1],36)/Math.pow(10,prec),parseInt(vst[2],36)/Math.pow(10,prec)) );
    vst = geomlist[k].v[parseInt(edst[1], 36)].split(",");//
    edgeom.vertices.push( new THREE.Vector3(parseInt(vst[0],36)/Math.pow(10,prec),parseInt(vst[1],36)/Math.pow(10,prec),parseInt(vst[2],36)/Math.pow(10,prec)) );
    }
}
edgeom.applyMatrix(matrix);
edgeom.applyMatrix(mrot);
//edgeom.translate(mtx[12],-mtx[13],-mtx[14]);
var lines = new THREE.LineSegments( edgeom,linemat );
scene.add( lines );
}
}
texture_show( true);
add_gui();
// 画面リサイズ時のイベント
window.addEventListener( 'resize', onWindowResize, false );
}
function add_gui(){
var SUPPORTS_LOCAL_STORAGE = (function() { try { return 'localStorage' in window && window['localStorage']; } catch (e) { return false; } })();
if( SUPPORTS_LOCAL_STORAGE ){
var gui = new dat.GUI();
parameters = {
    // Scene_Select: function(){document.getElementById('modal').style.display="block";},
    lookaround:false,
    textureon:true,
    useclip:true,
    useshadow:true,
    ambicolor: "#bbbbbb",
    suncolor: "#cccccc",
    subcolor: "#cccccc",
    headcolor: "#cccccc",
    flyspeed:30,
    gclipxmax:1.0,
    gclipxmin:1.0,
    gclipymax:1.0,
    gclipymin:1.0,
    gclipzmax:1.0,
    gclipzmin:1.0
};
// var skpage = gui.add( parameters, 'Scene_Select');
scenetable = '<table border="5" bordercolor="#ffffff" style="table-layout:fixed;" width="100%" height="100%"><tr>'
+ '<td class="lt-cell" onclick="scenechange([575.185,205.160,-0.641],[287.688,100.754,-239.719],45)">OrbitView</td>'
+ '<td class="lt-cell" onclick="scenechange([1107.612,732.833,-1163.584],[180.671,143.709,-312.703],45)"><img border="0" src="data:image/jpg;base64,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" alt="General View">General View</td>'
+ '</tr></table>';
// document.getElementById('sceneselect').innerHTML = scenetable;
// var sklookaround = gui.add( parameters, 'lookaround' ).name('LOOK AROUND').listen();
// sklookaround.onChange(function(value){   controls.lookaround = value;  	});
// var skflyspeed = gui.add( parameters, 'flyspeed' , 1 , 100).name('Fly Speed').listen();
// skflyspeed.onChange(function(value){   controls.flyspeed = value;  	});
// var sktextureon = gui.add( parameters, 'textureon' ).name('Texture ON/OFF').listen();
// sktextureon.onChange(function(value){   texture_show( value);  	});
// var skshadowon = gui.add( parameters, 'useshadow' ).name('Sun Shadow ON/OFF').listen();
// skshadowon.onChange(function(value){
// 	renderer.shadowMapEnabled = value;
// 	for(var i=0; i < materials.length; i++){materials[i].needsUpdate=true;}
// });
var f_clips = gui.addFolder('CLIP PLANE');
var skuseclip = f_clips.add( parameters, 'useclip' ).name('USE CLIPPING').listen();
// skuseclip.onChange(function(value){
// 	for(var i=0; i < materials.length; i++){
// 		materials[i].uniforms.use_clipping.value = value;
// 	}
// });
// var skclipxmax = f_clips.add( parameters, 'gclipxmax' , clipMIN , clipMAX).name('CLIP X MAX').listen();
// skclipxmax.onChange(function(value){
// 	for(var i=0; i < materials.length; i++){
// 		materials[i].uniforms.clipmaxX.value = value;
// 	}
// });
// var skclipxmin = f_clips.add( parameters, 'gclipxmin' , clipMIN , clipMAX).name('CLIP X MIN').listen();
// skclipxmin.onChange(function(value){
// 	for(var i=0; i < materials.length; i++){
// 		materials[i].uniforms.clipminX.value = value;
// 	}
// });

// var skclipzmax = f_clips.add( parameters, 'gclipzmax' , clipMIN , clipMAX).name('CLIP Y MAX').listen();
// skclipzmax.onChange(function(value){
// 	for(var i=0; i < materials.length; i++){
// 		materials[i].uniforms.clipmaxZ.value = value;
// 	}
// });
// var skclipzmin = f_clips.add( parameters, 'gclipzmin' , clipMIN , clipMAX).name('CLIP Y MIN').listen();
// skclipzmin.onChange(function(value){
// 	for(var i=0; i < materials.length; i++){
// 		materials[i].uniforms.clipminZ.value = value;
// 	}
// });

var skclipymax = f_clips.add( parameters, 'gclipymax' , clipMIN , clipMAX).name('CLIP Z MAX').listen();
skclipymax.onChange(growz)

var k =0;

function growz(){
    for(var i=0; i < materials.length; i++){
        if(k<101) {
        k=k+0.02;
        materials[i].uniforms.clipmaxY.value = k;
        // console.log(k)
    }
    
}}

$('#builderlist').click(function(){
    setInterval(growz, 40)

})
 $('#livingroom').click(function(){
     $('#container').css('display','none')
 })

 



// var skclipymin = f_clips.add( parameters, 'gclipymin' , clipMIN , clipMAX).name('CLIP Z MIN').listen();
// skclipymin.onChange(function(value){
// 	for(var i=0; i < materials.length; i++){
// 		materials[i].uniforms.clipminY.value = value;
// 	}
// });
// var f_lights = gui.addFolder('LIGHTS');
// var sklight1 = f_lights.addColor( parameters, 'ambicolor' ).name('AMBIENT LIGHT').listen();
// sklight1.onChange(function(value){   light1.color = new THREE.Color(value);  	});
// var sklight2 = f_lights.addColor( parameters, 'suncolor' ).name('SUN LIGHT').listen();
// sklight2.onChange(function(value){   light2.color = new THREE.Color(value);  	});
// var sklight3 = f_lights.addColor( parameters, 'subcolor' ).name('SUB LIGHT').listen();
// sklight3.onChange(function(value){   light3.color = new THREE.Color(value);  	});
// var sklight4 = f_lights.addColor( parameters, 'headcolor' ).name('HEAD LIGHT').listen();
// sklight4.onChange(function(value){   headlight.color = new THREE.Color(value);  	});
gui.open();
// f_clips.open;
// parameters.gclipxmax = clipMAX;
// parameters.gclipymax = clipMAX;
// parameters.gclipzmax = clipMAX;
// parameters.gclipxmin = clipMIN;
// parameters.gclipymin = clipMIN;
// parameters.gclipzmin = clipMIN;

}
}
// ウィンドウリサイズ時の動作
function onWindowResize() {
var width = container.offsetWidth;
var height = container.offsetHeight;
camera.aspect = width / height;
camera.updateProjectionMatrix();
renderer.setSize(width, height);
//effect.setSize(width, height);
}
function texture_show(chk){
for(var i=0; i < mat.length; i++){
  if (mat[i][2] != ""){
    // texture付material：画像をLoad
    if(chk){
        materials[i].uniforms.usemap.value = 1;
        //materials[i].overdraw = true;
        materials[i].needsUpdate = true;
    }else{
        materials[i].uniforms.usemap.value = 0;
        //materials[i].overdraw = true;
        materials[i].needsUpdate = true;
    }
  }
}
}
// 
function render() {
requestAnimationFrame(render);
controls.update();
renderer.render(scene, camera);
}


