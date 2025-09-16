import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/components/ProjectData';

export default function ProjectsPage() {
  return (
    <main className="w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="group">
              <div className="flex flex-col h-full overflow-hidden rounded-xl border bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
                
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} 썸네일`}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                    <p className="mt-1 text-sm text-gray-500">{project.date}</p>
                    <p className="mt-3 text-base text-gray-600 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}