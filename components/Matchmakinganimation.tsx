'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MatchmakingAnimationProps {
    position?: [number, number, number];
}

export function MatchmakingAnimation({ position = [0, 0, 0] }: MatchmakingAnimationProps) {
    const groupRef = useRef<THREE.Group>(null);
    const player1Ref = useRef<THREE.Mesh>(null);
    const player2Ref = useRef<THREE.Mesh>(null);
    const player3Ref = useRef<THREE.Mesh>(null);
    const player4Ref = useRef<THREE.Mesh>(null);
    const centerGlowRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    // 플레이어 위치 계산 (원형 배치)
    const playerPositions = useMemo(() => {
        const radius = 1.2;
        return [
            [Math.cos(0) * radius, Math.sin(0) * radius, 0],
            [Math.cos(Math.PI / 2) * radius, Math.sin(Math.PI / 2) * radius, 0],
            [Math.cos(Math.PI) * radius, Math.sin(Math.PI) * radius, 0],
            [Math.cos(3 * Math.PI / 2) * radius, Math.sin(3 * Math.PI / 2) * radius, 0],
        ] as [number, number, number][];
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        
        // 애니메이션 타이밍
        const cycleDuration = 8; // 전체 사이클 8초
        const cycleTime = time % cycleDuration;
        
        // 각 플레이어 입장 타이밍
        const player1EnterTime = 0.5;
        const player2EnterTime = 1.5;
        const player3EnterTime = 2.5;
        const player4EnterTime = 3.5;
        const matchFoundTime = 4.5;
        const resetTime = 6.5;

        const playerRefs = [player1Ref, player2Ref, player3Ref, player4Ref];
        const enterTimes = [player1EnterTime, player2EnterTime, player3EnterTime, player4EnterTime];

        // 각 플레이어 애니메이션
        playerRefs.forEach((ref, index) => {
            if (!ref.current) return;

            const enterTime = enterTimes[index];
            const targetPos = playerPositions[index];

            if (cycleTime < enterTime) {
                // 아직 입장 전 - 화면 밖에서 대기
                ref.current.position.set(
                    targetPos[0] * 2.5,
                    targetPos[1] * 2.5,
                    -3
                );
                ref.current.scale.setScalar(0.01);
            } else if (cycleTime >= enterTime && cycleTime < enterTime + 0.8) {
                // 입장 애니메이션
                const progress = (cycleTime - enterTime) / 0.8;
                const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOut

                ref.current.position.set(
                    THREE.MathUtils.lerp(targetPos[0] * 2.5, targetPos[0], easeProgress),
                    THREE.MathUtils.lerp(targetPos[1] * 2.5, targetPos[1], easeProgress),
                    THREE.MathUtils.lerp(-3, 0, easeProgress)
                );
                ref.current.scale.setScalar(THREE.MathUtils.lerp(0.01, 1, easeProgress));
            } else if (cycleTime >= matchFoundTime && cycleTime < resetTime) {
                // 매칭 완료 - 중앙으로 이동
                const progress = Math.min((cycleTime - matchFoundTime) / 0.8, 1);
                const easeProgress = progress < 0.5 
                    ? 2 * progress * progress 
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                ref.current.position.set(
                    THREE.MathUtils.lerp(targetPos[0], 0, easeProgress),
                    THREE.MathUtils.lerp(targetPos[1], 0, easeProgress),
                    0
                );
                
                // 크기 축소
                ref.current.scale.setScalar(THREE.MathUtils.lerp(1, 0.3, easeProgress));
            } else if (cycleTime >= resetTime) {
                // 리셋 - 화면 밖으로
                ref.current.position.set(
                    targetPos[0] * 2.5,
                    targetPos[1] * 2.5,
                    -3
                );
                ref.current.scale.setScalar(0.01);
            } else {
                // 대기 중
                ref.current.position.set(targetPos[0], targetPos[1], 0);
                ref.current.scale.setScalar(1);
                
                // 약간의 떠다니는 효과
                ref.current.position.y += Math.sin(time * 2 + index) * 0.05;
            }

            // 회전 애니메이션
            if (cycleTime >= enterTime && cycleTime < resetTime) {
                ref.current.rotation.y = time * 2;
            }
        });

        // 중앙 글로우 효과
        if (centerGlowRef.current && !Array.isArray(centerGlowRef.current.material)) {
            if (cycleTime >= matchFoundTime && cycleTime < resetTime) {
                const progress = (cycleTime - matchFoundTime) / (resetTime - matchFoundTime);
                centerGlowRef.current.scale.setScalar(1 + Math.sin(progress * Math.PI * 4) * 0.5);
                (centerGlowRef.current.material as THREE.MeshBasicMaterial).opacity = Math.sin(progress * Math.PI) * 0.8;
            } else {
                centerGlowRef.current.scale.setScalar(0.01);
                (centerGlowRef.current.material as THREE.MeshBasicMaterial).opacity = 0;
            }
        }

        // 링 회전
        if (ringRef.current && !Array.isArray(ringRef.current.material)) {
            ringRef.current.rotation.z = time * 0.5;
            
            // 매칭 완료시 링 확대
            if (cycleTime >= matchFoundTime && cycleTime < resetTime) {
                const progress = (cycleTime - matchFoundTime) / (resetTime - matchFoundTime);
                ringRef.current.scale.setScalar(1 + progress * 0.5);
                (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.6 * (1 - progress);
            } else {
                ringRef.current.scale.setScalar(1);
                (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3;
            }
        }

        // 전체 그룹 회전
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
        }
    });

    // 플레이어 모양 생성
    const playerGeometry = useMemo(() => {
        // 간단한 캡슐 형태 (머리 + 몸)
        const group = new THREE.Group();
        
        // 머리
        const head = new THREE.SphereGeometry(0.15, 16, 16);
        const headMesh = new THREE.Mesh(head);
        headMesh.position.y = 0.2;
        
        // 몸
        const body = new THREE.CylinderGeometry(0.1, 0.12, 0.3, 16);
        const bodyMesh = new THREE.Mesh(body);
        bodyMesh.position.y = 0;
        
        return { head, body };
    }, []);

    return (
        <group ref={groupRef} position={position}>
            {/* 중앙 링 */}
            <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.02, 16, 64]} />
                <meshBasicMaterial 
                    color="#00ff00" 
                    transparent 
                    opacity={0.3}
                />
            </mesh>

            {/* 중앙 글로우 */}
            <mesh ref={centerGlowRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial 
                    color="#00ff00" 
                    transparent 
                    opacity={0}
                />
            </mesh>

            {/* 플레이어 1 */}
            <group ref={player1Ref}>
                {/* 머리 테두리 */}
                <mesh geometry={playerGeometry.head} position={[0, 0.2, 0]}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                {/* 머리 */}
                <mesh position={[0, 0.2, 0]}>
                    <sphereGeometry args={[0.14, 16, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.5}
                    />
                </mesh>
                
                {/* 몸 테두리 */}
                <mesh geometry={playerGeometry.body}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                {/* 몸 */}
                <mesh>
                    <cylinderGeometry args={[0.09, 0.11, 0.28, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </group>

            {/* 플레이어 2 */}
            <group ref={player2Ref}>
                <mesh geometry={playerGeometry.head} position={[0, 0.2, 0]}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                <mesh position={[0, 0.2, 0]}>
                    <sphereGeometry args={[0.14, 16, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.5}
                    />
                </mesh>
                <mesh geometry={playerGeometry.body}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.09, 0.11, 0.28, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </group>

            {/* 플레이어 3 */}
            <group ref={player3Ref}>
                <mesh geometry={playerGeometry.head} position={[0, 0.2, 0]}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                <mesh position={[0, 0.2, 0]}>
                    <sphereGeometry args={[0.14, 16, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.5}
                    />
                </mesh>
                <mesh geometry={playerGeometry.body}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.09, 0.11, 0.28, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </group>

            {/* 플레이어 4 */}
            <group ref={player4Ref}>
                <mesh geometry={playerGeometry.head} position={[0, 0.2, 0]}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                <mesh position={[0, 0.2, 0]}>
                    <sphereGeometry args={[0.14, 16, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.5}
                    />
                </mesh>
                <mesh geometry={playerGeometry.body}>
                    <meshBasicMaterial color="#000000" side={THREE.BackSide} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.09, 0.11, 0.28, 16]} />
                    <meshStandardMaterial 
                        color="#00ff00" 
                        emissive="#00ff00" 
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </group>

            {/* 연결선들 */}
            {[0, 1, 2, 3].map((i) => {
                const pos = playerPositions[i];
                return (
                    <mesh key={i} position={[pos[0] / 2, pos[1] / 2, 0]}>
                        <boxGeometry args={[0.02, 0.6, 0.02]} />
                        <meshBasicMaterial 
                            color="#00ff00" 
                            transparent 
                            opacity={0.3}
                        />
                    </mesh>
                );
            })}

            {/* 중앙 허브 */}
            <mesh>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial 
                    color="#00ff00" 
                    emissive="#00ff00" 
                    emissiveIntensity={0.4}
                    wireframe
                />
            </mesh>

            {/* 파티클 효과 */}
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 1.8;
                return (
                    <mesh 
                        key={i}
                        position={[
                            Math.cos(angle) * radius,
                            Math.sin(angle) * radius,
                            0
                        ]}
                    >
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshBasicMaterial 
                            color="#00ff00" 
                            transparent 
                            opacity={0.4}
                        />
                    </mesh>
                );
            })}
        </group>
    );
}