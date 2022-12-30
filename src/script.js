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

// 
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x0000ff})
)

scene.add(cube);



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)






// Animation

const clock = new THREE.Clock();

const tick =()=>{
    const elapsedTime = clock.getElapsedTime();


    cube.rotation.y = elapsedTime;
   
    


    // render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}

tick();
