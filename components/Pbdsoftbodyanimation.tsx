'use client';

import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PBDSoftBodyAnimationProps {
    position?: [number, number, number];
}

export function PBDSoftBodyAnimation({ position = [0, 0, 0] }: PBDSoftBodyAnimationProps) {
    const sphereRef = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.InstancedMesh>(null);
    const edgesRef = useRef<THREE.Group>(null);

    // 파티클 위치 (구체 형태)
    const particleCount = 20;
    const restPositions = useMemo(() => {
        const positions: THREE.Vector3[] = [];
        
        // 피보나치 구 배치
        for (let i = 0; i < particleCount; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            
            const x = Math.sin(phi) * Math.cos(theta);
            const y = Math.sin(phi) * Math.sin(theta);
            const z = Math.cos(phi);
            
            positions.push(new THREE.Vector3(x, y, z).multiplyScalar(0.8));
        }
        
        return positions;
    }, []);

    // 엣지 라인 생성
    const edges = useMemo(() => {
        const edgeList: { i1: number; i2: number; line: THREE.Line }[] = [];
        
        for (let i = 0; i < restPositions.length; i++) {
            for (let j = i + 1; j < restPositions.length; j++) {
                const distance = restPositions[i].distanceTo(restPositions[j]);
                
                // 가까운 파티클만 연결
                if (distance < 1.2) {
                    const geometry = new THREE.BufferGeometry();
                    const positions = new Float32Array(6); // 2 points * 3 coordinates
                    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                    
                    const material = new THREE.LineBasicMaterial({ 
                        color: 0x00ffff, 
                        transparent: true, 
                        opacity: 0.3 
                    });
                    
                    const line = new THREE.Line(geometry, material);
                    edgeList.push({ i1: i, i2: j, line });
                }
            }
        }
        
        return edgeList;
    }, [restPositions]);

    // 엣지 그룹에 라인 추가
    useEffect(() => {
        if (edgesRef.current) {
            edgesRef.current.clear();
            edges.forEach(edge => {
                edgesRef.current?.add(edge.line);
            });
        }
    }, [edges]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        
        if (!sphereRef.current || !particlesRef.current || !edgesRef.current) return;

        // 애니메이션 사이클 (4초)
        const cycleDuration = 4;
        const cycleTime = time % cycleDuration;

        // 단계별 타이밍
        const fallStart = 0;
        const fallEnd = 1;
        const squashStart = 1;
        const squashEnd = 1.3;
        const bounceStart = 1.3;
        const bounceEnd = 2.5;
        const resetStart = 2.5;

        let yPos = 0;
        let squashFactor = 1;
        let stretchFactor = 1;

        if (cycleTime < fallEnd) {
            // 1. 떨어지기
            const progress = cycleTime / fallEnd;
            yPos = 2 - progress * progress * 3; // 포물선 낙하
        } else if (cycleTime >= squashStart && cycleTime < squashEnd) {
            // 2. 찌그러짐 (Squash)
            const progress = (cycleTime - squashStart) / (squashEnd - squashStart);
            const squashProgress = Math.sin(progress * Math.PI); // 0 → 1 → 0
            
            yPos = -1;
            squashFactor = 1 - squashProgress * 0.6; // Y축 압축
            stretchFactor = 1 + squashProgress * 0.4; // XZ축 확장
        } else if (cycleTime >= bounceStart && cycleTime < bounceEnd) {
            // 3. 튀어오름 (Bounce)
            const progress = (cycleTime - bounceStart) / (bounceEnd - bounceStart);
            
            // 감쇠 진동
            const bounceHeight = Math.exp(-progress * 3) * Math.abs(Math.sin(progress * Math.PI * 3));
            yPos = -1 + bounceHeight * 2;
            
            // 약간의 진동
            const oscillation = Math.sin(progress * Math.PI * 6) * 0.1 * Math.exp(-progress * 2);
            squashFactor = 1 + oscillation;
            stretchFactor = 1 - oscillation * 0.5;
        } else {
            // 4. 리셋 (위로 순간이동)
            yPos = 2;
            squashFactor = 1;
            stretchFactor = 1;
        }

        // 전체 그룹 위치
        sphereRef.current.position.y = yPos;

        // 파티클 변형
        const matrix = new THREE.Matrix4();
        const tempPos = new THREE.Vector3();
        
        for (let i = 0; i < particleCount; i++) {
            const restPos = restPositions[i];
            
            // Shape Matching 시뮬레이션
            tempPos.set(
                restPos.x * stretchFactor,
                restPos.y * squashFactor,
                restPos.z * stretchFactor
            );
            
            // 약간의 노이즈 추가 (생동감)
            if (cycleTime >= squashStart && cycleTime < bounceEnd) {
                const noise = Math.sin(time * 3 + i) * 0.03;
                tempPos.x += noise;
                tempPos.z += noise;
            }
            
            matrix.makeTranslation(tempPos.x, tempPos.y, tempPos.z);
            matrix.scale(new THREE.Vector3(0.1, 0.1, 0.1));
            
            particlesRef.current.setMatrixAt(i, matrix);
        }
        particlesRef.current.instanceMatrix.needsUpdate = true;

        // 엣지 업데이트
        edges.forEach(({ i1, i2, line }) => {
            const geometry = line.geometry as THREE.BufferGeometry;
            const positions = geometry.attributes.position;
            
            const p1 = restPositions[i1].clone();
            const p2 = restPositions[i2].clone();
            
            p1.x *= stretchFactor;
            p1.y *= squashFactor;
            p1.z *= stretchFactor;
            
            p2.x *= stretchFactor;
            p2.y *= squashFactor;
            p2.z *= stretchFactor;
            
            positions.setXYZ(0, p1.x, p1.y, p1.z);
            positions.setXYZ(1, p2.x, p2.y, p2.z);
            positions.needsUpdate = true;
        });

        // 전체 회전
        sphereRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
        sphereRef.current.rotation.z = Math.cos(time * 0.3) * 0.2;
    });

    return (
        <group position={position}>
            {/* 소프트바디 그룹 */}
            <group ref={sphereRef}>
                {/* 파티클 */}
                <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshStandardMaterial 
                        color="#00ffff" 
                        emissive="#00ffff" 
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.8}
                    />
                </instancedMesh>

                {/* 엣지 (스프링 연결) */}
                <group ref={edgesRef} />

                {/* 중심점 */}
                <mesh>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            </group>

            {/* 바닥 (충돌 평면) */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[3, 3]} />
                <meshStandardMaterial 
                    color="#404040" 
                    transparent 
                    opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* 바닥 그리드 */}
            <gridHelper args={[3, 10, '#00ffff', '#004444']} position={[0, -0.99, 0]} />

            {/* 충돌 이펙트 */}
            <ImpactEffect />
        </group>
    );
}

// 충돌 이펙트 컴포넌트
function ImpactEffect() {
    const ringsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const cycleTime = time % 4;

        if (!ringsRef.current) return;

        // 충돌 순간 (1초~1.3초)
        if (cycleTime >= 1 && cycleTime < 1.5) {
            const progress = (cycleTime - 1) / 0.5;
            
            ringsRef.current.children.forEach((ring, i) => {
                if (ring instanceof THREE.Mesh) {
                    const delay = i * 0.1;
                    const ringProgress = Math.max(0, Math.min(1, (progress - delay) * 2));
                    
                    ring.scale.setScalar(0.5 + ringProgress * 1.5);
                    if (ring.material instanceof THREE.MeshBasicMaterial) {
                        ring.material.opacity = (1 - ringProgress) * 0.5;
                    }
                }
            });
            
            ringsRef.current.visible = true;
        } else {
            ringsRef.current.visible = false;
        }
    });

    return (
        <group ref={ringsRef} position={[0, -0.98, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            {[0, 1, 2].map((i) => (
                <mesh key={i}>
                    <ringGeometry args={[0.3, 0.35, 32]} />
                    <meshBasicMaterial 
                        color="#00ffff" 
                        transparent 
                        opacity={0}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    );
}