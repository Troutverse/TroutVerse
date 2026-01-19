'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LoginServiceAnimationProps {
    position?: [number, number, number];
}

export function LoginServiceAnimation({ position = [0, 0, 0] }: LoginServiceAnimationProps) {
    const groupRef = useRef<THREE.Group>(null);
    const lockRef = useRef<THREE.Group>(null);
    const userIconRef = useRef<THREE.Mesh>(null);
    const cloudRef = useRef<THREE.Group>(null);
    const tokenRef = useRef<THREE.Mesh>(null);
    const particlesRef = useRef<THREE.Points>(null);

    // 파티클 데이터 생성
    const particleData = useMemo(() => {
        const count = 50;
        const positions = new Float32Array(count * 3);
        
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 3;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
        
        return positions;
    }, []);

    // 파티클 지오메트리 생성
    const particleGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(particleData, 3));
        return geometry;
    }, [particleData]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        
        if (!groupRef.current || !lockRef.current || !userIconRef.current || 
            !cloudRef.current || !tokenRef.current) return;

        // 애니메이션 사이클 (6초)
        const cycleDuration = 6;
        const cycleTime = time % cycleDuration;

        // 단계별 타이밍
        const userMoveStart = 0;
        const userMoveEnd = 1.5;
        const lockOpenStart = 1.5;
        const lockOpenEnd = 2.5;
        const tokenGenerateStart = 2.5;
        const tokenGenerateEnd = 3.5;
        const tokenReturnStart = 3.5;
        const tokenReturnEnd = 5;
        const resetStart = 5;

        // 전체 회전
        groupRef.current.rotation.y = time * 0.2;

        // 1. 사용자 아이콘 이동 (왼쪽 → 중앙)
        if (cycleTime < userMoveEnd) {
            const progress = cycleTime / userMoveEnd;
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            userIconRef.current.position.x = -2 + eased * 2;
            userIconRef.current.scale.setScalar(0.8 + Math.sin(progress * Math.PI * 4) * 0.1);
        } else {
            userIconRef.current.position.x = 0;
            userIconRef.current.scale.setScalar(0.8);
        }

        // 2. 자물쇠 열림
        if (cycleTime >= lockOpenStart && cycleTime < lockOpenEnd) {
            const progress = (cycleTime - lockOpenStart) / (lockOpenEnd - lockOpenStart);
            const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            // 자물쇠 고리 회전
            const shackle = lockRef.current.children[0];
            if (shackle) {
                shackle.rotation.z = eased * Math.PI * 0.4;
                shackle.position.y = 0.3 + eased * 0.2;
            }
            
            // 자물쇠 색상 변경
            lockRef.current.children.forEach((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.color.setHex(0x22d3ee);
                    child.material.emissive.setHex(0x22d3ee);
                    child.material.emissiveIntensity = eased * 0.5;
                }
            });
        } else if (cycleTime >= lockOpenEnd) {
            const shackle = lockRef.current.children[0];
            if (shackle) {
                shackle.rotation.z = Math.PI * 0.4;
                shackle.position.y = 0.5;
            }
        } else {
            const shackle = lockRef.current.children[0];
            if (shackle) {
                shackle.rotation.z = 0;
                shackle.position.y = 0.3;
            }
            
            lockRef.current.children.forEach((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.color.setHex(0xfbbf24);
                    child.material.emissive.setHex(0xfbbf24);
                    child.material.emissiveIntensity = 0.3;
                }
            });
        }

        // 3. 클라우드 (PlayFab) 펄스
        if (cycleTime >= lockOpenStart && cycleTime < tokenReturnEnd) {
            const pulse = Math.sin(time * 3) * 0.1 + 1;
            cloudRef.current.scale.setScalar(pulse);
            
            cloudRef.current.children.forEach((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.emissiveIntensity = 0.3 + Math.sin(time * 3) * 0.2;
                }
            });
        } else {
            cloudRef.current.scale.setScalar(1);
        }

        // 4. 토큰 생성 및 이동
        if (cycleTime >= tokenGenerateStart && cycleTime < tokenGenerateEnd) {
            const progress = (cycleTime - tokenGenerateStart) / (tokenGenerateEnd - tokenGenerateStart);
            tokenRef.current.scale.setScalar(progress * 0.3);
            tokenRef.current.position.set(2, 0.5, 0);
            tokenRef.current.rotation.y = progress * Math.PI * 4;
            
            if (tokenRef.current.material instanceof THREE.MeshStandardMaterial) {
                tokenRef.current.material.emissiveIntensity = 0.8;
            }
        } else if (cycleTime >= tokenReturnStart && cycleTime < tokenReturnEnd) {
            const progress = (cycleTime - tokenReturnStart) / (tokenReturnEnd - tokenReturnStart);
            const eased = 1 - Math.pow(1 - progress, 3);
            
            tokenRef.current.position.x = 2 - eased * 2;
            tokenRef.current.scale.setScalar(0.3);
            tokenRef.current.rotation.y += 0.1;
            
            if (tokenRef.current.material instanceof THREE.MeshStandardMaterial) {
                tokenRef.current.material.emissiveIntensity = 0.5;
            }
        } else if (cycleTime >= tokenReturnEnd && cycleTime < resetStart) {
            tokenRef.current.position.set(0, 0, 0);
            tokenRef.current.scale.setScalar(0.3);
            
            if (tokenRef.current.material instanceof THREE.MeshStandardMaterial) {
                tokenRef.current.material.emissiveIntensity = 0.8;
            }
        } else {
            tokenRef.current.scale.setScalar(0);
        }

        // 5. 파티클 회전
        if (particlesRef.current) {
            particlesRef.current.rotation.y = time * 0.3;
            particlesRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
        }

        // 6. 리셋
        if (cycleTime >= resetStart) {
            const fadeProgress = (cycleTime - resetStart) / (cycleDuration - resetStart);
            groupRef.current.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.opacity = 1 - fadeProgress;
                }
            });
        } else {
            groupRef.current.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.opacity = 1;
                }
            });
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* 사용자 아이콘 */}
            <mesh ref={userIconRef} position={[-2, 0, 0]}>
                {/* 머리 */}
                <group>
                    <mesh position={[0, 0.3, 0]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial 
                            color="#06b6d4" 
                            emissive="#06b6d4"
                            emissiveIntensity={0.3}
                            transparent
                        />
                    </mesh>
                    {/* 몸 */}
                    <mesh position={[0, -0.1, 0]}>
                        <cylinderGeometry args={[0.15, 0.25, 0.4, 16]} />
                        <meshStandardMaterial 
                            color="#06b6d4" 
                            emissive="#06b6d4"
                            emissiveIntensity={0.3}
                            transparent
                        />
                    </mesh>
                </group>
            </mesh>

            {/* 자물쇠 */}
            <group ref={lockRef} position={[0, 0, 0]}>
                {/* 고리 (Shackle) */}
                <mesh position={[0, 0.3, 0]}>
                    <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI]} />
                    <meshStandardMaterial 
                        color="#fbbf24" 
                        emissive="#fbbf24"
                        emissiveIntensity={0.3}
                        metalness={0.8}
                        roughness={0.2}
                        transparent
                    />
                </mesh>
                
                {/* 몸체 */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.4, 0.3, 0.2]} />
                    <meshStandardMaterial 
                        color="#fbbf24" 
                        emissive="#fbbf24"
                        emissiveIntensity={0.3}
                        metalness={0.8}
                        roughness={0.2}
                        transparent
                    />
                </mesh>
                
                {/* 열쇠 구멍 */}
                <mesh position={[0, 0, 0.11]}>
                    <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
                    <meshStandardMaterial color="#000000" />
                </mesh>
            </group>

            {/* PlayFab 클라우드 */}
            <group ref={cloudRef} position={[2, 0.5, 0]}>
                {/* 클라우드 메인 */}
                <mesh>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial 
                        color="#a855f7" 
                        emissive="#a855f7"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
                <mesh position={[-0.2, 0, 0]}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial 
                        color="#a855f7" 
                        emissive="#a855f7"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
                <mesh position={[0.2, 0, 0]}>
                    <sphereGeometry args={[0.2, 16, 16]} />
                    <meshStandardMaterial 
                        color="#a855f7" 
                        emissive="#a855f7"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            </group>

            {/* 토큰 */}
            <mesh ref={tokenRef} position={[0, 0, 0]} scale={0}>
                <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
                <meshStandardMaterial 
                    color="#22d3ee" 
                    emissive="#22d3ee"
                    emissiveIntensity={0.5}
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                />
            </mesh>

            {/* 연결선 (사용자 → 클라우드) */}
            <ConnectionLine 
                start={[-2, 0, 0]} 
                end={[2, 0.5, 0]} 
                color="#06b6d4"
            />

            {/* 파티클 */}
            <points ref={particlesRef} geometry={particleGeometry}>
                <pointsMaterial 
                    size={0.05} 
                    color="#22d3ee" 
                    transparent 
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>
        </group>
    );
}

// 연결선 컴포넌트
function ConnectionLine({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) {
    const lineRef = useRef<THREE.Line>(null);
    
    const { geometry, material } = useMemo(() => {
        const points = [
            new THREE.Vector3(...start),
            new THREE.Vector3(...end)
        ];
        const geom = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 });
        return { geometry: geom, material: mat };
    }, [start, end, color]);
    
    return <primitive object={new THREE.Line(geometry, material)} />;
}