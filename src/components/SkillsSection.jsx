import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { image: "/skills/HTML.png", name: "HTML/HTML5", level: 95, category: "frontend" },
  { image: "/skills/CCS.png", name: "CSS/CSS3", level: 85, category: "frontend" },
  { image: "/skills/JavaScript-logo.png", name: "JavaScript", level: 80, category: "frontend" },
  { image: "/skills/React.jpg", name: "React", level: 85, category: "frontend" },
  { image: "/skills/Ag.jpg", name: "Ag Grid", level: 95, category: "frontend" },
  { image: "/skills/Ts.png", name: "TypeScript", level: 35, category: "frontend" },
  { image: "/skills/bootstrap.jpeg", name: "Bootstrap", level: 90, category: "frontend" },
  { image: "/skills/jQuery.png", name: "JQuery", level: 80, category: "frontend" },
  { image: "/skills/sass.jpg", name: "LESS/SASS", level: 70, category: "frontend" },
  { image: "/skills/UIX.jpg", name: "UI/UX", level: 85, category: "frontend" },

  // Backend
  { image: "/skills/php.png", name: "Basic PHP", level: 80, category: "backend" },
  { image: "/skills/yii2.png", name: "Basic Yii2", level: 70, category: "backend" },

  // Tools
  { image: "/skills/git.png", name: "Git/GitHub", level: 90, category: "tools" },
  { image: "/skills/figma.jpg", name: "Figma", level: 70, category: "tools" },
  { image: "/skills/vs code.jpg", name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-5 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs flex md:flex-col items-center md:items-start card-hover"
            >
              {/* Image (always visible) */}
              <img
                src={skill.image || "/skills/skills.jpg"}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain mr-4 md:mr-0 md:mb-3 rounded-md"
              />

              {/* Name (only on medium and up) */}
              <div className="hidden md:block text-left mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress bar & percentage (stacked on large, inline on small) */}
              <div className="flex-1 w-full">
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
