import PortfolioImage from "@/public/images/portfolio-image.gif";
import UnderConstractionImage from "@/public/images/under-construction.png";
import BoilerPlateImage from "@/public/images/boilerplate.jpg";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: StaticImageData;
  link: string;
  githubLink: string;
  figmaLink?: string;
  isUnderConstruction: boolean;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "Proof",
    description:
      "Проектирование Fullstack-платформы для геймифицированного обучения и трекинга целей",
    fullDescription:
      "Разработал архитектурный концепт и спроектировал систему, объединяющую пошаговые дорожные карты, Proof-of-Work отчетность и социальное взаимодействие. Разработал схему реляционной БД (PostgreSQL) с оптимизированными индексами для эффективного трекинга прогресса, расчета ежедневных серий (стриков) и механики «жизней» без оверхеда на базу данных. Спроектировал безопасный пайплайн загрузки медиа-отчетов через pre-signed URLs напрямую в облачное хранилище, минуя бэкенд-сервер для оптимизации сетевого трафика. На стороне клиента заложил архитектуру стейт-менеджмента для плавного кэширования и обновления социальной ленты в реальном времени.",
    image: UnderConstractionImage,
    link: "",
    githubLink: "",
    figmaLink: "",
    isUnderConstruction: true,
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "React Native (Expo)",
      "TypeScript",
      "Zustand",
    ],
  },
  {
    title: "Gifty",
    description:
      "Архитектура и проектирование e-commerce платформы для handmade-мастеров",
    fullDescription:
      "Спроектировал полноценное Fullstack-решение для рынка штучных товаров. Особое внимание уделил проектированию транзакционной логики корзины и механизмов блокировок (pessimistic/optimistic locking) на уровне СУБД для предотвращения race conditions при одновременной покупке уникальных товаров несколькими пользователями. Разработал структуру RESTful API с комплексной многокритериальной фильтрацией каталога. Спроектировал подсистему аналитики для личного кабинета продавца с агрегацией данных о продажах и просмотрах, а также безопасный контур интеграции с платежным шлюзом, включая идемпотентную обработку вебхуков (webhooks) для смены статусов заказов.",
    image: UnderConstractionImage,
    link: "",
    githubLink: "",
    figmaLink: "",
    isUnderConstruction: true,
    stack: [
      "React Native (Expo)",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Tailwind CSS",
      "Stripe / Payment API integration",
    ],
  },
  {
    title: "Boilerplate",
    description: "Архитектурный Fullstack-шаблон для создания социальных сетей",
    fullDescription:
      "Готовый production-ready каркас приложения, объединяющий асинхронный бэкенд на Python и мобильный клиент на TS/React Native. Настроена безопасная JWT-авторизация (access/refresh токены), реализованы базовые абстракции репозиториев для работы с БД, развернута система автоматических миграций (Alembic) и подготовлена Docker-оркестрация для мгновенного развертывания среды разработки.",
    image: BoilerPlateImage,
    link: "",
    githubLink: "https://github.com/nvkmaksim/social_network_boilerplate",
    figmaLink: "",
    isUnderConstruction: false,
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Docker & Compose",
      "Pytest",
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    title: "Culin",
    description: "Высоконагруженная соцсеть и ИИ-помощник для кулинаров",
    fullDescription:
      "Масштабируемая социальная сеть со сложной архитектурой бэкенд-API и кроссплатформенным клиентом. Оптимизировал пайплайн обработки и сжатия пользовательского медиаконтента для снижения нагрузки на хранилище. Реализовал асинхронное взаимодействие для real-time компонентов. Спроектировал расширяемый интерфейс API под интеграцию интеллектуального голосового ИИ-ассистента для сценариев hands-free.",
    image: UnderConstractionImage,
    link: "",
    githubLink: "https://github.com/nvkmaksim/Culin",
    figmaLink:
      "https://www.figma.com/design/L0cAuqaPyzyZmPJCrNwPqO/Culin?node-id=315-777&t=MZxmSjOMbVRxSpSv-1",
    isUnderConstruction: true,
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Docker & Compose",
      "Pytest",
      "minio (s3)",
      "smtp",
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "AI Voice Integration (Проектирование)",
    ],
  },
  {
    title: "Портфолио",
    description: "Высокопроизводительный персональный сайт-портфолио",
    fullDescription:
      "Современное SPA/SSR приложение, разработанное на Next.js с упором на производительность и UX. Дизайн реализован в строгом минимализме на базе CSS-переменных, обеспечивающих динамическое переключение тем оформления. Проект полностью оптимизирован для достижения максимальных показателей Core Web Vitals (близких к 100/100 в Lighthouse) и плавных UI-интерфейсных анимаций.",
    image: PortfolioImage,
    link: "https://portfolio-one-zeta-3jif0mk2g7.vercel.app",
    githubLink: "https://github.com/nvkmaksim/Portfolio.git",
    isUnderConstruction: false,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
  },
];
