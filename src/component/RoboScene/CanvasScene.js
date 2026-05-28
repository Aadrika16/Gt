import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

import Robot from "./Robot"

export default function CanvasScene(){

return(

<Canvas
frameloop="always"
camera={{
position:[0,1.5,6],
fov:45
}}
>

<color
attach="background"
args={["#090909"]}
/>

<ambientLight
intensity={0.6}
/>

<directionalLight
position={[5,6,5]}
intensity={3}
/>

<Environment
preset="city"
/>

<Robot/>

</Canvas>

)

}