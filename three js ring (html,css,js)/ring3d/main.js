import './style.css'

import * as THREE from 'three';
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// 1- create our scene (hold everything)
const scene = new THREE.Scene();

// 2- user view , aspect ratio , which object are visible 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

// 3- render
const renderer = new THREE.WebGL1Renderer({
    canvas:document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// better perspective
camera.position.setZ(30); 


// create object
const geometry = new THREE.IcosahedronGeometry(10, 0);
const material = new THREE.MeshStandardMaterial({color : 0x3d84b8});
const icos = new THREE.Mesh(geometry, material);
scene.add(icos);

// add light to the scene
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);



function animate(){
    requestAnimationFrame(animate);

    // animate rotation
    icos.rotation.x += 0.01;
    icos.rotation.y += 0.005;
    icos.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

function addStar(){
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color :0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}


Array(200).fill().forEach(addStar);

animate();
