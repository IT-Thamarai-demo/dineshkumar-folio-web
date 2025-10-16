import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const projects = [
    {
      title: "Login and Registration System",
      description: "A secure authentication system built with Flask, featuring user registration, login functionality, and session management with SQLite database integration.",
      technologies: ["Flask", "HTML", "CSS", "SQLite"],
      github: "https://github.com/dineshkumarvd",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills, built with modern web technologies and deployed on GitHub Pages.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      github: "https://github.com/dineshkumarvd",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30" ref={ref}>
      <div className={`container mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 hero-gradient mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient opacity-20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="hero-gradient text-white"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
