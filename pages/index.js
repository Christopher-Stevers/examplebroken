import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
export default function IndexPage() {
  const target = useRef();
 /* useEffect(()=>{
    if(target.current){
      const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
      const texture = new THREE.TextureLoader().load("/World-Map-Wallpaper-Black-And-White-6.jpg");
		console.log(texture);
      renderer.setSize( window.innerWidth, window.innerHeight );
			target.current.appendChild( renderer.domElement );

			const geometry = new THREE.SphereGeometry( 15, 32, 16 );
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, map: texture } );
			const earth = new THREE.Mesh( geometry, material );
			scene.add( earth );
     const  effect = new AsciiEffect( renderer, '$ ', { invert: false } );
				effect.setSize( window.innerWidth, window.innerHeight );
				effect.domElement.style.color = 'white';
				effect.domElement.style.backgroundColor = 'black';

				// Special case: append effect.domElement, instead of renderer.domElement.
				// AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

				target.current.appendChild( effect.domElement );
      const TrackballControls=require('three/examples/jsm/controls/TrackballControls.js')
			const controls = new TrackballControls( camera, effect.domElement );


			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );

				earth.rotation.x += 0.01;
				earth.rotation.y += 0.01;

				renderer.render( scene, camera );
			};
      animate()
    }

  },[target])*/
  return (
    <div className="main">
      <Link href="/birds">
        <a>Birds Example</a>
      </Link>
      <Link href="/boxes">
        <a>Boxes Example</a>
      </Link>
      <div ref={target}></div>
      <Image src="/glb/IMG_3474.JPG" width="200" height="200"/>
    </div>
  )
}
