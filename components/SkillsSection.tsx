import { techIconMap } from "./TechIcons";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Nextjs",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "shadcn/ui",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node",
      "Express",
      "MongoDB",
      "Supabase",
      "Appwrite",
      "REST APIs",
      "Authentication (Clerk, Supabase Auth)",
    ],
  },
  {
    category: "Tools & Software",
    items: [
      "Git",
      "Vercel",
      "Figma",
      "Postman",
      "VS Code",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-6 dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 border border-indigo-100 dark:border-indigo-900">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400 text-center">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                    <span className="w-6 h-6 flex items-center justify-center">
                      {techIconMap[skill] || null}
                    </span>
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 