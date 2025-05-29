"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

type AnimationState = "Idle" | "Walk" | "FastRun" | "Jump";

export default function Character({
  animation,
}: {
  animation: AnimationState;
}) {
  const { scene, animations } = useGLTF("/models/robot.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    console.log("Available animations:", names);

    // 애니메이션 이름 매칭
    const actionMap: { [key in AnimationState]?: string } = {
      Idle: names.find((n) => n.toLowerCase().includes("idle")),
      Walk: names.find((n) => n.toLowerCase().includes("walk")),
      FastRun:
        names.find((n) => n.toLowerCase().includes("fastrun")) ||
        names.find((n) => n.toLowerCase().includes("run")),
      Jump: names.find((n) => n.toLowerCase().includes("jump")),
    };

    // 현재 실행할 액션
    const currentActionName = actionMap[animation];
    const currentAction = currentActionName ? actions[currentActionName] : null;

    // 모든 액션 정지
    Object.values(actions).forEach((action) => action?.stop());

    // 현재 액션 실행
    currentAction?.reset().fadeIn(0.2).play();

    return () => {
      currentAction?.fadeOut(0.2);
    };
  }, [animation, actions, names]);

  return <primitive object={scene} scale={1} castShadow />;
}
