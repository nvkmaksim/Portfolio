export default function About() {
  return (
    <section className="flex flex-col gap-(--spacing-md)">
      {/* Секция: Про меня */}
      <article className="flex flex-col gap-(--spacing-sm)">
        <h2 className="font-bold text-2xl tracking-tight">Про меня</h2>
        <div className="flex flex-col gap-1">
          <p>
            Студент 4 курса (заочное обучение), Fullstack-разработчик с фокусом
            на Frontend.
          </p>
          <p>
            Специализируюсь на создании кроссплатформенных экосистем для веба и
            mobile (Next.js + Expo). Мой подход - это полный цикл разработки: от
            проектирования UI/UX макетов до финального деплоя и настройки
            серверной части.
          </p>
          <p>
            Активно внедряю ML-решения в веб-интерфейсы, используя FastAPI +
            PyTorch.
          </p>
          <p>
            Стремлюсь к работе в средней/крупной компании для освоения
            Enterprise-практик, которые могут мне в развиваться и создавать
            действительно качественные и нужные продукты.
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
            "Git",
            "Linux",
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
