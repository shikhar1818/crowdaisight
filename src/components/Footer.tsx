import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#process" },
    { name: "Demo", href: "#demo" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-primary/10 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-glow">Smart Crowd</span> Management AI
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Making large gatherings safer with real-time AI monitoring and predictive analytics. 
              Protecting lives through cutting-edge computer vision technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Global Headquarters: Silicon Valley, CA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-tech-blue" />
                <span className="text-muted-foreground">+1 (555) 123-CROWD</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-tech-cyan" />
                <span className="text-muted-foreground">hello@crowdmanagement.ai</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                API Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Technical Papers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Case Studies
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Support Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2024 Smart Crowd Management AI. All rights reserved. | Powered by YOLOv8 & Advanced Computer Vision
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-10 h-10 p-0 border-accent/30 hover:border-accent hover:bg-accent/10"
                aria-label={social.label}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>

        {/* Tech Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-tech-blue/10 rounded-full border border-accent/20">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-accent">AI System Status: Online & Monitoring</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;