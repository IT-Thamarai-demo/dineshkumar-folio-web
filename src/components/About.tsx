import { Award, Target, Zap, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const strengths = [
    { icon: Zap, title: "Quick Learner", description: "Rapidly adapts to new technologies and frameworks" },
    { icon: Target, title: "Problem Solver", description: "Strong analytical and problem-solving abilities" },
    { icon: Award, title: "Attention to Detail", description: "Meticulous code quality and best practices" },
    { icon: Clock, title: "Time Management", description: "Efficient project delivery and deadline management" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30" ref={ref}>
      <div className={`container mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 hero-gradient mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate <span className="font-semibold text-primary">Python Full Stack Developer</span> currently 
              pursuing my Bachelor's degree in Computer Science at the University College of Engineering, Villupuram, 
              maintaining a strong CGPA of <span className="font-semibold">8.3</span>.
            </p>
            <p className="text-lg leading-relaxed">
              My expertise lies in crafting <span className="font-semibold text-primary">efficient Python applications</span>, 
              designing robust database solutions with SQL, and building modern web interfaces. I'm passionate about 
              writing clean, maintainable code and continuously expanding my knowledge in the Django MVC framework.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive on solving complex problems and transforming ideas into functional, user-friendly applications 
              that make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl shadow-lg card-hover border border-border"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
