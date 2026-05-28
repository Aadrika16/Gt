import { } from "@react-three/drei"

export default function CountryPoints(){

return(

<group scale={0.80}>

<mesh position={[0.14,0.50,0.24]}>

<sphereGeometry
args={[0.004,10,10]}
/>

<meshBasicMaterial
color="#7DFFC6"
/>

</mesh>


<mesh position={[0.28,0.48,0.20]}>

<sphereGeometry
args={[0.004,10,10]}
/>

<meshBasicMaterial
color="#7DFFC6"
/>

</mesh>


<mesh position={[-0.30,0.60,0.16]}>

<sphereGeometry
args={[0.004,10,10]}
/>

<meshBasicMaterial
color="#7DFFC6"
/>

</mesh>


<mesh position={[0.22,0.58,0.28]}>

<sphereGeometry
args={[0.004,10,10]}
/>

<meshBasicMaterial
color="#7DFFC6"
/>

</mesh>

</group>

)

}