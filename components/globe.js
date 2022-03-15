import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "./OrbitControls";
import { AsciiRenderer } from "./AsciiRender.js";
export default function Globe() {
  const target = useRef();
  const asciiTarget = useRef();
  useEffect(() => {
    if (target.current) {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x00000);
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      const str = "1Є₿$¥Ξ";
      const randStr = [
        ...`${str}${str}${str}${str}${str}${str}${str}${str}${str}${str}`,
        "0x",
      ]
        .sort((a, b) => {
          return (0.5 - Math.random()) * 1;
        })
        .join(""); 
      renderer.setSize(window.innerWidth, window.innerHeight);
      target.current.appendChild(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);
      target.current.appendChild(renderer.domElement);

      var asciiRenderer = new AsciiRenderer(renderer, {
        charSet: randStr,
        opacity: 0.7,
        color: "black",
        fontSize: 12,
      });

      controls.update();
      // Special case: append renderer.domElement, instead of renderer.domElement.
      // Asciirenderer creates a custom domElement (a div container) where the ASCII elements are placed.

      const texture = new THREE.TextureLoader().load("map1.png");
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const geometry = new THREE.SphereGeometry(2);
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      camera.position.z = 5;
      function onWindowResize() {
        var width = window.innerHeight;
        var height = window.innerWidth;
      }
      window.addEventListener("resize", onWindowResize, false);
      onWindowResize();
      controls.update();
      function animate(spin) {
        requestAnimationFrame(animate);
        controls.update();

        renderer.render(scene, camera);
        sphere.rotation.y += 0.01;
      }

      animate();
    }
  }, [target]);
  return (
    <>
      <div ref={asciiTarget}></div>
      <div ref={target}></div>
    </>
  );
}
