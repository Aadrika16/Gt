import { Canvas } from "@react-three/fiber"

import {
  EffectComposer,
  Bloom
}
from "@react-three/postprocessing"

import Globe from "./Globe"

export default function GlobeScene() {

  return (

    <div className="globe-container">

      <Canvas
        camera={{
          position: [0, 0, 12],
          fov: 45
        }}
      >

        {/* BACKGROUND */}

        <color
          attach="background"
          args={["#020404"]}
        />

        {/* LIGHTS */}

        <ambientLight intensity={1.5} />

        <pointLight
          position={[5,5,5]}
          intensity={4}
          color="#00ffcc"
        />

        {/* GLOBE */}

        <Globe />
        {/* DATA PARTICLES */} 
       

        {/* GLOW */}

        <EffectComposer>

          <Bloom
            intensity={1.6}
            luminanceThreshold={0.05}
            luminanceSmoothing={0.85}
          />

        </EffectComposer>

      </Canvas>

    </div>

  )

}