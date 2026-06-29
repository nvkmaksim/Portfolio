import Image from "next/image";
import EducationIcon from "@/public/images/education.png";
import WorkIcon from "@/public/images/work.png";

export default function Resume() {
  return (
    <section className="flex flex-col gap-(--spacing-sm)">
      <h2 className="font-bold text-2xl tracking-tight mb-4">Резюме</h2>
      <div className="flex flex-col gap-(--spacing-md)">
        <article className="relative flex flex-col gap-(--spacing-sm)">
          <div className="relative pl-12">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10  bg-(--color-secondary) rounded-xl flex items-center justify-center border border-(--color-border) shadow-sm">
              <Image
                className="invert w-5 h-5 opacity-80"
                src={EducationIcon}
                alt="Education"
              />
            </div>
            <h3 className="font-bold text-xl uppercase tracking-wider text-(--color-text)">
              Образование
            </h3>
          </div>

          <div className="relative ml-[19px] border-l border-(--color-secondary) flex flex-col gap-(--spacing-md) pl-10">
            <div className="relative">
              <div className="absolute -left-[45px] top-2 w-2.5 h-2.5 rounded-full border-2 text-(--color-secondary) shadow-[0_0_10px_rgba(255, 255, 255)]" />

              <h4 className="font-bold text-lg text-(--color-text)">
                Елабужский институт КФУ
              </h4>
              <p className="text-(--color-text-secondary) mt-1">
                Прикладная информатика
              </p>
              <p className="text-(--color-text-secondary) text-sm mt-1">
                2022 — 2027 (Заочно)
              </p>
            </div>

            <div className="relative">
              <div className="absolute text-(--color-secondary) -left-[45px] top-2 w-2.5 h-2.5 rounded-full border-2 shadow-[0_0_10px_rgba(255, 255, 255)]" />

              <h4 className="font-bold text-lg  text-(--color-text)">КГАМТ</h4>
              <p className="text-(--color-text-secondary) mt-1">
                Программная инженерия
              </p>
              <p className="text-(--color-text-secondary) text-sm mt-1">
                2018 — 2022 (Очно)
              </p>
            </div>
          </div>
        </article>

        <article className="relative flex flex-col gap-(--spacing-sm)">
          <div className="relative pl-12">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-(--color-secondary) rounded-xl flex items-center justify-center border  border-(--color-secondary) shadow-sm">
              <Image
                className="invert w-5 h-5 opacity-80"
                src={WorkIcon}
                alt="Work"
              />
            </div>
            <h3 className="font-bold text-xl uppercase tracking-wider  text-(--color-text)">
              Опыт работы
            </h3>
          </div>

          <div className="relative ml-[19px] border-l border-(--color-secondary) flex flex-col gap-(--spacing-md) pl-10">
            <div className="relative">
              <div className="absolute -left-[45px] top-2 w-2.5 h-2.5 rounded-full border-2  border-(--color-secondary)" />

              <h4 className="font-bold text-lg text-(--color-text)">ГНИВЦ</h4>
              <p className="text-(--color-text-secondary) mt-1">
                Системный аналитик
              </p>
              <p className="text-(--color-text-secondary) text-sm mt-1">
                2024 — 2026
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
