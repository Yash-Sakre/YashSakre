import { Projects } from "../Types/Projects";
import TypeArena from "../assets/TypeArena.png";
import finecode from "../assets/finecode.png";
import Flexfit from "../assets/Flexfit.png";
import opinhacks from "../assets/Opinhacks.png";

export const ProjectsList: Projects[] = [
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
  {
    imagePath: opinhacks,
    ProjName: "OpinHacks",
    Projtitle: "36-Hour Hackathon Website ",
    ProjDesc:
      "A dynamic hackathon website to unite passionate individuals, foster innovation, and provide a platform for collaborative problem-solving. Featuring event details, registration, project submissions, and engaging community features to promote creativity and teamwork.",
    Github: "https://github.com/JayashTripathy/OpInHacks",
    tech: "React, Tailwind",
  },
  {
    imagePath: finecode,
    ProjName: "FineCode",
    Projtitle: "Code Analysis Platform",
    ProjDesc:
      "FineCode is a project that revolutionizes coding assignment evaluation by providing a platform for students to register, submit, and evaluate their codes. It offers visual analysis, rankings, and valuable feedback to instructors and students.",
    Github: "https://github.com/Yash-Sakre/FineCode",

    tech: " Javascript, Python, Django, HTML CSS",
  },
];
