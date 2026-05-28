import { useRef, useMemo } from "react"

import { useFrame } from "@react-three/fiber"

import { Trail } from "@react-three/drei"

import * as THREE from "three"



function Packet({

  radius = 1,

  speed = 0.1,

  offset = 0,

  y = 0,

  size = 1

}) {

  const ref = useRef()



  /* =========================
  CURVE PATH
  ========================= */

  const curve = useMemo(() => {

    const points = []

    for (let i = 0; i <= 100; i++) {

      const angle =
        (i / 100) * Math.PI * 2

      points.push(

        new THREE.Vector3(

          Math.cos(angle) * radius,

          y,

          Math.sin(angle) * radius

        )

      )

    }

    return new THREE.CatmullRomCurve3(
      points,
      true
    )

  }, [radius, y])



  /* =========================
  ANIMATION
  ========================= */

  useFrame((state) => {

    if (ref.current) {

      const time =

        (
          state.clock.elapsedTime *
          speed +
          offset
        ) % 1



      const position =
        curve.getPointAt(time)



      /* MOVE AROUND GLOBE */

      ref.current.position.copy(position)



      /* FACE CENTER */

      ref.current.lookAt(0, 0, 0)

    }

  })



  return (

    <Trail

      width={0.01}

      length={0.4}

      color="#8ffff1"

      attenuation={(t) => t}

    >

      <group ref={ref}>



        {/* MAIN DATA CARD */}

        <mesh>

          <boxGeometry
            args={[
              0.09 * size,
              0.045 * size,
              0.003
            ]}
          />

          <meshPhysicalMaterial

            color="#8ffff1"

            transparent

            opacity={0.16}

            roughness={0}

            metalness={0.2}

            transmission={1}

          />

        </mesh>



        {/* HEADER LINE */}

        <mesh
          position={[0, 0.012, 0.002]}
        >

          <boxGeometry
            args={[
              0.05 * size,
              0.003,
              0.001
            ]}
          />

          <meshBasicMaterial
            color="#8ffff1"
          />

        </mesh>



        {/* DATA DOT */}

        <mesh
          position={[
            -0.025 * size,
            -0.01,
            0.002
          ]}
        >

          <sphereGeometry
            args={[0.004, 12, 12]}
          />

          <meshBasicMaterial
            color="#8ffff1"
          />

        </mesh>



        {/* DATA LINE 1 */}

        <mesh
          position={[
            0.01 * size,
            -0.008,
            0.002
          ]}
        >

          <boxGeometry
            args={[
              0.03 * size,
              0.002,
              0.001
            ]}
          />

          <meshBasicMaterial
            color="#8ffff1"
          />

        </mesh>



        {/* DATA LINE 2 */}

        <mesh
          position={[
            0.005 * size,
            -0.018,
            0.002
          ]}
        >

          <boxGeometry
            args={[
              0.04 * size,
              0.002,
              0.001
            ]}
          />

          <meshBasicMaterial
            color="#8ffff1"
          />

        </mesh>

      </group>

    </Trail>

  )

}



/* =========================
MAIN COMPONENT
========================= */

export default function DataPackets() {

  return (

    <group>

      {

        Array.from({ length: 18 }).map((_, i) => (

          <Packet

            key={i}

            radius={
              0.65 +
              Math.random() * 0.35
            }

            y={
              (
                Math.random() - 0.5
              ) * 0.6
            }

            speed={
              0.02 +
              Math.random() * 0.03
            }

            offset={Math.random()}

            size={
              0.7 +
              Math.random() * 1.2
            }

          />

        ))

      }

    </group>

  )

}