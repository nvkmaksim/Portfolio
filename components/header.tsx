"use client";
import Image from "next/image";
import MyPhoto from "@/public/images/my-photo.jpg";
import { Socials } from "@/data/socials";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const handleResize = () => {
      const isLg = window.innerWidth >= 1024;
      setIsLargeScreen(isLg);

      if (isLg || isContactPage) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname, isContactPage]);

  return (
    <section className="flex flex-col border rounded-2xl shadow-sm p-4 border-(--color-border)">
      <div className="flex flex-row justify-between items-start gap-(--spacing-sm)">
        <div className="flex flex-row gap-4 items-center">
          <Image
            className="rounded-full object-cover"
            src={MyPhoto}
            alt="Новиков Максим"
            width={64}
            height={64}
          />
          <div className="flex flex-col">
            <h1 className="text-(--color-text) text-xl font-bold leading-tight">
              Новиков Максим
            </h1>
            <p className="text-(--color-text-secondary)">Веб-разработчик</p>
          </div>
        </div>

        {/* 
            Контейнер для кнопок управления. 
            Теперь они не абсолютные, а просто занимают правую часть флекс-контейнера.
        */}
        <div className="flex flex-col items-end gap-2">
          <ThemeToggle />

          {!isLargeScreen && !isContactPage && (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              animate={{ rotate: isOpen ? -180 : 0 }}
              className="p-1 mt-auto" // mt-auto прижмет стрелку вниз, если блок высокий
            >
              <ChevronDown className="text-(--color-text-secondary)" />
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pt-6 gap-3">
              {Socials.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-3">
                  <a
                    className="bg-(--color-secondary) border-(--color-border) border-1 rounded-xl p-2"
                    href={item.Link}
                  >
                    <Image
                      className="invert w-5 h-5"
                      src={item.Icon}
                      alt={item.Name}
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href={item.Link} className="hover:underline text-sm">
                    {item.Text}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
