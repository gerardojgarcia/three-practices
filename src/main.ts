import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1 , 1000)

camera.position.set(0, 1, 10)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('app')?.appendChild(renderer.domElement)

const cameraHelper = new THREE.CameraHelper(camera)
scene.add(cameraHelper)


const geometry = new THREE.CylinderGeometry(1, 1, 5, 32)
const material = new THREE.MeshBasicMaterial({
  color: 0xddff00

})

const light = new THREE.DirectionalLight( 0xffffff,  1 );
light.position.set(0,1,0)
light.castShadow = true
scene.add( light );

light.shadow.mapSize.width = 512
light.shadow.mapSize.height = 512
light.shadow.camera.near = 1
light.shadow.camera.far = 500


const sphere = new THREE.Mesh(geometry, material)
sphere.castShadow = true
scene.add(sphere)


sphere.rotation.x = 1.9
sphere.rotation.y= .5
sphere.rotation.z = 2


function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)

}


animate()
