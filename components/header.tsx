"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import MyPhoto from "@/public/images/my-photo.jpg";
import TelegramIcon from "@/public/images/icons/telegram.svg";
import GithubIcon from "@/public/images/icons/github.svg";
import MailIcon from "@/public/images/icons/mail.svg";
import PhoneIcon from "@/public/images/icons/phone.svg";
import LocationIcon from "@/public/images/icons/geo.svg";

const headerSocials = [
  {
    name: "Telegram",
    text: "@maksim_novikov_yikes",
    icon: TelegramIcon,
    link: "https://t.me/maksim_novikov_yikes",
  },
  {
    name: "GitHub",
    text: "@nvkmaksim",
    icon: GithubIcon,
    link: "https://github.com/nvkmaksim",
  },
  {
    name: "Email",
    text: "novimaksim1@gmail.com",
    icon: MailIcon,
    link: "mailto:novimaksim1@gmail.com",
  },
  {
    name: "Phone",
    text: "+7 (965) 624-65-86",
    icon: PhoneIcon,
    link: "tel:+79656246586",
  },
  {
    name: "Location",
    text: "Набережные Челны",
    icon: LocationIcon,
    link: "https://yandex.com/maps/geo/naberezhnyye_chelny/53105093",
  },
];

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
    <section className="flex flex-col border rounded-2xl shadow-sm p-4 border-(--color-border) bg-(--color-secondary)/30 backdrop-blur-sm">
      <div className="flex flex-row justify-between items-start gap-(--spacing-sm)">
        <div className="flex flex-row gap-4 items-center">
          <Image
            className="rounded-full object-cover border border-(--color-border)"
            src={MyPhoto}
            alt="Новиков Максим"
            width={64}
            height={64}
            priority
          />
          <div className="flex flex-col">
            <h1 className="text-(--color-text) text-xl font-bold leading-tight">
              Новиков Максим
            </h1>
            <p className="text-(--color-text-secondary) text-sm">
              Веб-разработчик
            </p>
          </div>
        </div>

        {/* Контейнер для кнопок управления */}
        <div className="flex flex-col items-end gap-2">
          <ThemeToggle />

          {!isLargeScreen && !isContactPage && (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              animate={{ rotate: isOpen ? -180 : 0 }}
              transition={{ duration: 0.2 }}
              className="p-1 mt-auto flex items-center justify-center text-(--color-text-secondary) hover:text-(--color-text) transition-colors"
            >
              <ChevronDown size={20} />
            </motion.button>
          )}
        </div>
      </div>

      {/* Выпадающий список контактов */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pt-5 gap-3">
              {headerSocials.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-3 group"
                >
                  {/* Иконка в едином стиле кнопок портфолио */}
                  <a
                    className="bg-(--color-secondary) border border-(--color-border) rounded-xl p-2 flex items-center justify-center hover:bg-(--color-border) transition-colors"
                    href={item.link}
                    target={
                      item.name !== "Email" && item.name !== "Phone"
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                  >
                    <Image
                      className="brightness-0 invert w-5 h-5"
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  </a>
                  {/* Текстовая ссылка */}
                  <a
                    href={item.link}
                    target={
                      item.name !== "Email" && item.name !== "Phone"
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                    className="text-sm text-(--color-text-secondary) hover:text-(--color-text) hover:underline transition-colors"
                  >
                    {item.text}
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
