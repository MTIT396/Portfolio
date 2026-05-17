import { Project } from "@/types/project.type";
import { Social } from "@/types/type.type";
import {
  Facebook,
  Github,
  Instagram,
  Code,
  Award,
  Globe,
  Box,
} from "lucide-react";

export const socialsLink = [
  {
    name: "Github",
    href: "https://github.com/MTIT396",
    icon: Github,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/minh.thien.0392006",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lemith.06/",
    icon: Instagram,
  },
];

export const showcases = [
  {
    id: 1,
    title: "Projects",
    icon: Code,
  },
  {
    id: 2,
    title: "Achievements",
    icon: Award,
  },
  {
    id: 3,
    title: "Tech Stack",
    icon: Box,
  },
];

// ----------- PROJECTS -------------
export const projects: Project[] = [
  {
    id: "cyper",
    title: "Cyper Ecommerce Platform",
    description:
      "Built a scalable frontend-focused ecommerce platform with advanced product filtering, infinite loading, authentication, payment integration, and optimized checkout workflows while improving UX, performance, and state management using modern React ecosystem technologies.",
    imageUrl: "/projects/cyper.png",
    liveDemoUrl: "https://cyper.store",
    githubUrl: "https://github.com/MTIT396/Cyper-Ecommerce-Client",
    techs: [
      {
        name: "Next.js",
        iconUrl: "/icons/nextjs.svg",
      },
      {
        name: "Typescript",
        iconUrl: "/icons/ts.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl: "/icons/tailwind.svg",
      },
      {
        name: "HTML",
        iconUrl: "/icons/html.svg",
      },
      {
        name: "CSS",
        iconUrl: "/icons/css.svg",
      },
      {
        name: "JavaScript",
        iconUrl: "/icons/js.svg",
      },
      {
        name: "Node.js",
        iconUrl: "/icons/nodejs.svg",
      },
      {
        name: "MySQL",
        iconUrl: "/icons/mysql.svg",
      },
      {
        name: "Express.js",
        iconUrl: "/icons/express.svg",
      },
      { name: "VSCode", iconUrl: "/icons/vscode.svg" },
      { name: "Figma", iconUrl: "/icons/figma.svg" },
      { name: "Vercel", iconUrl: "/icons/vercel.svg" },
      {
        name: "Git",
        iconUrl: "/icons/git.svg",
      },
    ],
    features: [
      "Architected scalable frontend structure using reusable service layers, custom hooks, Axios, and strict TypeScript typing to improve maintainability and code reuse.",
      "Designed advanced product filtering flow with multi/single-select filters, removable filter badges, URL search params synchronization, infinite loading, and reusable pagination handling.",
      "Optimized UX and performance with loading skeletons, responsive mobile-first UI, TanStack Query caching, and smooth animations using Framer Motion and Swiper.js.",
      "Built complete cart, wishlist, and checkout workflows with Zustand state management, address handling, Zod-based form validation, and order placement/cancellation flows.",
      "Improved user experience with loading skeletons, infinite product loading, reusable pagination handling, and responsive UI optimization across devices.",
      "Integrated MoMo payment gateway using polling status technique to reliably synchronize asynchronous payment states after redirects.",
      "Implemented authentication system including Google OAuth login flow, protected action hooks, search history persistence, and Cloudinary avatar upload management.",
    ],
  },

  {
    id: "3legant",
    title: "3legant E-commerce Website",
    description:
      "Developed a comprehensive e-commerce website using React for modern UI & Express.js for setting up API featuring a fast product search engine, advanced filtering by price and category, secure JWT-based user authentication, a persistent and fully interactive shopping cart, a complete order placement and management flow, and a user-driven product commenting system to enhance engagement and overall shopping experience.",
    imageUrl: "/projects/3legant.png",
    liveDemoUrl: "https://3legant-one-beta.vercel.app/",
    githubUrl: "https://github.com/MTIT396/3Legant_FE",
    techs: [
      {
        name: "React",
        iconUrl: "/icons/react.svg",
      },
      {
        name: "Typescript",
        iconUrl: "/icons/ts.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl: "/icons/tailwind.svg",
      },
      {
        name: "HTML",
        iconUrl: "/icons/html.svg",
      },
      {
        name: "CSS",
        iconUrl: "/icons/css.svg",
      },
      {
        name: "JavaScript",
        iconUrl: "/icons/js.svg",
      },
      {
        name: "Node.js",
        iconUrl: "/icons/nodejs.svg",
      },
      {
        name: "MySQL",
        iconUrl: "/icons/mysql.svg",
      },
      {
        name: "Express.js",
        iconUrl: "/icons/express.svg",
      },
      { name: "VSCode", iconUrl: "/icons/vscode.svg" },
      { name: "Figma", iconUrl: "/icons/figma.svg" },
      { name: "Vercel", iconUrl: "/icons/vercel.svg" },
      {
        name: "Git",
        iconUrl: "/icons/git.svg",
      },
    ],
    features: [
      "Designed and implemented a dynamic product search engine with optimized query handling for fast and accurate results.",
      "Developed robust filtering mechanisms (price range, category, and combined filters) to enhance user browsing experience.",
      "Built secure user authentication and authorization flows using JWT, including token refresh and protected routes.",
      "Implemented a fully interactive shopping cart system with persistent cart state per user.",
      "Developed a streamlined order management flow, from cart submission to order creation and data validation.",
      "Integrated a product review & comment module with real-time updates to improve user engagement.",
    ],
  },
  {
    id: "tmovies_trailer_platform",
    title: "TMovies Trailer Platform",
    description:
      "TMovies Trailer Platform – A modern movie discovery platform where users can search movies, watch trailers, and explore a vast library of films, TV shows, and animations across multiple genres and countries, featuring a smooth cinematic & responsive UI and fast performance. 🎬",
    imageUrl: "/projects/TMoviesgit .png",
    liveDemoUrl: "https://t-movies-trailer-platform.vercel.app/",
    githubUrl: "https://github.com/MTIT396/TMovies_Trailer_Platform",
    techs: [
      {
        name: "Next.js",
        iconUrl: "/icons/nextjs.svg",
      },
      {
        name: "Typescript",
        iconUrl: "/icons/ts.svg",
      },
      {
        name: "Git",
        iconUrl: "/icons/git.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl: "/icons/tailwind.svg",
      },
      {
        name: "CSS",
        iconUrl: "/icons/css.svg",
      },
      {
        name: "JavaScript",
        iconUrl: "/icons/js.svg",
      },
      { name: "VSCode", iconUrl: "/icons/vscode.svg" },
      { name: "Figma", iconUrl: "/icons/figma.svg" },
      { name: "Vercel", iconUrl: "/icons/vercel.svg" },
    ],
    features: [
      "🎬 Watch Movie Trailers – Watch official trailers directly via YouTube integration.",
      "🔎 Fast Movie Search – Instant search with debounced input for better performance.",
      "🎨 Smooth UI/UX Experience – Modern cinematic interface with smooth scrolling sections.",
      "🌍 Massive Movie Library – Explore movies across multiple genres, countries, TV shows, and animation.",
      "🎞 Interactive Movie Carousels – Smooth horizontal sliders powered by Swiper.",
      "⚡ Efficient Data Fetching – Optimized API requests and caching using TanStack Query.",
      "🧠 Global State Management – Lightweight state management using Zustand.",
      "⏳ Skeleton Loading – Elegant loading skeletons for better user experience.",
      "📄 Optimized Pagination – Efficient pagination for browsing large movie collections.",
      "🔐 Secure API Proxy – API requests are proxied to protect the TMDB access token.",
      "🧩 Reusable Component Architecture – Modular, scalable, and reusable component structure.",
      "🪝 Custom React Hooks – Encapsulated reusable logic for cleaner and maintainable code.",
    ],
  },
  {
    id: "weatherappadvance",
    title: "Advanced Weather App",
    description:
      "A modern weather application that provides real-time weather information with a clean, responsive, and user-friendly interface. The app allows users to search for weather conditions across different cities in Vietnam, view detailed metrics, and save search history using Local Storage. Built with React and TypeScript for scalability and robustness.",
    imageUrl: "/projects/WeatherAppAdvance.png",
    liveDemoUrl: "https://weather-app-six-iota-42.vercel.app/",
    githubUrl: "https://github.com/MTIT396/WeatherAppAdvance/",
    techs: [
      {
        name: "React",
        iconUrl: "/icons/react.svg",
      },
      {
        name: "Typescript",
        iconUrl: "/icons/ts.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl: "/icons/tailwind.svg",
      },
      {
        name: "HTML",
        iconUrl: "/icons/html.svg",
      },
      {
        name: "CSS",
        iconUrl: "/icons/css.svg",
      },
      {
        name: "JavaScript",
        iconUrl: "/icons/js.svg",
      },
      { name: "VSCode", iconUrl: "/icons/vscode.svg" },
      { name: "Figma", iconUrl: "/icons/figma.svg" },
      { name: "Vercel", iconUrl: "/icons/vercel.svg" },
      {
        name: "Git",
        iconUrl: "/icons/git.svg",
      },
    ],
    features: [
      "Real-time weather details: temperature, humidity, pressure, visibility, wind speed, and overall condition.",
      "Temperature unit conversion between °C and °F.",
      "Search weather by city/province in Vietnam, with intelligent suggestions.",
      "Search history stored in Local Storage, automatically loaded on app startup.",
      "5-days weather forecast, displayed with detailed time frames.",
      "View weather of multiple regions through reusable forecast components.",
      "Responsive and modern UI using TailwindCSS for seamless mobile, tablet, and desktop experience.",
      "Optimized performance through React hooks, component splitting, and local caching.",
    ],
  },

  {
    id: "todolist",
    title: "Advanced Todolist App",
    description:
      "Built an advanced Todo List application using React and TypeScript, featuring task creation with priority levels, category-based organization, filtering for completed and active items, a responsive light/dark mode UI, and persistent data storage via Local Storage to ensure a smooth and consistent user experience.",
    imageUrl: "/projects/Todolist.png",
    liveDemoUrl: "https://todo-list-rho-liart.vercel.app/",
    githubUrl: "https://github.com/MTIT396/TodoList",
    techs: [
      {
        name: "React",
        iconUrl: "/icons/react.svg",
      },
      {
        name: "Typescript",
        iconUrl: "/icons/ts.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl: "/icons/tailwind.svg",
      },
      {
        name: "HTML",
        iconUrl: "/icons/html.svg",
      },
      {
        name: "CSS",
        iconUrl: "/icons/css.svg",
      },
      {
        name: "JavaScript",
        iconUrl: "/icons/js.svg",
      },
      { name: "VSCode", iconUrl: "/icons/vscode.svg" },
      { name: "Figma", iconUrl: "/icons/figma.svg" },
      { name: "Vercel", iconUrl: "/icons/vercel.svg" },
      {
        name: "Git",
        iconUrl: "/icons/git.svg",
      },
    ],
    features: [
      "Developed an advanced Todo List application using React and TypeScript for type-safe, scalable code.",
      "Implemented task creation with support for setting priority levels.",
      "Added category assignment for todos to improve task organization.",
      "Built filtering options to display completed or active tasks efficiently.",
      "Implemented light/dark mode with dynamic UI theme switching.",
      "Persisted all todo data using Local Storage for a seamless user experience across sessions.",
    ],
  },
  {
    id: "weatherapp",
    title: "Basic Weather App",
    description:
      "Built a modern Weather App using React integrating the OpenWeatherMap API to display real-time weather conditions, including temperature, humidity, and wind speed, with a location search feature for cities/provinces and a sleek glass-morphism UI for an enhanced user experience.",
    imageUrl: "/projects/WeatherAppBasic.png",
    liveDemoUrl: "https://weather-app-basic-lake.vercel.app/",
    githubUrl: "https://github.com/MTIT396/WeatherAppBasic/",
    techs: [
      {
        name: "React",
        iconUrl: "/icons/react.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl: "/icons/tailwind.svg",
      },
      {
        name: "HTML",
        iconUrl: "/icons/html.svg",
      },
      {
        name: "CSS",
        iconUrl: "/icons/css.svg",
      },
      {
        name: "JavaScript",
        iconUrl: "/icons/js.svg",
      },
      { name: "VSCode", iconUrl: "/icons/vscode.svg" },
      { name: "Figma", iconUrl: "/icons/figma.svg" },
      { name: "Vercel", iconUrl: "/icons/vercel.svg" },
      { name: "Git", iconUrl: "/icons/git.svg" },
    ],
    features: [
      "Integrated OpenWeatherMap API to fetch and display real-time weather data.",
      "Displayed detailed weather metrics including temperature, humidity, and wind speed.",
      "Implemented location search functionality for cities and provinces.",
      "Designed a clean, modern interface using glassmorphism UI principles for an enhanced user experience.",
    ],
  },
];
export const techStacks = [
  {
    name: "HTML",
    iconUrl: "/icons/html.svg",
  },
  {
    name: "CSS",
    iconUrl: "/icons/css.svg",
  },
  {
    name: "JavaScript",
    iconUrl: "/icons/js.svg",
  },
  {
    name: "React",
    iconUrl: "/icons/react.svg",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "/icons/tailwind.svg",
  },
  {
    name: "Vercel",
    iconUrl: "/icons/vercel.svg",
  },
  {
    name: "Node.js",
    iconUrl: "/icons/nodejs.svg",
  },
  {
    name: "MySQL",
    iconUrl: "/icons/mysql.svg",
  },
  {
    name: "MongoDB",
    iconUrl: "/icons/mongodb.svg",
  },
  {
    name: "Next.js",
    iconUrl: "/icons/nextjs.svg",
  },
  {
    name: "Express.js",
    iconUrl: "/icons/express.svg",
  },
  {
    name: "Typescript",
    iconUrl: "/icons/ts.svg",
  },
  {
    name: "Git",
    iconUrl: "/icons/git.svg",
  },
];
export const statsData = [
  {
    icon: Code,
    value: projects.length,
    title: "Total Projects",
    subtitle: "Innovative web solutions crafted",
  },
  {
    icon: Award,
    value: 1,
    title: "Achievements",
    subtitle: "Professional skills validated",
  },
  {
    icon: Globe,
    value: 1,
    title: "Years of Experience",
    subtitle: "Continuous learning journey",
  },
];
export const socialsConnection: Social[] = [
  {
    title: "Instagram",
    subtitle: "lemith.06",
    iconUrl: "/media/insta.svg",
    href: "https://www.instagram.com/lemith.06/",
  },
  {
    title: "Github",
    subtitle: "MTIT396",
    iconUrl: "/media/github.svg",
    href: "https://github.com/MTIT396",
  },
  {
    title: "Linkedin",
    subtitle: "Thiện Minh",
    iconUrl: "/media/linkedin.svg",
    href: "https://www.linkedin.com/in/thi%E1%BB%87n-minh-323285329/",
  },
  {
    title: "Tiktok",
    subtitle: "mithz___",
    iconUrl: "/media/tiktok.svg",
    href: "https://www.tiktok.com/@mithz___",
  },
];
