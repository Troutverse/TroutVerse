// components/CapMeshAnimation.tsx
'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Vector3, BufferGeometry, Float32BufferAttribute } from 'three';
import * as THREE from 'three';

interface CapMeshAnimationProps {
  position?: [number, number, number];
}

export function CapMeshAnimation({ position = [0, 0, 0] }: CapMeshAnimationProps) {
  const groupRef = useRef<Group>(null);
  const timeRef = useRef(0);
  const phaseRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    
    // 10초 주기
    phaseRef.current = (timeRef.current % 10) / 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = timeRef.current * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <AnimatedMesh timeRef={timeRef} phaseRef={phaseRef} />
    </group>
  );
}

function AnimatedMesh({ 
  timeRef, 
  phaseRef 
}: { 
  timeRef: React.MutableRefObject<number>;
  phaseRef: React.MutableRefObject<number>;
}) {
  const mainMeshRef = useRef<THREE.Mesh>(null);
  const cutLineRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const liquidGroupRef = useRef<Group>(null);
  
  useFrame(() => {
    const phase = phaseRef.current;
    
    // 1. Main Mesh opacity (0~0.2: 0.8, 이후: 0.4)
    if (mainMeshRef.current) {
      const mat = mainMeshRef.current.material as THREE.MeshPhysicalMaterial;
      mat.opacity = phase < 0.2 ? 0.8 : 0.4;
    }
    
    // 2. Cut Line (0.1~0.3에 나타남)
    if (cutLineRef.current) {
      const mat = cutLineRef.current.material as THREE.MeshStandardMaterial;
      if (phase > 0.1 && phase < 0.3) {
        cutLineRef.current.visible = true;
        const lineProgress = (phase - 0.1) / 0.2;
        cutLineRef.current.scale.y = lineProgress;
        mat.opacity = 1;
        mat.emissiveIntensity = 3;
      } else if (phase >= 0.3) {
        cutLineRef.current.visible = true;
        cutLineRef.current.scale.y = 1;
        mat.opacity = 0.3;
        mat.emissiveIntensity = 0.5;
      } else {
        cutLineRef.current.visible = false;
      }
    }
    
    // 3. Wireframe (0.3~0.5에 나타남)
    if (wireframeRef.current) {
      const mat = wireframeRef.current.material as THREE.MeshBasicMaterial;
      if (phase > 0.3 && phase < 0.5) {
        wireframeRef.current.visible = true;
        mat.opacity = ((phase - 0.3) / 0.2) * 0.4;
      } else if (phase >= 0.5) {
        wireframeRef.current.visible = true;
        mat.opacity = 0.4;
      } else {
        wireframeRef.current.visible = false;
      }
    }
    
    // 4. Liquid Fill (0.5~0.85에 차오름) 🌊
    if (liquidGroupRef.current) {
      if (phase > 0.5 && phase < 0.85) {
        liquidGroupRef.current.visible = true;
        const fillProgress = (phase - 0.5) / 0.35;
        // 아래(-1.2)에서 위(1.2)로
        const targetY = -1.2 + fillProgress * 2.4;
        liquidGroupRef.current.position.y = targetY;
        liquidGroupRef.current.scale.setScalar(1);
      } else if (phase >= 0.85) {
        liquidGroupRef.current.visible = true;
        liquidGroupRef.current.position.y = 1.2;
        liquidGroupRef.current.scale.setScalar(1);
      } else {
        liquidGroupRef.current.visible = false;
      }
    }
  });
  
  return (
    <>
      {/* Main Mesh */}
      <mesh ref={mainMeshRef}>
        <sphereGeometry args={[1.2, 64, 64, 0, Math.PI]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          transparent
          opacity={0.8}
          metalness={0.3}
          roughness={0.2}
          transmission={0.5}
          thickness={0.5}
        />
      </mesh>
      
      {/* Cut Line */}
      <mesh 
        ref={cutLineRef}
        position={[0, 0, 0]} 
        rotation={[0, 0, Math.PI / 2]}
        visible={false}
      >
        <cylinderGeometry args={[0.04, 0.04, 2.5, 16]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={3}
          transparent
        />
      </mesh>
      
      {/* Wireframe */}
      <mesh ref={wireframeRef} visible={false}>
        <sphereGeometry args={[1.21, 32, 32, 0, Math.PI]} />
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
        />
      </mesh>
      
      {/* Boundary Particles */}
      <BoundaryParticles phaseRef={phaseRef} timeRef={timeRef} />
      
      {/* Liquid Fill Group - 전체를 y축으로 이동 */}
      <group ref={liquidGroupRef} visible={false}>
        <LiquidMesh />
      </group>
      
      {/* Energy Waves */}
      <EnergyWaves phaseRef={phaseRef} />
    </>
  );
}

// Boundary Particles
function BoundaryParticles({ 
  phaseRef, 
  timeRef 
}: { 
  phaseRef: React.MutableRefObject<number>;
  timeRef: React.MutableRefObject<number>;
}) {
  const particleRefs = useRef<THREE.Mesh[]>([]);
  const count = 24;
  
  useFrame(() => {
    const phase = phaseRef.current;
    const time = timeRef.current;
    
    particleRefs.current.forEach((particle, i) => {
      if (!particle) return;
      
      let particlePhase = 0;
      if (phase > 0.4 && phase < 0.6) {
        particlePhase = (phase - 0.4) / 0.2;
      } else if (phase >= 0.6) {
        particlePhase = 1;
      }
      
      const pulseScale = 1 + Math.sin(time * 3 + i * 0.5) * 0.3;
      particle.scale.setScalar(particlePhase * pulseScale);
      
      const mat = particle.material as THREE.MeshStandardMaterial;
      mat.opacity = particlePhase;
    });
  });
  
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI;
    const radius = 1.2;
    const x = Math.cos(angle) * radius * Math.sin(Math.PI / 2);
    const y = Math.sin(angle) * radius;
    
    particles.push(
      <mesh
        key={i}
        ref={(el) => {
          if (el) particleRefs.current[i] = el;
        }}
        position={[x, y, 0]}
        scale={0}
      >
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={2}
          transparent
        />
      </mesh>
    );
  }
  
  return <>{particles}</>;
}

// Liquid Mesh - 원반 형태
function LiquidMesh() {
  const geometry = useMemo(() => {
    const segments = 64;
    const positions: number[] = [];
    const radius = 1.25; // 조금 더 크게
    
    // 원형 fan
    for (let i = 0; i < segments; i++) {
      const angle1 = (i / segments) * Math.PI;
      const angle2 = ((i + 1) / segments) * Math.PI;
      
      const x1 = Math.cos(angle1) * radius * Math.sin(Math.PI / 2);
      const z1 = Math.sin(angle1) * radius;
      const x2 = Math.cos(angle2) * radius * Math.sin(Math.PI / 2);
      const z2 = Math.sin(angle2) * radius;
      
      positions.push(0, 0, 0);
      positions.push(x1, 0, z1);
      positions.push(x2, 0, z2);
    }
    
    const geom = new BufferGeometry();
    geom.setAttribute('position', new Float32BufferAttribute(new Float32Array(positions), 3));
    geom.computeVertexNormals();
    
    return geom;
  }, []);
  
  return (
    <mesh geometry={geometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshPhysicalMaterial
        color="#10b981"
        emissive="#10b981"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

// Energy Waves
function EnergyWaves({ phaseRef }: { phaseRef: React.MutableRefObject<number> }) {
  const waveRefs = useRef<THREE.Mesh[]>([]);
  const waveCount = 3;
  
  useFrame(() => {
    const phase = phaseRef.current;
    
    if (phase < 0.85) {
      waveRefs.current.forEach(wave => {
        if (wave) wave.visible = false;
      });
      return;
    }
    
    const wavePhase = (phase - 0.85) / 0.15;
    
    waveRefs.current.forEach((wave, i) => {
      if (!wave) return;
      
      const delay = i * 0.3;
      const localPhase = Math.max(0, Math.min(1, (wavePhase - delay) / 0.7));
      
      if (localPhase === 0) {
        wave.visible = false;
        return;
      }
      
      wave.visible = true;
      const scale = 1 + localPhase * 0.5;
      wave.scale.setScalar(scale);
      
      const mat = wave.material as THREE.MeshBasicMaterial;
      mat.opacity = (1 - localPhase) * 0.6;
    });
  });
  
  const waves = [];
  for (let i = 0; i < waveCount; i++) {
    waves.push(
      <mesh
        key={i}
        ref={(el) => {
          if (el) waveRefs.current[i] = el;
        }}
        visible={false}
      >
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI]} />
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
        />
      </mesh>
    );
  }
  
  return <>{waves}</>;
}