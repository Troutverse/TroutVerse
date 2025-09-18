import { projectsData } from '@/components/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeSnippet from '@/components/CodeSnippet';

export default function ProjectDetailPage() {

    const project = projectsData.find((p) => p.slug === "vr-baseball-simulation");
    if (!project) return <div className="text-center mt-20">Non</div>;

    return (
        <article className="bg-white">
            <header className="relative h-200 w-full overflow-hidden">
                <video
                    src={project.heroVideo}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold">{project.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">{project.description}</p>
                    <div className="mt-8 flex gap-4">
                        {project.githubUrl && (
                            <Link href={project.githubUrl} target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                                GitHub
                            </Link>
                        )}
                    </div>
                </div>
            </header>
            <main className="max-w-4xl mx-auto p-6 md:p-12">
                <section className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2">프로젝트 소개</h2>
                        <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
                    </div>
                    <aside>
                        <div className="border p-4 rounded-lg bg-gray-50">
                            <h3 className="font-bold text-lg mb-3">INFO</h3>
                            <div className="text-sm space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-600">개발 기간</h4>
                                    <p className="text-gray-800">{project.date}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-600">나의 역할</h4>
                                    <p className="text-gray-800">{project.role}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-600">주요 기술</h4>
                                    <ul className="flex flex-wrap gap-2 mt-1">
                                        {project.techStack.map(tech => (
                                            <li key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 pb-2">주요 기능 상세</h2>
                    <div className="space-y-16">
                        {project.featureDetails.map((feature, index) => (
                            <div key={index}>
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                        <p className="font-semibold text-gray-500 mb-2">Problem</p>
                                        <p className="text-gray-700 mb-4">{feature.problem}</p>
                                        <p className="font-semibold text-gray-500 mb-2">Solution</p>
                                        <p className="text-gray-700">{feature.solution}</p>
                                    </div>
                                    <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                                        {feature.media.type === 'video' ? (
                                            <video
                                                src={feature.media.src}
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg w-full"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                        ) : (
                                            <Image
                                                src={feature.media.src}
                                                alt={feature.title}
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg w-full"
                                                unoptimized={true}
                                            />
                                        )}
                                    </div>
                                </div>

                                {feature.codeSnippet && (
                                    <CodeSnippet code={feature.codeSnippet} language="csharp" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2">프로젝트 회고</h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">배운 점 (What I Learned)</h3>
                        <p className="text-gray-700 leading-relaxed">{project.learnings}</p>
                    </div>
                </section> */}
            </main>
        </article>
    );
}