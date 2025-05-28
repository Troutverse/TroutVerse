import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: 'Bzero',
      description: 'Community platform with CRUD and commenting features.',
      techStack: ['React', 'Django'],
      githubLink: 'https://github.com/yourusername/bzero',
      demoLink: 'https://bzero.vercel.app',
    },
    {
      title: 'UOUR',
      description: 'Interactive community website using Next.js.',
      techStack: ['Next.js', 'React'],
      githubLink: 'https://github.com/yourusername/uour',
      demoLink: 'https://uour.vercel.app',
    },
  ];

  return (
    <section className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}