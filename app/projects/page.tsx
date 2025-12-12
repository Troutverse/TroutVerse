'use client';

import { ProjectCard3D } from '@/components/ProjectCard3D';
import { RetroBackgrounds } from '@/components/Retrobackgrounds';

export default function ProjectsPage() {
  // Mesh Slice 프로젝트를 찾거나 새로 생성
  const meshSliceProject = {
    title: 'Mesh Slice',
    slug: 'mesh-slicing',
    date: '2025.12.10',
    description: '오브젝트의 자연스러운 메쉬 절단 유니티 프로젝트',
    thumbnail: '/mesh-slice-thumb.jpg', // 더미
    type: '3d-animation' as const
  };

   // Mesh Creation 프로젝트 추가
  const meshCreationProject = {
    title: 'Mesh Creation',
    slug: 'mesh-creation',
    date: '2024.09 - 2024.11',
    description: 'Mesh 생성 알고리즘',
    thumbnail: '/mesh-creation-thumb.jpg',
    type: '3d-animation' as const
  };

  // 프로젝트 배열에 추가
  const allProjects = [meshSliceProject, meshCreationProject];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* 레트로 배경 */}
      <RetroBackgrounds />
      
      {/* 비네팅 효과 */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none z-10" />
      
      {/* 메인 컨텐츠 */}
      <main className="relative z-20 w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 섹션 */}
          <div className="mb-16 text-center relative">
            {/* 서브타이틀 */}
            <p className="mt-6 text-cyan-300/70 font-mono text-sm tracking-widest">
              {'>'} SYSTEM_ARCHIVE.INITIALIZE ()
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse"></span>
            </p>
            
            {/* 장식 라인 */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-2 h-2 border border-cyan-400 rotate-45"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div 
                key={project.slug}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <ProjectCard3D
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  slug={project.slug}
                  type={project.type}
                />
              </div>
            ))}
          </div>

          {/* 하단 상태바 */}
          <div className="mt-16 border-t border-cyan-500/30 pt-8">
            <div className="flex justify-between items-center font-mono text-xs text-cyan-400/50">
              <div>
                {'>'} TOTAL_PROJECTS: {allProjects.length}
              </div>
              <div>
                {'>'} STATUS: ONLINE
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></span>
              </div>
              <div>
                {'>'} SYSTEM_VERSION: 2.0.22
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 스캔라인 효과 */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        @keyframes glitch {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-2px);
          }
          40% {
            transform: translateX(2px);
          }
          60% {
            transform: translateX(-2px);
          }
          80% {
            transform: translateX(2px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        /* CRT 스캔라인 효과 */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 9999;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}