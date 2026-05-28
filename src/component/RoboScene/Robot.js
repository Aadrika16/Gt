import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import {
useRef,
useEffect
} from "react"

import * as THREE from "three"

export default function Robot(){

const ref = useRef()

const {
scene
} = useGLTF(
"/models/robot_ball.glb"
)



/* MATERIAL */

useEffect(()=>{

scene.traverse((child)=>{

if(child.isMesh){

child.material =
new THREE.MeshPhysicalMaterial({

color:"#111111",

metalness:1,

roughness:0.15,

clearcoat:1,

clearcoatRoughness:0.05,

envMapIntensity:2

})

child.castShadow = true
child.receiveShadow = true

}

})

},[scene])



useFrame((state, delta) => {

if(!ref.current) return

const sections =
document.querySelectorAll(
".editorial-section"
)

let targetX = 0


/* HERO */

if(
window.scrollY < 300
){

targetX = 0

}

/* ARTICLE */

sections.forEach((section,index)=>{

const rect =
section.getBoundingClientRect()

if(

rect.top <
window.innerHeight/2

&&

rect.bottom >
window.innerHeight/2

){

targetX =

index % 2 === 0
? 3.2
: -3.2

}

})


/* CTA */

const cta =
document.querySelector(
".cta-section"
)

if(cta){

const rect =
cta.getBoundingClientRect()

if(
rect.top <
window.innerHeight
){

targetX = 0

}

}


/* MOVE */

ref.current.position.x =

THREE.MathUtils.damp(
ref.current.position.x,
targetX,
10,
delta
)


ref.current.position.y =

THREE.MathUtils.damp(
ref.current.position.y,
-1.8,
3,
delta
)


ref.current.rotation.y =

THREE.MathUtils.damp(
ref.current.rotation.y,
-targetX*0.12,
3,
delta
)


/* FLOAT */

ref.current.position.y +=

Math.sin(
state.clock.elapsedTime*1.2
)*0.002

})


return(

<group

ref={ref}

position={[0,-1.8,0]}

>

<primitive

object={scene}

scale={2}

/>

</group>

)

}


useGLTF.preload(
"/models/robot_ball.glb"
)