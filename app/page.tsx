//app/page.tsx
'use client';

import Profile from '@/components/Profile';
import Skill from '@/components/Skill';

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center p-4 md:p-8">
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 w-full h-full max-w-7xl mx-auto">
        <div className="flex-none w-full md:w-1/3 flex items-center justify-center h-full">
          <Profile />
        </div>
        <div className="flex-1 w-full md:w-2/3 flex items-center justify-center h-full p-4">
          <Skill />
        </div>
      </main>
    </div>
  );
}