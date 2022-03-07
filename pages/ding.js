import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [texture] = useLoader(TextureLoader, "https://assets.wallpapersin4k.org/uploads/2017/04/World-Map-Wallpaper-Black-And-White-6.jpg")
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (<><Canvas camera={{ position: [0, 0, 35] }}>
    <ambientLight intensity={2} />
    <pointLight position={[40, 40, 40]} />
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
      </Canvas></>
  )
}
export default Box;