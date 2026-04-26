import PortfolioImage from "@/public/images/portfolio-image.gif";
import UnderConstractionImage from "@/public/images/under-construction.png";

export const projects = [
  {
    title: "Неизвестно",
    description: "Интернет магазин handmade подарков",
    image: UnderConstractionImage,
    link: "https://github.com/nvkmaksim/Gifty",
    githubLink: "https://github.com/nvkmaksim/Gifty",
    isUnderConstruction: true,
  },
  {
    title: "Culin",
    description: "Соцсеть/помощник для кулинаров",
    image: UnderConstractionImage,
    link: "https://github.com/nvkmaksim/Culin",
    githubLink: "https://github.com/nvkmaksim/Culin",
    isUnderConstruction: true,
  },
  {
    title: "Портфолио",
    description: "Мое портфолио",
    image: PortfolioImage,
    link: "http://localhost:3000/portfolio",
    githubLink: "https://github.com/nvkmaksim/Portfolio.git",
    isUnderConstruction: false,
  },
];
