// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  grenade,
  prison,
  shot,
  artstation,
  artstation_logo,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "art-station",
    title: "Art Station",
    link: "https://www.artstation.com/saubhagyagupta4",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "3D Artist",
    icon: web,
  },
  {
    title: "3D Modeler",
    icon: mobile,
  },
  {
    title: "Texture Artist",
    icon: backend,
  },
  {
    title: "Humanoid Character",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "3D Artist",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Modeling and texturing 3D assets for games and animations.",
      "Creating realistic lighting and rendering for high-quality visual effects.",
      "Optimizing models for performance and game engine compatibility.",
      "Collaborating with game developers to ensure assets meet project requirements.",
    ],
  },
  {
    title: "3D Modeler",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Modeling and texturing 3D assets for games and animations.",
      "Creating realistic lighting and rendering for high-quality visual effects.",
      "Optimizing models for performance and game engine compatibility.",
      "Collaborating with game developers to ensure assets meet project requirements.",
    ],
  },
  {
    title: "Texture Artist",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Modeling and texturing 3D assets for games and animations.",
      "Creating realistic lighting and rendering for high-quality visual effects.",
      "Optimizing models for performance and game engine compatibility.",
      "Collaborating with game developers to ensure assets meet project requirements.",
    ],
  },
  {
    title: "Humanoid Character",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Modeling and texturing 3D assets for games and animations.",
      "Creating realistic lighting and rendering for high-quality visual effects.",
      "Optimizing models for performance and game engine compatibility.",
      "Collaborating with game developers to ensure assets meet project requirements.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Defensive Grenade",
    description:
      "Modeled a detailed defensive grenade in Maya with precise proportions and realistic design. Textured in Substance Painter for a high-quality finish and rendered in Marmoset Toolbag with accurate lighting and reflections. Gained experience in the full 3D asset pipeline, focusing on creativity and precision.",
    tags: [
      {
        name: "maya",
        color: "blue-text-gradient",
      },
      {
        name: "substance painter",
        color: "green-text-gradient",
      },
      {
        name: "marmoset toolbag",
        color: "pink-text-gradient",
      },
    ],
    image: grenade,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://www.artstation.com/artwork/mAAGDv",
  },
  {
    name: "Wooden Prison cell",
    description:
      "Recreated a low-poly wooden prison cell with clean geometry and game-ready optimization, inspired by concept art. Modeled in Autodesk Maya, sculpted in ZBrush, and rendered in Unreal Engine to create an immersive presentation. This project enhanced my workflow, technical skills, and Unreal Engine expertise.",
    tags: [
      {
        name: "ZBrush",
        color: "blue-text-gradient",
      },
      {
        name: "Unreal Engine",
        color: "green-text-gradient",
      },
      {
        name: "Maya",
        color: "pink-text-gradient",
      },
    ],
    image: prison,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://www.artstation.com/artwork/YGrW53",
  },
  {
    name: "Swagman M1 - Low-Poly 3D Gaming Model",
    description:
      "Modeled in Maya with optimized topology for real-time rendering.Textured in Substance Painter, focusing on realistic wear and material accuracy.Animated with moving tires and integrated into a fully designed Unreal Engine environment featuring realistic lighting and terrain.Overcame challenges in animation and environment setup, gaining valuable Unreal Engine experience.The project marked a milestone in asset integration, animation, and environment creation.",
    tags: [
      {
        name: "Autodesk Maya",
        color: "blue-text-gradient",
      },
      {
        name: "Unreal Engine",
        color: "green-text-gradient",
      },
      {
        name: "Photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: shot,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "#",
  },
  // {
  //   name: "TikTok Clone",
  //   description:
  //     "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project4,
  //   source_code_link: "https://github.com/sanidhyy/tiktok-clone",
  //   live_site_link: "https://tiktok-clone-react.vercel.app/",
  // },
  // {
  //   name: "Cryptoverse",
  //   description:
  //     "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project5,
  //   source_code_link: "https://github.com/sanidhyy/crypto-app",
  //   live_site_link: "https://reactjscryptoapp.netlify.app/",
  // },
  // {
  //   name: "Travel Advisor",
  //   description:
  //     "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "material-ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project6,
  //   source_code_link: "https://github.com/sanidhyy/travel-advisor",
  //   live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  // },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/saubhagya-gupta/",
  },
  // {
  //   name: "Twitter",
  //   icon: twitter,
  //   link: "https://twitter.com/TechnicalShubam",
  // },
  {
    name: "Artstation",
    icon: artstation_logo,
    link: "https://www.artstation.com/saubhagyagupta4",
  },
] as const;
