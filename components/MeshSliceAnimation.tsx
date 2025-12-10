'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SlicedSphereProps {
    position?: [number, number, number];
}

export function MeshSliceAnimation({ position = [0, 0, 0] }: SlicedSphereProps) {
    const upperHalfRef = useRef<THREE.Mesh>(null);
    const lowerHalfRef = useRef<THREE.Mesh>(null);
    const bladeRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    const { upperGeometry, lowerGeometry } = useMemo(() => {
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const positions = sphereGeometry.attributes.position;

        const upperPositions: number[] = [];
        const upperIndices: number[] = [];
        const vertexMap = new Map<number, number>();

        for (let i = 0; i < positions.count; i++) {
            const z = positions.getZ(i);
            if (z >= -0.05) {
                const newIndex = upperPositions.length / 3;
                vertexMap.set(i, newIndex);
                upperPositions.push(
                    positions.getX(i),
                    positions.getY(i),
                    positions.getZ(i)
                );
            }
        }

        const index = sphereGeometry.index;
        if (index) {
            for (let i = 0; i < index.count; i += 3) {
                const a = index.getX(i);
                const b = index.getX(i + 1);
                const c = index.getX(i + 2);

                if (vertexMap.has(a) && vertexMap.has(b) && vertexMap.has(c)) {
                    upperIndices.push(
                        vertexMap.get(a)!,
                        vertexMap.get(b)!,
                        vertexMap.get(c)!
                    );
                }
            }
        }

        const upperGeo = new THREE.BufferGeometry();
        upperGeo.setAttribute('position', new THREE.Float32BufferAttribute(upperPositions, 3));
        upperGeo.setIndex(upperIndices);
        upperGeo.computeVertexNormals();

        // 뒤쪽 반구 (z < 0)
        const lowerPositions: number[] = [];
        const lowerIndices: number[] = [];
        const lowerVertexMap = new Map<number, number>();

        for (let i = 0; i < positions.count; i++) {
            const z = positions.getZ(i);
            if (z <= 0.05) {
                const newIndex = lowerPositions.length / 3;
                lowerVertexMap.set(i, newIndex);
                lowerPositions.push(
                    positions.getX(i),
                    positions.getY(i),
                    positions.getZ(i)
                );
            }
        }

        if (index) {
            for (let i = 0; i < index.count; i += 3) {
                const a = index.getX(i);
                const b = index.getX(i + 1);
                const c = index.getX(i + 2);

                if (lowerVertexMap.has(a) && lowerVertexMap.has(b) && lowerVertexMap.has(c)) {
                    lowerIndices.push(
                        lowerVertexMap.get(a)!,
                        lowerVertexMap.get(b)!,
                        lowerVertexMap.get(c)!
                    );
                }
            }
        }

        const lowerGeo = new THREE.BufferGeometry();
        lowerGeo.setAttribute('position', new THREE.Float32BufferAttribute(lowerPositions, 3));
        lowerGeo.setIndex(lowerIndices);
        lowerGeo.computeVertexNormals();

        return { upperGeometry: upperGeo, lowerGeometry: lowerGeo };
    }, []);

    // 애니메이션
    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // 타이밍 설정
        const cycleDuration = 4; // 전체 사이클 4초
        const swingDuration = 0.8; // 휘두르는 시간
        const waitDuration = 2.2; // 대기 시간

        const cycleTime = time % cycleDuration;

        // 칼 휘두르기 애니메이션
        if (bladeRef.current) {
            if (cycleTime < swingDuration) {
                // 칼을 휘두르는 구간
                const progress = cycleTime / swingDuration;

                // 부드러운 easing
                const easeProgress = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                // 회전 애니메이션: 오른쪽 위에서 왼쪽 아래로 호를 그림
                const startAngle = Math.PI / 3; // 오른쪽 위
                const endAngle = Math.PI / 1.5; // 왼쪽 아래
                const currentAngle = startAngle + (endAngle - startAngle) * easeProgress;

                // 칼의 회전
                bladeRef.current.rotation.z = currentAngle;

                // 칼의 위치도 호를 그리며 이동
                const radius = 1;
                bladeRef.current.position.x = Math.sin(currentAngle) * radius;
                bladeRef.current.position.y = Math.cos(currentAngle) * radius;

            } else if (cycleTime >= swingDuration && cycleTime < swingDuration + waitDuration) {
                // 대기 - 왼쪽 아래
                bladeRef.current.rotation.z = Math.PI / 1.5;
                const radius = 1;
                bladeRef.current.position.x = Math.sin(Math.PI / 1.5) * radius;
                bladeRef.current.position.y = Math.cos(Math.PI / 1.5) * radius;
            } else {
                // 순간이동 - 오른쪽 위로
                bladeRef.current.rotation.z = Math.PI / 3;
                const radius = 1;
                bladeRef.current.position.x = Math.sin(Math.PI / 3) * radius;
                bladeRef.current.position.y = Math.cos(Math.PI / 3) * radius;
            }
        }

        if (upperHalfRef.current && lowerHalfRef.current && bladeRef.current) {
            // 칼날이 다 이동한 후 (대기 구간)에 분리
            if (cycleTime >= swingDuration && cycleTime < swingDuration + waitDuration) {
                // 대기 구간에서 분리된 상태 유지
                upperHalfRef.current.position.z = 0.8;
                lowerHalfRef.current.position.z = -0.8;

                upperHalfRef.current.position.y = 0.2;
                lowerHalfRef.current.position.y = -0.2;

                upperHalfRef.current.rotation.x = 0.15;
                lowerHalfRef.current.rotation.x = -0.15;
            } else {
                // 나머지 시간에는 원위치
                upperHalfRef.current.position.z = 0;
                lowerHalfRef.current.position.z = 0;
                upperHalfRef.current.position.y = 0;
                lowerHalfRef.current.position.y = 0;
                upperHalfRef.current.rotation.x = 0;
                lowerHalfRef.current.rotation.x = 0;
            }
        }
    });

    return (
        <group ref={groupRef} position={position}>
            {/* 앞쪽 반구 */}
            <group ref={upperHalfRef}>
                {/* 반구 테두리 */}
                <mesh geometry={upperGeometry}>
                    <meshBasicMaterial
                        color="#404040"
                        side={THREE.BackSide}
                    />
                </mesh>
                {/* 반구 본체 */}
                <mesh geometry={upperGeometry}>
                    <meshStandardMaterial
                        color="#00ffff"
                        wireframe={true}
                        emissive="#00ffff"
                        emissiveIntensity={0.4}
                    />
                </mesh>
            </group>

            {/* 뒤쪽 반구 */}
            <group ref={lowerHalfRef}>
                {/* 반구 테두리 */}
                <mesh geometry={lowerGeometry}>
                    <meshBasicMaterial
                        color="#404040"
                        side={THREE.BackSide}
                    />
                </mesh>
                {/* 반구 본체 */}
                <mesh geometry={lowerGeometry}>
                    <meshStandardMaterial
                        color="#00ffff"
                        wireframe={true}
                        emissive="#00ffff"
                        emissiveIntensity={0.4}
                    />
                </mesh>
            </group>

            {/* 긴 큐브 막대기 */}
            <group ref={bladeRef} position={[0, 2.5, 0]} rotation={[0, 0, -Math.PI / 3]}>
                {/* 막대기 테두리 (Outline) - 먼저 그려져서 뒤에 보임 */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.12, 2.54, 0.12]} />
                    <meshBasicMaterial
                        color="#000000"
                        side={THREE.BackSide}
                    />
                </mesh>

                {/* 막대기 본체 */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.08, 2.5, 0.08]} />
                    <meshStandardMaterial
                        color="#c0c0c0"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#ffffff"
                        emissiveIntensity={0.6}
                    />
                </mesh>
            </group>

            {/* 슬라이스 라인 효과 */}
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[0.02, 2.5]} />
                <meshBasicMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.4}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}