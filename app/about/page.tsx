export default function About() {
  return (
    <section className="flex flex-col gap-(--spacing-md)">
      <article className="flex flex-col gap-(--spacing-sm)">
        <h2 className="font-bold text-2xl tracking-tight">Про меня</h2>
        <div className="flex flex-col gap-5 text-lg leading-snug max-w-3xl">
          <p className="font-medium">
            Студент 4 курса (заочное обучение), Fullstack-разработчик с фокусом
            на frontend.
          </p>

          <p>
            Специализируюсь на создании кроссплатформенных экосистем для веба и
            mobile <span className="font-semibold">(Next.js + Expo)</span>. Мой
            подход - это полный цикл разработки: от проектирования UI/UX макетов
            до финального деплоя и настройки серверной части.
          </p>

          <p>
            Активно внедряю ML-решения в веб-интерфейсы, используя{" "}
            <span className="font-semibold">FastAPI + PyTorch</span>.
          </p>

          <p className="border-l-4 pl-4 italic">
            Стремлюсь к работе в средней/крупной компании для освоения
            Enterprise-практик, которые помогут мне развиваться и создавать
            действительно качественные и нужные людям продукты.
          </p>
        </div>
      </article>

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
