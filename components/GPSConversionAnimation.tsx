// components/GPSConversionAnimation.tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

export function GPSConversionAnimation({ 
  position = [0, 0, 0] as [number, number, number] 
}) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // 지구 회전
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.3;
    }

    // GPS 포인트들 애니메이션
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.2;
    }
  });

  // GPS 좌표 포인트들 (위도/경도 시뮬레이션)
  const gpsPoints: [number, number, number][] = [
    [0, 1.5, 0],
    [1, 0.8, 0.5],
    [-0.8, 0.5, 1],
    [0.5, -0.8, -0.8],
  ];

  return (
    <group position={position}>
      {/* 지구 (구) */}
      <Sphere ref={sphereRef} args={[1.2, 32, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* GPS 좌표 포인트들 */}
      <group ref={pointsRef}>
        {gpsPoints.map((point, i) => (
          <Sphere key={i} position={point} args={[0.1, 8, 8]}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
          </Sphere>
        ))}
      </group>

      {/* 그리드 (평면 좌표계) */}
      <gridHelper args={[4, 10, "#6b7280", "#6b7280"]} position={[0, -2, 0]} />
      
      {/* 변환 화살표 */}
      <Line
        points={[[0, 1.5, 0], [0, -1.5, 0]]}
        color="#f59e0b"
        lineWidth={2}
        dashed
        dashScale={10}
        dashSize={0.1}
        gapSize={0.05}
      />
    </group>
  );
}