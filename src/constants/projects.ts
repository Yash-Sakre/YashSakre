import { Projects } from "../Types/Projects";
import TypeArena from "../assets/TypeArena.png";
import finecode from "../assets/finecode.png";
import Flexfit from "../assets/Flexfit.png";
import opinhacks from "../assets/Opinhacks.png";
import SNRKS from "../assets/SNKRS.png"

export const ProjectsList: Projects[] = [
  {
    imagePath: SNRKS,
    ProjName: "SNKRS.",
    Projtitle: "Sneaker Ecommerce Website",
    ProjDesc:
      "SNKRS. is a React and TailwindCSS-powered e-commerce platform that features over 10,000 products, sourced in real-time from the StockX API. It offers a seamless, optimized user experience with advanced filtering for smooth product discovery and responsive design across all devices.",
    Github: "https://github.com/Yash-Sakre/Sneakers",
    Live: "https://sneakers-plum.vercel.app/",
    tech: " React, TypeScript, Tailwind,StockX API ",
  },
  {
    imagePath: TypeArena,
    ProjName: "TypeArena",
    Projtitle: "Typing Speed Test",
    ProjDesc:
      "TypeArena is a React and TailwindCSS-based platform inspired by MonkeyType, designed to enhance your typing skills. It offers a sleek, minimalistic interface for testing and improving typing speed and accuracy.",
    Github: "https://github.com/Yash-Sakre/TypeArena",
    Live: "https://type-arena.vercel.app/",
    tech: " React, TypeScript, Tailwind ",
  },
  {
    imagePath: Flexfit,
    ProjName: "FlexFit",
    Projtitle: "Fitness & Workout Guide",
    ProjDesc:
      "FlexFit is your go-to fitness resource, featuring video guides, YouTube integration, and a host of other features. It empowers individuals to attain their fitness goals while fostering a healthier, happier life.",
    Github: "https://github.com/Yash-Sakre/FlexFit",
    Live: "https://exercisewhiz.vercel.app/",
    tech: "React, Tailwind , Restful API",
  },
];
