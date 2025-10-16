import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "A Passionate Python Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="gradient-text">Dineshkumar V D</span>
            </h1>
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl text-muted-foreground min-h-[3rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Building efficient, scalable, and user-friendly web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="hero-gradient text-white hover:opacity-90"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Dineshkumar V D" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 hero-gradient opacity-10"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-primary">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
