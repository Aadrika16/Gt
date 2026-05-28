import { useGLTF, Center } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import CountryPoints from "./CountryPoints"
import WorldNodes from "./WorldNodes"
import ConnectionLines from "./ConnectionLines"
import DataPackets from "./DataPackets"
import * as THREE from "three"

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
        color="#42ff9c"
        transparent
        opacity={0.24}
        side={THREE.BackSide}
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

    // CENTER THE MODEL
    scene.position.set(0, 0, 0)

    scene.traverse((child) => {

      if (child.isMesh) {

        child.material =
          new THREE.MeshStandardMaterial({
            color: "#08c62b",
            emissive: "#1b4f37",
            emissiveIntensity: 0.08,
            transparent: true,
            opacity: 0.6,
            wireframe: true
          })

      }

    })

  }, [scene])

  useFrame((state, delta) => {

    if (group.current) {

      group.current.rotation.y +=
        0.008 * delta * 30

    }

  })

  return (

    <group
      ref={group}
      position={[4, -0.8, 0]}
      scale={6}
    >

      {/* GLOBE */}

      <Center>

        <primitive
          object={scene}
          rotation={[0.15, 0, 0]}
          scale = {1.7}
        />

      </Center>

      {/* BLACK SHADOW */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.45, 0]}
        scale={1.8}
      >

        <circleGeometry args={[0.5, 64]} />

        <meshBasicMaterial
          color="black"
          transparent
          opacity={0.35}
          depthWrite={false}
        />

      </mesh>

      {/* COUNTRY POINTS */}

      <CountryPoints />
      <WorldNodes />
      <DataPackets />
      <ConnectionLines />

      {/* INNER ORBITS */}

      {/* TOP */}

      {/* TOP */}

      <Orbit
        radius={0.40}
        y={0.30}
        speed={0.0002}
      />

      {/* UPPER */}

      <Orbit
        radius={0.50}
        y={0.15}
        speed={0.0003}
      />

      {/* CENTER */}

      <Orbit
        radius={0.55}
        y={0}
        speed={0.0004}
      />

      {/* LOWER */}

      <Orbit
        radius={0.48}
        y={-0.15}
        speed={0.0005}
      />

      {/* BOTTOM */}

      <Orbit
        radius={0.42}
        y={-0.25}
        speed={0.0006}
      />
    </group>

  )

}