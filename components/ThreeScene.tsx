'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cone } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ThreeSceneProps {
  type?: 'sphere' | 'cube' | 'knife';
  color?: string;
}

function RotatingMesh({ type, color = '#00ff88' }: { type: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      {type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
      {type === 'cube' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
      {type === 'knife' && (
        <group>
          <Box args={[0.2, 2, 0.05]} position={[0, 0, 0]}>
            <meshStandardMaterial color={color} wireframe />
          </Box>
          <Cone args={[0.15, 0.5, 3]} position={[0, 1.25, 0]}>
            <meshStandardMaterial color={color} wireframe />
          </Cone>
        </group>
      )}
      {type !== 'knife' && (
        <meshStandardMaterial 
          color={color} 
          wireframe 
          wireframeLinewidth={2}
        />
      )}
    </mesh>
  );
}

export default function ThreeScene({ type = 'sphere', color = '#00ff88' }: ThreeSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={color} />
      
      <RotatingMesh type={type} color={color} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}