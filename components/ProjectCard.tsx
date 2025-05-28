interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
}

export default function ProjectCard({ title, description, techStack, githubLink, demoLink }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-sm mb-2">Tech: {techStack.join(', ')}</p>
      <a href={githubLink} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={demoLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">Demo</a>
    </div>
  );
}