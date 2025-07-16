import { JSX } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb,SiTailwindcss, SiAppwrite, SiSupabase, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress, SiShadcnui, SiGit, SiVercel, SiFigma, SiPostman, SiClerk } from "react-icons/si";
import { RiNextjsFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';

export const techIconMap: Record<string, JSX.Element> = {
  React: <FaReact className="text-blue-500 w-5 h-5" />,
  Nextjs: <RiNextjsFill className="w-5.5 h-5.5 "/>,
  TypeScript: <SiTypescript className="text-blue-600 w-5 h-5" />,
  JavaScript: <SiJavascript className="text-yellow-400 w-5 h-5" />,
  Tailwind: <SiTailwindcss className="text-teal-400 w-5 h-5" />,
  "shadcn/ui": <SiShadcnui className="text-gray-800 w-5 h-5" />,
  HTML5: <SiHtml5 className="text-orange-600 w-5 h-5" />,
  CSS3: <SiCss3 className="text-blue-500 w-5 h-5" />,
  Node: <FaNodeJs className="text-green-600 w-5 h-5" />,
  Express: <SiExpress className="text-black w-5 h-5" />,
  "REST APIs": <span className="text-xs text-gray-500">API</span>,
  Supabase: <SiSupabase className="text-green-500 w-5 h-5" />,
  Appwrite: <SiAppwrite className="text-pink-500 w-5 h-5" />,
  Clerk: <SiClerk className="text-purple-500 w-5 h-5" />,
  Git: <SiGit className="text-orange-500 w-5 h-5" />,
  Vercel: <SiVercel className="text-black w-5 h-5" />,
  Figma: <SiFigma className="text-pink-400 w-5 h-5" />,
  Postman: <SiPostman className="text-orange-400 w-5 h-5" />,
  "VS Code": <VscVscode className="text-blue-500 h-5 w-5" />,
  APIFootball: <img src="/apifootball.png" className="rounded-full w-5 h-5"/>,
  MongoDB: <SiMongodb className="text-green-500 h-5 w-5" />
};
