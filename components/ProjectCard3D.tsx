// components/ProjectCard3D.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { MeshSliceAnimation } from './MeshSliceAnimation';
import { CapMeshAnimation } from './CapMeshAnimation';
import Link from 'next/link';

interface ProjectCard3DProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  type: '3d-animation' | 'standard';
}

export function ProjectCard3D({ title, description, date, slug, type }: ProjectCard3DProps) {
  if (type === '3d-animation') {
    // slug에 따라 다른 애니메이션 선택
    const AnimationComponent = slug === 'mesh-creation' ? CapMeshAnimation : MeshSliceAnimation;
    
    return (
      <Link href={`/projects/${slug}`} className="group">
        <div className="relative h-[400px] overflow-hidden rounded-lg border-2 border-cyan-500/50 bg-black shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] hover:scale-105">
          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <Canvas>
              <PerspectiveCamera makeDefault position={[3, 3, 3]} rotation={[-0.6, 0.6, 0.4]} />
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 10, 5]} intensity={1.2} color="#00ffff" />
              <pointLight position={[-5, 5, -5]} intensity={0.6} color="#ff00ff" />
              <spotLight position={[0, 8, 0]} intensity={1.5} color="#ffffff" angle={0.6} />
              
              <AnimationComponent position={[0.5, 1.2, 0]} />
            </Canvas>
          </div>
          
          {/* 그리드 오버레이 */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          
          {/* 텍스트 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
            <div className="relative">
              {/* 글리치 효과 */}
              <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-mono relative">
                <span className="relative z-10">{title}</span>
                <span className="absolute inset-0 text-magenta-500 opacity-50 animate-pulse" style={{ clipPath: 'inset(0 0 50% 0)' }}>
                  {title}
                </span>
              </h2>
              
              <p className="text-xs text-cyan-300/70 mb-2 font-mono tracking-wider">
                {'>'} {date}
              </p>
              
              <p className="text-sm text-gray-300 line-clamp-2 font-mono">
                {description}
              </p>
              
              {/* 접속 버튼 */}
              <div className="mt-4 flex items-center text-cyan-400 font-mono text-sm group-hover:text-cyan-300 transition-colors">
                <span className="mr-2">ACCESS_PROJECT</span>
                <span className="animate-pulse">{'>>>'}</span>
              </div>
            </div>
          </div>
          
          {/* 코너 장식 */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
        </div>
      </Link>
    );
  }
  
  // 일반 카드 (다른 프로젝트용)
  return (
    <Link href={`/projects/${slug}`} className="group">
      <div className="relative h-[400px] overflow-hidden rounded-lg border border-cyan-500/30 bg-gray-900/50 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        <div className="p-6 flex flex-col h-full justify-end">
          <h2 className="text-xl font-bold text-cyan-400 mb-2 font-mono">
            {title}
          </h2>
          <p className="text-xs text-cyan-300/70 mb-2 font-mono">
            {'>'} {date}
          </p>
          <p className="text-sm text-gray-300 line-clamp-3 font-mono">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}