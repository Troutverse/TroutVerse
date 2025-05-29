"use client";
export default function Terrain() {
  return (
    <mesh position={[0, 1, 0]} receiveShadow>
      <boxGeometry args={[50, 2, 50]} />
      <meshStandardMaterial color="#808080" />
    </mesh>
  );
}
