"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import GithubIcon from "@/public/images/icons/github.svg";
import FigmaIcon from "@/public/images/icons/figma.svg";
import LinkIcon from "@/public/images/icons/link.svg";
import CloseIcon from "@/public/images/icons/close.svg";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Блокируем скролл основной страницы при открытой модалке
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="flex flex-col gap-(--spacing-sm)">
      <h2 className="font-bold text-2xl tracking-tight mb-4">Портфолио</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--spacing-sm)">
        {projects.map((project, index) => (
          <article key={index} className="flex flex-col">
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div onClick={() => setSelectedProject(project)}>
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  className={`w-full h-55 object-cover transition-transform duration-300 group-hover:scale-[1.02] ${
                    project.isUnderConstruction ? "brightness-50" : ""
                  }`}
                />
              </div>

              {project.isUnderConstruction && (
                <span className="text-(--color-white)/30 absolute -rotate-20 text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none font-bold">
                  В разработке
                </span>
              )}
            </div>

            <h4 className="font-bold text-lg text-(--color-text) mt-2">
              {project.title}
            </h4>
            <p className="text-(--color-text-secondary) text-sm flex-1">
              {project.description}
            </p>
          </article>
        ))}
      </div>

      {/* Модалка */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-(--color-secondary) border border-(--color-border) max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия крестик */}
            <button
              className="absolute top-4 right-4 z-20 bg-black/50 rounded-full p-1.5 hover:bg-black/80 transition-colors flex items-center justify-center border border-white/10"
              onClick={() => setSelectedProject(null)}
            >
              <Image
                src={CloseIcon}
                alt="Close Icon"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
            </button>

            {/* Скролл-контейнер */}
            <div className="overflow-y-auto">
              {/* Большое изображение в модалке */}
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                {selectedProject.isUnderConstruction && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white/40 -rotate-12 text-4xl font-bold tracking-wider">
                      В разработке
                    </span>
                  </div>
                )}
              </div>

              {/* Контентная часть */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-(--color-text)">
                      {selectedProject.title}
                    </h3>
                    <p className="text-(--color-text-secondary) text-sm mt-0.5">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Блок ссылок в модалке (теперь в едином стиле с карточками) */}
                  <div className="flex items-center gap-2">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Репозиторий"
                        className="bg-orange-600/50 border border-(--color-border) rounded-xl p-2 hover:bg-orange-400 transition-colors flex items-center justify-center"
                      >
                        <Image
                          src={GithubIcon}
                          alt="Github link"
                          width={20}
                          height={20}
                          className="brightness-0 invert"
                        />
                      </a>
                    )}
                    {selectedProject.figmaLink && (
                      <a
                        href={selectedProject.figmaLink}
                        target="_blank"
                        rel="noreferrer"
                        title="Макет Figma"
                        className="bg-orange-600/50 border border-(--color-border) rounded-xl p-2 hover:bg-orange-400 transition-colors flex items-center justify-center"
                      >
                        <Image
                          src={FigmaIcon}
                          alt="Figma icon"
                          width={20}
                          height={20}
                          className="brightness-0 invert"
                        />
                      </a>
                    )}
                    {selectedProject.link &&
                      !selectedProject.isUnderConstruction && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noreferrer"
                          title="Открыть сайт"
                          className="bg-orange-600/50 border border-(--color-border) rounded-xl p-2 hover:bg-orange-400 transition-colors flex items-center justify-center"
                        >
                          <Image
                            src={LinkIcon}
                            alt="Link icon"
                            width={20}
                            height={20}
                            className="brightness-0 invert"
                          />
                        </a>
                      )}
                  </div>
                </div>

                {/* Полное описание */}
                <div className="mt-2">
                  <h5 className="font-semibold text-sm text-(--color-text-secondary) uppercase tracking-wider mb-1">
                    О проекте
                  </h5>
                  <p className="text-(--color-text) leading-relaxed text-[15px]">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Технологический стек */}
                <div className="mt-2">
                  <h5 className="font-semibold text-sm text-(--color-text-secondary) uppercase tracking-wider mb-2">
                    Стек технологий
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border bg-(--color-secondary) border-(--color-border) rounded-full text-sm font-medium text-(--color-text)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
