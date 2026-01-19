'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AllocationServiceAnimationProps {
    position?: [number, number, number];
}

export function AllocationServiceAnimation({ position = [0, 0, 0] }: AllocationServiceAnimationProps) {
    const groupRef = useRef<THREE.Group>(null);
    const serversRef = useRef<THREE.Group[]>([]);
    const requestRef = useRef<THREE.Mesh>(null);
    const selectedGlowRef = useRef<THREE.Mesh>(null);

    // 서버 박스 위치 (원형 배치)
    const serverPositions = useMemo(() => {
        const positions: [number, number, number][] = [];
        const count = 6;
        const radius = 2;
        
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            positions.push([x, 0, z]);
        }
        
        return positions;
    }, []);

    // 파티클 데이터
    const particleData = useMemo(() => {
        const count = 30;
        const positions = new Float32Array(count * 3);
        
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = 2.5;
            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
            positions[i * 3 + 2] = Math.sin(angle) * radius;
        }
        
        return positions;
    }, []);

    const particleGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(particleData, 3));
        return geometry;
    }, [particleData]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        
        if (!groupRef.current || !requestRef.current || !selectedGlowRef.current) return;

        // 애니메이션 사이클 (8초)
        const cycleDuration = 8;
        const cycleTime = time % cycleDuration;

        // 단계별 타이밍
        const idleEnd = 1;
        const requestStart = 1;
        const requestEnd = 2;
        const searchStart = 2;
        const searchEnd = 4;
        const selectStart = 4;
        const selectEnd = 5;
        const allocateStart = 5;
        const allocateEnd = 6.5;
        const resetStart = 7;

        // 전체 회전
        groupRef.current.rotation.y = time * 0.1;

        // 서버 박스들 애니메이션
        serversRef.current.forEach((server, index) => {
            if (!server) return;
            
            // 기본 떠다니는 효과
            const floatOffset = Math.sin(time * 0.5 + index) * 0.1;
            server.position.y = floatOffset;
            server.rotation.y = time * 0.2 + index;

            // 검색 단계 (모든 서버 스캔)
            if (cycleTime >= searchStart && cycleTime < searchEnd) {
                const progress = (cycleTime - searchStart) / (searchEnd - searchStart);
                const scanDelay = index * 0.15;
                const scanProgress = Math.max(0, Math.min(1, (progress - scanDelay) * 3));
                
                server.children.forEach((child) => {
                    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                        const pulse = Math.sin(scanProgress * Math.PI);
                        child.material.emissiveIntensity = 0.2 + pulse * 0.5;
                        child.material.color.setHex(scanProgress > 0.5 ? 0x22d3ee : 0x06b6d4);
                    }
                });
            }
            // 선택 단계 (3번 서버 선택)
            else if (cycleTime >= selectStart && index === 3) {
                server.children.forEach((child) => {
                    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                        const pulse = Math.sin(time * 5);
                        child.material.emissiveIntensity = 0.8 + pulse * 0.2;
                        child.material.color.setHex(0x22d3ee);
                        
                        // 스케일 펄스
                        const scale = 1 + Math.sin(time * 5) * 0.1;
                        server.scale.setScalar(scale);
                    }
                });
            }
            // 기본 상태
            else {
                server.scale.setScalar(1);
                server.children.forEach((child) => {
                    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                        child.material.emissiveIntensity = 0.2;
                        child.material.color.setHex(0x06b6d4);
                    }
                });
            }
        });

        // 요청 신호 애니메이션
        if (cycleTime >= requestStart && cycleTime < requestEnd) {
            const progress = (cycleTime - requestStart) / (requestEnd - requestStart);
            requestRef.current.position.y = -2 + progress * 2;
            requestRef.current.scale.setScalar(0.5 + Math.sin(progress * Math.PI) * 0.2);
            requestRef.current.rotation.y = progress * Math.PI * 4;
            
            if (requestRef.current.material instanceof THREE.MeshStandardMaterial) {
                requestRef.current.material.emissiveIntensity = 0.8;
                requestRef.current.material.opacity = 1;
            }
        } else if (cycleTime >= requestEnd && cycleTime < searchEnd) {
            requestRef.current.position.y = 0;
            requestRef.current.scale.setScalar(0.5);
            
            if (requestRef.current.material instanceof THREE.MeshStandardMaterial) {
                requestRef.current.material.emissiveIntensity = 0.5;
                requestRef.current.material.opacity = 0.8;
            }
        } else {
            requestRef.current.scale.setScalar(0);
            if (requestRef.current.material instanceof THREE.MeshStandardMaterial) {
                requestRef.current.material.opacity = 0;
            }
        }

        // 선택된 서버 글로우
        if (cycleTime >= selectStart && cycleTime < resetStart) {
            const serverPos = serverPositions[3];
            selectedGlowRef.current.position.set(serverPos[0], 0, serverPos[2]);
            
            const glowProgress = cycleTime >= allocateStart 
                ? (cycleTime - allocateStart) / (allocateEnd - allocateStart)
                : 0;
            
            const scale = 1.5 + Math.sin(time * 3) * 0.2 + glowProgress * 0.5;
            selectedGlowRef.current.scale.setScalar(scale);
            
            if (selectedGlowRef.current.material instanceof THREE.MeshBasicMaterial) {
                selectedGlowRef.current.material.opacity = 0.3 - glowProgress * 0.2;
            }
        } else {
            selectedGlowRef.current.scale.setScalar(0);
        }

        // 리셋
        if (cycleTime >= resetStart) {
            const fadeProgress = (cycleTime - resetStart) / (cycleDuration - resetStart);
            groupRef.current.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.Material) {
                    child.material.opacity = Math.max(0, 1 - fadeProgress);
                }
            });
        } else {
            groupRef.current.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.Material && child !== selectedGlowRef.current) {
                    if (child.material instanceof THREE.MeshStandardMaterial || child.material instanceof THREE.MeshBasicMaterial) {
                        child.material.opacity = 1;
                    }
                }
            });
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* 서버 박스들 */}
            {serverPositions.map((pos, index) => (
                <group
                    key={index}
                    position={pos}
                    ref={(el) => {
                        if (el) serversRef.current[index] = el;
                    }}
                >
                    {/* 서버 본체 */}
                    <mesh>
                        <boxGeometry args={[0.4, 0.5, 0.3]} />
                        <meshStandardMaterial
                            color="#06b6d4"
                            emissive="#06b6d4"
                            emissiveIntensity={0.2}
                            metalness={0.8}
                            roughness={0.2}
                            transparent
                        />
                    </mesh>
                    
                    {/* 서버 상단 LED */}
                    <mesh position={[0, 0.3, 0]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshBasicMaterial color="#22d3ee" />
                    </mesh>
                    
                    {/* 서버 라벨 */}
                    <mesh position={[0, 0, 0.16]}>
                        <planeGeometry args={[0.3, 0.1]} />
                        <meshBasicMaterial color="#000000" opacity={0.8} transparent />
                    </mesh>
                </group>
            ))}

            {/* 매칭 요청 신호 */}
            <mesh ref={requestRef} position={[0, -2, 0]} scale={0}>
                <octahedronGeometry args={[0.3, 0]} />
                <meshStandardMaterial
                    color="#a855f7"
                    emissive="#a855f7"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0}
                />
            </mesh>

            {/* 선택된 서버 글로우 */}
            <mesh ref={selectedGlowRef} scale={0}>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshBasicMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* 중앙 허브 */}
            <mesh position={[0, 0, 0]}>
                <torusGeometry args={[0.3, 0.05, 16, 32]} />
                <meshStandardMaterial
                    color="#a855f7"
                    emissive="#a855f7"
                    emissiveIntensity={0.4}
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* 파티클 링 */}
            <points geometry={particleGeometry}>
                <pointsMaterial
                    size={0.05}
                    color="#06b6d4"
                    transparent
                    opacity={0.4}
                    sizeAttenuation
                />
            </points>

            {/* 바닥 그리드 */}
            <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 6]} />
                <meshBasicMaterial
                    color="#06b6d4"
                    transparent
                    opacity={0.1}
                    wireframe
                />
            </mesh>
        </group>
    );
}