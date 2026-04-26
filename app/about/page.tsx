export default function About() {
  return (
    <section className="flex flex-col gap-(--spacing-md)">
      {/* Секция: Про меня */}
      <article className="flex flex-col gap-(--spacing-sm)">
        <h2 className="font-bold text-2xl tracking-tight">Про меня</h2>
        <div className="flex flex-col gap-1">
          <p>
            Специализируюсь на создании современных веб-приложений и интерфейсов
            на Expo и Next.js. Люблю создавать кроссплатформенные решения с
            единой логикой.
          </p>
          <p>
            Сейчас я активно углубляюсь и интегрирую методы машинного обучения и
            компьютерного зрения в свои проекты, стремясь превращать стандартные
            интерфейсы в интеллектуальные инструменты.
          </p>
          <p>
            Ранее занимался разработкой игр на Unity, что привило мне любовь к
            работе с графикой и оптимизацией. Продолжаю заниматься геймдевом в
            качестве хобби.
          </p>
        </div>
      </article>

      {/* Секция: Стек */}
      <article className="flex flex-col gap-(--spacing-sm)">
        <h2 className="font-bold text-2xl">Стек</h2>
        <div className="flex flex-wrap gap-1">
          {[
            "Next.js",
            "React Native",
            "Tailwind",
            "Supabase (PostgreSQL)",
            "FastAPI",
            "PyTorch",
            "Python",
            "Typescript",
            "Zustand",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border bg-(--color-secondary) border-(--color-border) rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
