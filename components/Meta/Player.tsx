"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { useKeyboard } from "./Keyboard";
import Character from "./Character";

type AnimationState = "Idle" | "Walk" | "FastRun" | "Jump";

export default function Player({ onMove }: { onMove: (pos: [number, number, number]) => void }) {
  const keys = useKeyboard();
  const ref = useRef<Group>(null);
  const { camera } = useThree();
  const position = useRef(new Vector3(0, 2, 0));
  const velocityY = useRef(0);
  const [animation, setAnimation] = useState<AnimationState>("Idle");

  useFrame(() => {
    const forward = new Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new Vector3();
    right.crossVectors(forward, new Vector3(0, 1, 0)).normalize();

    let speed = keys.current["shift"] ? 0.2 : 0.1;
    const move = new Vector3();

    if (keys.current["w"]) move.add(forward);
    if (keys.current["s"]) move.sub(forward);
    if (keys.current["a"]) move.sub(right);
    if (keys.current["d"]) move.add(right);

    if (move.length() > 0) {
      move.normalize().multiplyScalar(speed);
      position.current.add(move);
      setAnimation(keys.current["shift"] ? "FastRun" : "Walk");

      // 캐릭터가 이동 방향을 바라보게 회전
      if (ref.current) {
        const angle = Math.atan2(move.x, move.z);
        ref.current.rotation.y = angle;
      }
    } else {
      setAnimation("Idle");
    }

    // 중력
    velocityY.current -= 0.01;
    position.current.y += velocityY.current;
    if (position.current.y < 2) {
      position.current.y = 2;
      velocityY.current = 0;
    }

    if (keys.current[" "]) {
      velocityY.current = 0.2;
      setAnimation("Jump");
    }

    ref.current!.position.copy(position.current);
    onMove([position.current.x, position.current.y, position.current.z]);
  });

  return (
    <group ref={ref}>
      <Character animation={animation} />
    </group>
  );
}
