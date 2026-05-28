import { Points, PointMaterial } from "@react-three/drei"
import { useMemo } from "react"


function DottedOrbit({
  radius,
  y,
  rotation
}) {

  const positions = useMemo(() => {

    const points = []

    for (let i = 0; i < 200; i++) {

      const angle =
        (i / 200) * Math.PI * 2

      points.push(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      )

    }

    return new Float32Array(points)

  }, [radius, y])



  return (

    <group rotation={rotation}>

      <Points positions={positions} stride={3}>

        <PointMaterial
          transparent
          color="#6fffd0"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />

      </Points>

    </group>

  )

}



export default function ConnectionLines() {

  return (

    <group>

      <DottedOrbit
        radius={0.55}
        y={0.2}
        rotation={[0, 0, 0]}
      />

      <DottedOrbit
        radius={0.65}
        y={0}
        rotation={[0.4, 0.2, 0]}
      />

      <DottedOrbit
        radius={0.75}
        y={-0.15}
        rotation={[0.8, 0.4, 0]}
      />

      <DottedOrbit
        radius={0.50}
        y={0.1}
        rotation={[1.2, 0.2, 0]}
      />

      <DottedOrbit
        radius={0.60}
        y={-0.25}
        rotation={[0.3, 1, 0]}
      />

    </group>

  )

}