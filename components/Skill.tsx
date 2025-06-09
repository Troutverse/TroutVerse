'use client';

import Image from 'next/image';
import { useState } from 'react';

const DEFAULT_IMAGE = '/skills/default.png';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', image: '/React.png' },
      { name: 'Next.js', image: '/Nextjs.png' },
      { name: 'TypeScript', image: '/TypeScript.png' },
      { name: 'TailwindCSS', image: '/TailwindCSS.png' },
      { name: 'Vue.js', image: '/Vuejs.png' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', image: '/Python.png' },
      { name: 'PyTorch', image: '/PyTorch.webp' },
      { name: 'FastAPI', image: '/FastAPI.png' },
    ],
  },
  {
    category: 'Metaverse',
    items: [
      { name: 'WebGL', image: '/WebGL.png' },
      { name: 'Three.js', image: '/Threejs.png' },
      { name: 'Unity', image: '/Unity.svg' },
    ],
  },
  {
    category: 'AI',
    items: [
      { name: 'Machine Learning', image: '/MachineLearning.png' },
      { name: 'Deep Learning', image: '/DeepLearning.png' },
      { name: 'Computer Vision', image: '/ComputerVision.png' },
    ],
  },
];

export default function Skill() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="text-4xl font-bold mb-8 text-center text-blue-700">Skills</div>
      {skills.map((category) => (
        <div key={category.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.items.map((item) => (
              <SkillItem key={item.name} name={item.name} image={item.image} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function SkillItem({ name, image }: { name: string; image: string }) {
  const [src, setSrc] = useState(image);

  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow p-4">
      <div className="w-20 h-20 relative">
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="contain"
          onError={() => setSrc(DEFAULT_IMAGE)}
        />
      </div>
    </div>
  );
}
