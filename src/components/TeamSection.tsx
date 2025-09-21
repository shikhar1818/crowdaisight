import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      expertise: "Computer Vision & Deep Learning",
      avatar: "👩‍💻",
      description: "PhD in Computer Vision from MIT. Leading expert in real-time object detection and crowd analysis algorithms."
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Architect",
      expertise: "System Design & Scalability",
      avatar: "👨‍💼",
      description: "Former Google engineer specializing in large-scale distributed systems and edge computing solutions."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Safety Systems Expert",
      expertise: "Emergency Management & Analytics",
      avatar: "👩‍🔬",
      description: "15+ years in crowd safety research. Published expert on emergency response and predictive safety systems."
    },
    {
      name: "Alex Thompson",
      role: "DevOps & Infrastructure",
      expertise: "Cloud Architecture & Deployment",
      avatar: "👨‍🔧",
      description: "Cloud infrastructure specialist ensuring 99.9% uptime and seamless scaling across global deployments."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            Meet Our <span className="text-tech-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our world-class team combines decades of experience in AI, computer vision, 
            safety systems, and large-scale infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`card-tech text-center animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-tech-blue rounded-full flex items-center justify-center text-4xl">
                  {member.avatar}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse"></div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-accent font-medium mb-1">{member.role}</div>
              <div className="text-sm text-muted-foreground mb-4">{member.expertise}</div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-accent/30 hover:border-accent">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-tech-blue/30 hover:border-tech-blue">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-tech-cyan/30 hover:border-tech-cyan">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-secondary/30 to-muted/30 rounded-2xl p-8 animate-scale-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-glow mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-blue mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Research Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-cyan mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Dedicated to Safety</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Want to Join Our Mission?
          </h3>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals passionate about AI and safety.
          </p>
          <Button className="btn-tech">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;