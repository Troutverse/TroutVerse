// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Gamepad2, Code2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import { MeshSliceAnimation } from "@/components/MeshSliceAnimation";
import { CapMeshAnimation } from "@/components/CapMeshAnimation";
import { MatchmakingAnimation } from "@/components/Matchmakinganimation";
import { PBDSoftBodyAnimation } from "@/components/Pbdsoftbodyanimation";
import { LoginServiceAnimation } from "@/components/Loginserviceanimation";
import { AllocationServiceAnimation } from "@/components/Allocationserviceanimation";
import { GPSConversionAnimation } from "@/components/GPSConversionAnimation";

// Projects
const Projects = [
  {
    title: "StupidGuys",
    slug: "stupid-guys",
    date: "2025.12 - 2026.01",
    description: "Fall Guys 스타일의 멀티플레이어 파티 게임",
    tech: ["Unity", "VR", "Netcode", "Multiplayer"],
    image: "/images/stupid-guys-thumbnail.png",
  },
  {
    title: "VR Surgery Simulator",
    slug: "vr-surgery-simulator",
    date: "2025.11 - 2025.12",
    description:
      "실시간 메쉬 절단과 소프트바디 물리를 활용한 VR 수술 시뮬레이션",
    tech: ["Unity", "VR", "Physics", "Mesh"],
    image: "/images/vr-surgery-thumbnail.png",
  },
  {
    title: "PokemonGO",
    slug: "pokemongo",
    date: "2025.11 - 2025.12",
    description: "GPS 기반 위치 추적 AR 몬스터 수집 게임",
    tech: ["Unity", "GPS", "Google Maps API", "VContainer"],
    image: "/images/PokemonGo.png",
  },
  {
    title: "Beat Saber",
    slug: "beat-saber",
    date: "2025.10 - 2025.11",
    description: "VR 리듬 액션 게임 (비트세이버 모작)",
    tech: ["Unity", "VR", "Rhythm", "Audio"],
    image: "/images/beat-saber-thumbnail.png",
  },
];

const technicalProjects = [
  {
    title: "Mesh Slice",
    slug: "mesh-slicing",
    date: "2025.12",
    description: "오브젝트의 자연스러운 메쉬 절단 알고리즘",
    tech: ["Unity", "C#", "Mesh Algorithm"],
    color: "from-cyan-500 to-blue-500",
    Animation: MeshSliceAnimation,
  },
  {
    title: "GPS Coordinate Conversion",
    slug: "gps-coordinate-conversion",
    date: "2025.12",
    description: "실제 GPS 좌표를 Unity 가상 세계로 변환하는 수학",
    tech: ["Unity", "GPS", "Mercator Projection"],
    color: "from-green-500 to-teal-500",
    Animation: GPSConversionAnimation,
  },
  {
    title: "PBD Soft Body",
    slug: "pbd-softbody",
    date: "2025.11",
    description: "실시간 소프트바디 물리 시뮬레이션 엔진",
    tech: ["Unity", "Physics", "PBD"],
    color: "from-orange-500 to-red-500",
    Animation: PBDSoftBodyAnimation,
  },
  {
    title: "Matchmaking System",
    slug: "matchmaking-system",
    date: "2026.01",
    description: "SignalR 기반 실시간 4인 매칭 시스템",
    tech: ["SignalR", "C#", "Real-time"],
    color: "from-purple-500 to-pink-500",
    Animation: MatchmakingAnimation,
  },
  {
    title: "Allocation Service",
    slug: "allocation-service",
    date: "2026.01",
    description: "PlayFab Multiplayer Server 자동 할당 및 관리",
    tech: ["PlayFab", "Server", "Cloud"],
    color: "from-yellow-500 to-orange-500",
    Animation: AllocationServiceAnimation,
  },
  {
    title: "Login Service",
    slug: "login-service",
    date: "2026.01",
    description: "JWT 기반 사용자 인증 및 세션 관리 시스템",
    tech: ["REST API", "Auth", "PostgreSQL"],
    color: "from-indigo-500 to-purple-500",
    Animation: LoginServiceAnimation,
  },
  {
    title: "Mesh Creation",
    slug: "mesh-creation",
    date: "2025.12",
    description: "절단된 메쉬의 Cap 생성 알고리즘",
    tech: ["Unity", "C#", "Procedural"],
    color: "from-green-500 to-emerald-500",
    Animation: CapMeshAnimation,
  },
];

// 프로젝트 카드 컴포넌트
function ProjectCard({ project, isPlayVideo = false }: any) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* 이미지 또는 3D 애니메이션 */}
        <div className="relative h-48 bg-black overflow-hidden">
          {isPlayVideo ? (
            // PlayVideo는 이미지 사용
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            // Technical Components는 기존 3D 애니메이션 유지
            <>
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                className="w-full h-full"
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <project.Animation position={[0, 0, 0]} />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
              </Canvas>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 pointer-events-none`}
              />
            </>
          )}
        </div>

        {/* Content - 기존과 동일 */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-500 font-mono whitespace-nowrap ml-2">
              {project.date}
            </span>
          </div>

          <p className="text-gray-600 mb-4 flex-1 leading-relaxed text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
            상세보기
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - 기존과 동일 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl ring-4 ring-white">
            <Image
              src="/Profile.png"
              alt="Trout Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Trout
              </h1>
              <div className="text-xl mt-3">(박근우)</div>
              <span className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg font-semibold shadow-md mt-1">
                🏆 Unity Certified
              </span>
            </div>

            <p className="text-2xl text-gray-700 mb-4 font-medium">
              Unity VR Developer
            </p>

            <div className="text-gray-600 space-y-2 mb-6">
              <p className="text-lg">Seoul, South Korea 🇰🇷</p>
              <div className="flex items-center gap-2 text-lg">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:troutverse@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  troutverse@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Troutverse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Unity",
              "C#",
              "Netcode",
              "PlayFab",
              "SignalR",
              "PostgreSQL",
              "React",
              "Next.js",
              "TypeScript",
              "WebGL",
              "Python",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <Gamepad2 className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isPlayVideo={true}
            />
          ))}
        </div>
      </section>

      {/* Technical Components Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Technical Components
            </h2>
            <p className="text-gray-600 mt-1">
              VR 콘텐츠 개발을 위한 핵심 기술 컴포넌트
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © 2026 Trout. Built with Next.js & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}