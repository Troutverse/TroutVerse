import Link from "next/link";
import Image from "next/image";
import { ProjectDatas } from "@/components/ProjectData";

export default function Projects() {
  

  return (
    <div className="my-10 border flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="w-[fit]">
        {ProjectDatas.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.thumbnail}
                alt={`${project.title} 썸네일`}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-xl font-semibold mb-2">{project.title}</div>
                <div className="text-sm text-gray-500 mb-2">{project.date}</div>
                <div className="text-gray-700 text-base">{project.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
