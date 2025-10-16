import { Code2, Database, Layout, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const skillCategories = [
    {
      icon: Layout,
      title: "Front-End",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      color: "text-blue-500"
    },
    {
      icon: Code2,
      title: "Back-End & Frameworks",
      skills: ["Python", "Flask", "Django (Ongoing)"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["SQL", "Oracle SQL*Plus", "SQLite"],
      color: "text-purple-500"
    },
    {
      icon: Wrench,
      title: "Tools & OS",
      skills: ["VS Code", "Jupyter Notebook", "Windows", "Linux (Basics)"],
      color: "text-orange-500"
    },
  ];

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className={`container mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 hero-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl shadow-lg border border-border card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="font-bold text-xl">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
