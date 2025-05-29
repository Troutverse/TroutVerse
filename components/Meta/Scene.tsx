"use client";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Terrain from "./Terrain";
import Player from "./Player";
import Camera from "./Camera";
import { Sky } from "@react-three/drei";

export default function Scene() {
  const [playerPos, setPlayerPos] = useState<[number, number, number]>([
    0, 2, 0,
  ]);

  return (
    <div className="w-[80vh] h-[80vh] border-3">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
        <Sky sunPosition={[100, 20, 100]} />
        <Terrain />
        <Player onMove={setPlayerPos} />
        <Camera target={playerPos} />
      </Canvas>
    </div>
  );
}
