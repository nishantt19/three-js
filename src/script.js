import './style.css'
import './style.css';

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';



// Canvas
const canvas = document.querySelector('canvas.webgl')

// cursor
// const cursor = {
//     x : 0,
//     y : 0
// }
// window.addEventListener('mousemove', (event)=>{
//     // we divided it by the width and height to get the value of our cursor's coordinate in between 0 and 1
// cursor.x = event.clientX/sizes.width - 0.5;
// cursor.y = -(event.clientY/sizes.height -0.5);



// })


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
camera.position.z = 3;
// camera.position.y = 3;
// camera.position.x = 3;
camera.lookAt(cube.position)
scene.add(camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; 


// example of orthographic camera
// const aspectRatio = sizes.width/sizes.height ;
// const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, 1,-1, 0.1, 100);
// camera.position.z = 2;
// camera.position.x = 2;
// camera.position.y =2;
// camera.lookAt(cube.position);
// scene.add(camera);






// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)






// Animation

const clock = new THREE.Clock();

const tick =()=>{
    const elapsedTime = clock.getElapsedTime();


    // cube.rotation.y = elapsedTime;
    // cube.position.y = Math.sin(elapsedTime);
    // cube.position.x = Math.cos(elapsedTime);
    
    
//    camera.position.x = Math.sin(cursor.x *Math.PI *2)*3;
//    camera.position.z = Math.cos(cursor.x *Math.PI *2)*3;
//    camera.position.y = cursor.y *5;
// camera.lookAt(cube.position);

  controls.update();
   
    


    // render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}

tick();
