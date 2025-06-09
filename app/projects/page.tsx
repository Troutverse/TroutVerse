import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const Projects = ['Project One', 'Project Two', 'Project Three'];

  return (
    <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
      {Projects.map((title) => (
        <ProjectCard key={title} title={title} />
      ))}
    </div>
  );
}
