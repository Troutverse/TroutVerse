// app/projects/page.tsx
'use client';

import { ProjectCard3D } from '@/components/ProjectCard3D';
import { RetroBackgrounds } from '@/components/Retrobackgrounds';

export default function ProjectsPage() {

  const meshSliceProject = {
    title: 'Mesh Slice',
    slug: 'mesh-slicing',
    date: '2025.12',
    description: '오브젝트의 자연스러운 메쉬 절단 유니티 프로젝트',
    type: '3d-animation' as const
  };

  const meshCreationProject = {
    title: 'Mesh Creation',
    slug: 'mesh-creation',
    date: '2025.12',
    description: 'Mesh 생성 알고리즘',
    type: '3d-animation' as const
  };

  const matchmakingProject = {
    title: 'Matchmaking System',
    slug: 'matchmaking-system',
    date: '2026.01',
    description: 'SignalR 기반 실시간 4인 매칭 시스템',
    type: '3d-animation' as const
  };

  const pbdSoftbodyProject = {
    title: 'PBD Soft Body',
    slug: 'pbd-softbody',
    date: '2025.11',
    description: 'VR 수술 시뮬레이션을 위한 실시간 소프트바디 물리 엔진',
    type: '3d-animation' as const
  };

  const loginServiceProject = {
    title: 'Login Service',
    slug: 'login-service',
    date: '2026.01',
    description: 'GRPC 기반 사용자 인증 및 세션 관리 시스템',
    type: '3d-animation' as const
  };

  const allocationServiceProject = {
    title: 'Allocation Service',
    slug: 'allocation-service',
    date: '2026.01',
    description: 'PlayFab Multiplayer Server 자동 할당 및 관리',
    type: '3d-animation' as const
  };

  const allProjects = [
    meshSliceProject, 
    meshCreationProject, 
    matchmakingProject, 
    pbdSoftbodyProject,
    loginServiceProject,      
    allocationServiceProject  
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <RetroBackgrounds />
      
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none z-10" />
      
      <main className="relative z-20 w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

        </div>
      </main>

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
      `}</style>
    </div>
  );
}