"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ImageTo3DHumanViewer() {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [results, setResults] = useState<{ label: string; probability: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      const loader = new THREE.TextureLoader();
      loader.load(url, (loadedTexture) => {
        setTexture(loadedTexture);
      });

      setLoading(true);
      setError(null);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("http://localhost:8000/predict", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error(`서버 응답 오류: ${res.status}`);
        }

        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error("Prediction error:", err);
        setError("AI 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        2D Image to 3D Human Model Viewer
      </h1>

      <div className="mb-6 flex justify-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="p-2 border rounded"
        />
      </div>

      <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-6">
        <Canvas camera={{ position: [0, 7, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom={true} />

          {texture && <HumanModel texture={texture} />}
        </Canvas>
      </div>

      {!texture && (
        <p className="mt-4 text-center text-gray-500">
          이미지를 업로드하면 사람형 3D 모델에 맵핑됩니다.
        </p>
      )}

      {loading && <p className="mt-4 text-center text-gray-500">예측 중...</p>}

      {error && (
        <p className="mt-4 text-center text-red-500">{error}</p>
      )}

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Prediction Results</h2>
          <div className="space-y-4">
            {results.map((item, idx) => (
              <div key={idx} className="">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-gray-700">{(item.probability * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-4">
                  <div
                    className="bg-blue-500 h-4 rounded"
                    style={{ width: `${(item.probability * 100).toFixed(1)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HumanModel({ texture }: { texture: THREE.Texture | null }) {
  const { scene } = useGLTF("/models/robot.glb");

  if (texture) {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            const material = mat as THREE.MeshStandardMaterial;
            material.map = texture;
            material.needsUpdate = true;
          });
        } else {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.map = texture;
          material.needsUpdate = true;
        }
      }
    });
  }

  return <primitive object={scene} scale={1.5} />;
}

