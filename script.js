console.log("Hello, Three.js!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a brighter material for the edges
const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

// Create a basic material for the cube
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// Create a Lambert material for shading
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });

// Create the cube with Lambert material
const cube = new THREE.Mesh(geometry, lambertMaterial);
scene.add(cube);

// Create wireframe for the cube to highlight edges
const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
cube.add(wireframe);

camera.position.z = 5;

// Variables to store the initial mouse position
let mouseX = 0;
let mouseY = 0;

// Variables to store the current rotation
let targetRotationX = 0;
let targetRotationY = 0;

// Variable to control the rotation speed
const rotationSpeed = 0.05;

function animate() {
    requestAnimationFrame(animate);

    // Smoothly interpolate towards the target rotation
    cube.rotation.x += (targetRotationX - cube.rotation.x) * rotationSpeed;
    cube.rotation.y += (targetRotationY - cube.rotation.y) * rotationSpeed;

    renderer.render(scene, camera);
}

// Event listener for mouse movement
renderer.domElement.addEventListener('pointermove', onPointerMove);

function onPointerMove(event) {
    // Calculate the normalized mouse coordinates (-1 to 1)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the target rotation based on mouse movement
    targetRotationX = mouseY * Math.PI;
    targetRotationY = mouseX * Math.PI;
}

animate();
