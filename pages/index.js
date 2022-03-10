import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState, useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from '../components/OrbitControls';
import { AsciiEffect } from '../components/AsciiEffect';
export default function IndexPage() {
  const target = useRef();
  const [spin, updateSpin] = useState(false);
  useEffect(()=>{
    if(target.current){
      
			const scene = new THREE.Scene();
      scene.background= new THREE.Color({color: 0x0000ff});
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      const texture = new THREE.TextureLoader().load( 'map2.jpg');
      const material = new THREE.MeshBasicMaterial( { map: texture } );
			const renderer = new THREE.WebGLRenderer();
     const effect = new AsciiEffect( renderer, ' $$$$$$$$$$$$$$', { color: true, } );
      effect.setSize( window.innerWidth, window.innerHeight );
      effect.domElement.style.color = 'white';
      effect.domElement.style.backgroundColor = 'black';

      // Special case: append effect.domElement, instead of renderer.domElement.
      // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

      target.current.appendChild( effect.domElement );
      const controls = new OrbitControls( camera, effect.domElement );
			target.current.appendChild( effect.domElement );

			const geometry = new THREE.SphereGeometry(2);
			const sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );
			camera.position.z = 5;
controls.update()
			function animate() {
				requestAnimationFrame( animate );
controls.update()

				effect.render( scene, camera );
       if (spin) sphere.rotation.y+=0.01
			};

			animate();
    }
  },[target, spin])
  return (<div style={{position: "relative"}}>
      <div style={{position: "absolute", top:"0px", left:"0px", zIndex:9}} ref={target}></div>
      <button style={{borderRadius:0 ,position: "absolute", top:"0px", left:"0px", zIndex:10, }} onClick={()=>updateSpin(()=>!spin)}>{spin? "stop": "spin"}</button></div>
  )
}
