"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Vector3 } from "three";

export default function Camera({ target }: { target: [number, number, number] }) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  const targetVec = new Vector3(...target);

  useFrame(() => {
    const offset = new Vector3();
    controlsRef.current?.object.getWorldPosition(offset);

    const desiredPos = targetVec.clone().add(offset.sub(targetVec).setLength(10)).setY(targetVec.y + 5);
    
    camera.lookAt(targetVec);
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
    />
  );
}
