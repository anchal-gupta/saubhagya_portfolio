// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  user1,
  user2,
  user3,
  linkedin,
  grenade,
  prison,
  shot,
  artstation_logo,
  photoshop,
  maya,
  marmoset,
  unreal,
  zbrush,
  substance,
  marvelous,
  illustrator,
  ThreeDCoat,
  materialise,
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
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Marvelous Designer",
    icon: marvelous,
  },
  {
    name: "Marmoset Toolbag",
    icon: marmoset,
  },
  {
    name: "Maya",
    icon: maya,
  },
  {
    name: "Unreal Engine",
    icon: unreal,
  },
  {
    name: "ZBrush",
    icon: zbrush,
  },
  {
    name: "Substance Painter",
    icon: substance,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "3D Coat",
    icon: ThreeDCoat,
  },
  {
    name: "Materialize",
    icon: materialise,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "3D Artist",
    company_name: "",
    icon: maya,
    iconBg: "#383E56",
    date: "",
    points: [
      "Creating high-quality 3D assets, including environments, props, and characters.",
      "Working with PBR workflows to ensure realistic textures and materials.",
      "Collaborating with concept artists and animators to bring assets to life.",
      "Utilizing industry-standard tools like Blender, Maya, and Substance Painter.",
      "Optimizing models for real-time applications while maintaining visual fidelity.",
    ],
  },
  {
    title: "3D Modeler",
    company_name: "",
    icon: marmoset,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Sculpting and modeling highly detailed assets using ZBrush and Maya.",
      "Retopologizing high-poly models for efficient use in games and animations.",
      "Ensuring models meet technical requirements for various platforms.",
      "Working with UV mapping and baking techniques for optimized textures.",
      "Collaborating with riggers and animators to ensure proper deformations.",
    ],
  },
  {
    title: "Texture Artist",
    company_name: "",
    icon: ThreeDCoat,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing photorealistic and stylized textures using Substance Painter & Photoshop.",
      "Implementing procedural texturing techniques to enhance workflow efficiency.",
      "Creating seamless tileable textures for environments and props.",
      "Ensuring texture optimization for real-time applications in game engines.",
      "Applying normal, roughness, and ambient occlusion maps for depth and realism.",
    ],
  },
  {
    title: "Humanoid Character",
    company_name: "",
    icon: substance,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Designing and sculpting highly detailed humanoid characters in ZBrush.",
      "Creating topology and edge loops optimized for animation and rigging.",
      "Developing realistic skin shaders and textures for lifelike characters.",
      "Working with blend shapes and facial rigs for expressive character animation.",
      "Ensuring characters meet technical and artistic requirements for projects.",
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
