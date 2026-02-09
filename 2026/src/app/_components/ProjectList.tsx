import { ProjectItem } from "@/lib/types/models/project";

export default function ProjectList({ projects }: { projects: ProjectItem[] }) {
  const WAY_LABEL: Record<string, string> = {
    personal: "개인",
    team: "협업",
  };

  console.log(projects[1].result);
  return (
    <ul className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="border bg-point/10 border-point/50 rounded-lg p-6 flex flex-col gap-2"
        >
          <h3 className="flex items-center justify-between">
            <p className="text-lg font-bold">{project.name}</p>
            <span className="text-sm">
              {project.way[0] ? WAY_LABEL[project.way[0]] : ""}
            </span>
          </h3>
          <h4>
            <span className="bg-point font-medium text-black px-1 py-0.5 rounded">
              배경
            </span>
            <p className="mt-2 whitespace-pre-line break-keep">
              {project.background}
            </p>
          </h4>
          <h4>
            <span className="bg-point font-medium text-black px-1 py-0.5 rounded">
              주요 역할
            </span>
            <p className="mt-2 whitespace-pre-line break-keep">
              {project.role}
            </p>
          </h4>
          <h4>
            <span className="bg-point font-medium text-black px-1 py-0.5 rounded">
              결과 및 성과
            </span>
            <p className="mt-2 whitespace-pre-line break-keep">
              {project.result}
            </p>
          </h4>
          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-100 text-black rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* 링크 */}
          <div className="flex gap-3 mt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                GitHub
              </a>
            )}
          </div>
          <div className="text-sm text-white text-right">
            {project.startDate.slice(2)} ~ {project.endDate.slice(2)}
          </div>
        </li>
      ))}
    </ul>
  );
}
