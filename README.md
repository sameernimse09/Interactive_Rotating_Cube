# Interactive Rotating Cube with Emphasized Edges Using Three.js

This Three.js code creates a dynamic and visually appealing scene featuring a rotating cube with emphasized edges. The script begins by initializing essential components, including the scene, camera, and renderer. The cube's geometry is defined, and three distinct materials are introduced: lambertMaterial for shading, edgeMaterial to highlight edges, and basicMaterial for the cube's color. An intriguing aspect is the creation of a wireframe, achieved with THREE.LineSegments, which accentuates the cube's edges and is seamlessly integrated as a child of the cube.

The code cleverly incorporates mouse interaction, tracking normalized coordinates as the user moves the mouse. These coordinates influence the cube's target rotation (targetRotationX and targetRotationY), resulting in an interactive rotation effect. The animation is orchestrated through the animate function, utilizing requestAnimationFrame for smooth transitions. The camera's position is strategically set along the z-axis to provide an optimal view of the dynamic scene.
