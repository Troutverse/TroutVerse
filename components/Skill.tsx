'use client';

import Image from 'next/image';
import { useState } from 'react';

const DEFAULT_IMAGE = '/skills/default.png';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', image: '/React.png' },
      { name: 'Next.js', image: '/skills/nextjs.png' },
      { name: 'TypeScript', image: '/skills/typescript.png' },
      { name: 'TailwindCSS', image: '/skills/tailwindcss.png' },
      { name: 'Vue.js', image: '/skills/vue.png' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', image: '/skills/python.png' },
      { name: 'PyTorch', image: '/skills/pytorch.png' },
      { name: 'FastAPI', image: '/skills/fastapi.png' },
    ],
  },
  {
    category: 'Metaverse',
    items: [
      { name: 'WebGL', image: '/skills/webgl.png' },
      { name: 'Three.js', image: '/skills/threejs.png' },
    ],
  },
  {
    category: 'AI',
    items: [
      { name: 'Machine Learning', image: '/skills/ml.png' },
      { name: 'Deep Learning', image: '/skills/dl.png' },
      { name: 'Computer Vision', image: '/skills/cv.png' },
    ],
  },
];

export default function Skill() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">My Skills</h1>
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
      <div className="w-20 h-20 mb-2 relative">
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="contain"
          onError={() => setSrc(DEFAULT_IMAGE)}
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
