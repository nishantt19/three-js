import './style.css'
import './style.css';

import * as THREE from 'three';
import { Mesh } from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Group of cubes
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0xff0000})
)
group.add(cube1);


const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x00ff00})
)
cube2.position.x= -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x0000ff})
)
cube3.position.x= +2;
group.add(cube3);



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)





// Transforming objects properties 
// position
// cubeMesh.position.x = 1;
// cubeMesh.position.y = 1;
// cubeMesh.position.z = 0.5;
// cubeMesh.position.set(1, 0.4, 0.6);

// scale
// cubeMesh.scale.x = 2;
// cubeMesh.scale.y = 0.5;
// cubeMesh.scale.z = 0.5;
// cubeMesh.scale.set(2, 0.5, 0.5);

// Axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

// rotation
// cubeMesh.rotation.x = 2;
// cubeMesh.rotation.y = 2;
// cubeMesh.rotation.z = 2;