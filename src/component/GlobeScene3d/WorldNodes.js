export default function WorldNodes() {

  const nodes = [

    [0.3,0.2,0.4],
    [-0.2,0.1,-0.3],
    [0.1,-0.3,0.2],
    [-0.35,0.25,0.1],
    [0.25,-0.2,-0.25]

  ]

  return (

    <group>

      {nodes.map((node,index)=>(

        <mesh
          key={index}
          position={node}
        >

          <sphereGeometry
            args={[0.015,16,16]}
          />

          <meshBasicMaterial
            color="#6fffd0"
          />

        </mesh>

      ))}

    </group>

  )

}