import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:dineshkumarvd03@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Show success toast
    setTimeout(() => {
      toast({
        title: "Email Client Opened!",
        description: "Your default email client has been opened with the message ready to send.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30" ref={ref}>
      <div className={`container mx-auto max-w-5xl transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 hero-gradient mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            Let's discuss your project or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+917695824007" className="text-lg font-medium hover:text-primary">
                  +91 7695824007
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:dineshkumarvd03@gmail.com" className="text-lg font-medium hover:text-primary">
                  dineshkumarvd03@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/dineshkumarvd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors border border-border"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://github.com/dineshkumarvd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors border border-border"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card"
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-card"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-card resize-none"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full hero-gradient text-white hover:opacity-90 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Opening Email...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
