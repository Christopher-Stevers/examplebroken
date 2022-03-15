import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "../components/OrbitControls";
import { AsciiEffect } from "../components/AsciiEffect";
import AsciiRenderer  from "../components/AsciiRender.js";
import Globe from "../components/globe"
export default function IndexPage() {
  return (<><Globe/></>)}