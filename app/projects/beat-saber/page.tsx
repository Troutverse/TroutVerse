// app/projects/beat-saber-clone/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

export default function BeatSaberPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. Header (5%) - Back 버튼 */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            홈으로
          </Link>
        </div>
      </nav>

      {/* 메인 컨텐츠 - 중앙 정렬 */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-5xl w-full space-y-8">
          {/* 2. Title Section (15%) - 왼쪽 정렬 */}
          <header className="text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
              Beat Saber
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              VR 리듬 액션 게임(비트세이버 모작)
            </p>
            <p className="text-gray-500 font-mono">2025.10 - 2025.11</p>
          </header>

          {/* 영상 */}
          <section className="mb-12">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
              <video className="w-full h-full" controls muted>
                <source src="/videos/BeatSaberPlay.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Unity",
                "VR",
                "XR Interaction Toolkit",
                "Audio Synchronization",
                "Rhythm Game",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 5. Links (10%)
          <section>
            <div className="flex justify-center">
              
                href="https://github.com/Troutverse/BeatSaberClone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-semibold"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
}