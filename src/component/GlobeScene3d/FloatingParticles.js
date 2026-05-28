import {
  useGLTF,
  Center
}
from "@react-three/drei"

import {
  useEffect,
  useRef
}
from "react"

import {
  useFrame
}
from "@react-three/fiber"

import * as THREE from "three"

import CountryPoints from "./CountryPoints"
import WorldNodes from "./WorldNodes"
import ConnectionLines from "./ConnectionLines"
import DataPackets from "./DataPackets"



function Orbit({
  radius,
  y,
  speed
}) {

  const ref = useRef()

  useFrame((state, delta) => {

    if (ref.current) {

      ref.current.rotation.z +=
        speed * delta * 10

    }

  })

  return (

    <mesh
      ref={ref}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, y, 0]}
    >

      <torusGeometry
        args={[
          radius,
          0.002,
          16,
          200
        ]}
      />

      <meshBasicMaterial
        color="#78FFBC"
        transparent
        opacity={0.12}
      />

    </mesh>

  )

}



export default function Globe() {

  const group = useRef()

  const { scene } =
    useGLTF(
      "/models/hologram_globe_using_geometry_nodes.glb"
    )



  useEffect(() => {

    scene.position.set(0, 0, 0)

    scene.traverse((child) => {

      if (child.isMesh) {

        child.material =
          new THREE.MeshStandardMaterial({

            color: "#189a5d",

            emissive: "#1b4f37",

            emissiveIntensity: 1.4,

            transparent: true,

            opacity: 0.55,

            wireframe: true

          })

      }

    })

  }, [scene])



  useFrame((state, delta) => {

    if (group.current) {

      group.current.rotation.y +=
        0.003 * delta * 30

    }

  })



  return (

    <group
      ref={group}
      position={[4, -1.5, 0]}
      scale={6}
    >

      {/* GLOBE */}

      <Center>

        <primitive
          object={scene}
          rotation={[0.15, 0, 0]}
          scale={1.7}
        />

      </Center>



      {/* ATMOSPHERIC GLOW */}

      <mesh scale={1.9}>

        <sphereGeometry
          args={[0.55, 64, 64]}
        />

        <meshBasicMaterial
          color="#6fffd0"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />

      </mesh>



      {/* SHADOW */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.45, 0]}
        scale={1.8}
      >

        <circleGeometry
          args={[0.5, 64]}
        />

        <meshBasicMaterial
          color="black"
          transparent
          opacity={0.35}
          depthWrite={false}
        />

      </mesh>



      {/* NETWORK */}

      <CountryPoints />

      <WorldNodes />

      <ConnectionLines />

      <DataPackets />



      {/* ORBITS */}

      <Orbit
        radius={0.40}
        y={0.30}
        speed={0.0002}
      />

      <Orbit
        radius={0.50}
        y={0.15}
        speed={0.0003}
      />

      <Orbit
        radius={0.55}
        y={0}
        speed={0.0004}
      />

      <Orbit
        radius={0.48}
        y={-0.15}
        speed={0.0005}
      />

      <Orbit
        radius={0.42}
        y={-0.25}
        speed={0.0006}
      />

    </group>

  )

}