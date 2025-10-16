import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const certifications = [
    "Python Full Stack Developer Certification",
    "SQL and Database Management Course",
    "Web Development Essentials (HTML, CSS, JavaScript)",
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 hero-gradient mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering in Computer Science</h3>
                <p className="text-primary font-semibold mb-1">University College of Engineering, Villupuram</p>
                <p className="text-muted-foreground mb-2">2022 - 2025</p>
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold">
                  CGPA: 8.3
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                      <span className="text-lg">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
