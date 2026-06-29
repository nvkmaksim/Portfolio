export default function About() {
  return (
    <section className="flex flex-col gap-(--spacing-md)">
      <article className="flex flex-col gap-(--spacing-sm)">
        <h2 className="font-bold text-2xl tracking-tight">Про меня</h2>
        <div className="flex flex-col gap-5 text-lg leading-snug max-w-3xl">
          <p className="font-medium text-(--color-text)">
            Fullstack-разработчик с опытом проектирования и реализации
            распределенных веб- и мобильных приложений.
          </p>

          <p>
            Специализируюсь на построении сквозных кроссплатформенных экосистем.
            Разрабатываю производительные асинхронные API на Python{" "}
            <span className="font-semibold">(FastAPI)</span> и создаю
            отзывчивые, оптимизированные интерфейсы для веба и mobile на
            TypeScript{" "}
            <span className="font-semibold">
              (Next.js + React Native / Expo)
            </span>
            . Практикую подход полного цикла: от проектирования реляционных баз
            данных и оптимизации бизнес-логики до контейнеризации и деплоя.
          </p>

          <p>
            Имею практический интерес к сфере Data Science и интеграции
            AI/ML-решений в веб-сервисы. Проектирую бэкенд-инфраструктуру для
            инференса нейросетевых моделей{" "}
            <span className="font-semibold">(PyTorch)</span>, автоматической
            обработки медиаконтента и работы с голосовыми ИИ-ассистентами.
          </p>

          <p className="border-l-4 pl-4 italic text-(--color-text-secondary)">
            Ищу позицию в зрелой инженерной команде технологического продукта.
            Нацелен на работу со сложной архитектурой, проектирование
            отказоустойчивых систем и работу с Enterprise-практиками. Готов
            брать на себя ответственность за сквозную фичу - от структуры
            таблицы в БД до анимации кнопки на клиенте.
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-(--spacing-sm)">
        <h2 className="font-bold text-2xl">Стек технологий</h2>
        <div className="flex flex-wrap gap-1.5">
          {[
            "TypeScript",
            "JavaScript",
            "Python",
            "Next.js",
            "React",
            "React Native (Expo)",
            "FastAPI",
            "SQLAlchemy",
            "Alembic",
            "PostgreSQL",
            "Supabase",
            "Docker & Compose",
            "PyTorch",
            "Zustand",
            "Tailwind CSS v4",
            "Framer Motion",
            "Git",
            "Linux",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border bg-(--color-secondary)/40 border-(--color-border) rounded-full text-sm font-medium text-(--color-text)"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
