import Image from "next/image";
import GithubImage from "@/public/images/socials/github.png"; // Предполагается наличие lucide-react
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-(--spacing-sm)">
      <h2 className="font-bold text-3xl tracking-tight mb-4">Портфолио</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--spacing-sm)">
        {projects.map((project, index) => (
          <article key={index}>
            <div className="relative group">
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  className={`w-full h-55 rounded-2xl object-cover ${
                    project.isUnderConstruction ? "brightness-50" : ""
                  }`}
                />
              </a>

              {project.isUnderConstruction && (
                <span className="text-(--color-white)/30 absolute -rotate-20 text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
                  В разработке
                </span>
              )}

              <a
                target="blank"
                className="absolute bottom-3 right-3 bg-(--color-secondary) border-(--color-border) border-1 rounded-xl p-2"
                href={project.githubLink}
              >
                <Image
                  className="invert w-5 h-5"
                  src={GithubImage}
                  alt="Github icon"
                />
              </a>
            </div>

            <h4 className="font-bold text-lg text-(--color-text) mt-2">
              {project.title}
            </h4>
            <p className="text-(--color-text-secondary)">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
