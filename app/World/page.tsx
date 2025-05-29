"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Group, Vector3 } from "three";

function RobotAvatar({ walking }: { walking: boolean }) {
  const { scene, animations } = useGLTF('/models/robot.glb');
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    console.log('Available animations:', names);
    const walkAction = actions[names.find(n => n.toLowerCase().includes('walk')) || ''];
    const idleAction = actions[names.find(n => n.toLowerCase().includes('idle')) || ''];

    if (walking) {
      idleAction?.stop();
      walkAction?.reset().fadeIn(0.2).play();
    } else {
      walkAction?.stop();
      idleAction?.reset().fadeIn(0.2).play();
    }

    return () => {
      walkAction?.fadeOut(0.2);
      idleAction?.fadeOut(0.2);
    };
  }, [walking, actions, names]);

  return <primitive object={scene} scale={1} castShadow />;
}

function Player({ onMove }: { onMove: (pos: [number, number, number]) => void }) {
  const ref = useRef<Group>(null);
  const { camera } = useThree();
  const positionRef = useRef<[number, number, number]>([0, 0.5, 0]);
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const dir = new Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    const right = new Vector3();
    right.crossVectors(dir, new Vector3(0, 1, 0)).normalize();

    let [x, y, z] = positionRef.current;
    let moved = false;
    let moveDirection = new Vector3(0, 0, 0);

    if (keysPressed.current["w"]) {
      moveDirection.add(dir);
      moved = true;
    }
    if (keysPressed.current["s"]) {
      moveDirection.sub(dir);
      moved = true;
    }
    if (keysPressed.current["a"]) {
      moveDirection.sub(right);
      moved = true;
    }
    if (keysPressed.current["d"]) {
      moveDirection.add(right);
      moved = true;
    }

    if (moved) {
      moveDirection.normalize().multiplyScalar(0.1);
      x += moveDirection.x;
      z += moveDirection.z;

      if (ref.current) {
        const angle = Math.atan2(moveDirection.x, moveDirection.z);
        ref.current.rotation.y = angle;
      }
    }

    positionRef.current = [x, y, z];
    onMove([x, y, z]);

    if (ref.current) {
      ref.current.position.set(x, y, z);
    }
  });

  const isWalking = keysPressed.current["w"] || keysPressed.current["a"] || keysPressed.current["s"] || keysPressed.current["d"];

  return (
    <group ref={ref}>
      <RobotAvatar walking={isWalking} />
    </group>
  );
}

export default function MetaverseScene() {
  const [playerPosition, setPlayerPosition] = useState<[number, number, number]>([0, 0.5, 0]);
  const controlsRef = useRef<any>(null);

  return (
    <div className="w-[80vh] h-[80vh] mx-auto border-4 border-black">
      <Canvas camera={{ position: [0, 5, 10] }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[5, 10, 7]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="lightgreen" />
        </mesh>

        {/* Player */}
        <Player onMove={setPlayerPosition} />

        <OrbitControls ref={controlsRef} target={[...playerPosition]} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/robot.glb');
