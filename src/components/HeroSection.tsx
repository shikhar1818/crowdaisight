import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Shield, Eye } from "lucide-react";
import heroImage from "@/assets/hero-crowd-ai.jpg";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated particles-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered crowd monitoring in stadium"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-accent/30 rounded-lg animate-pulse">
        <Eye className="w-8 h-8 text-accent m-auto mt-2" />
      </div>
      <div className="absolute top-40 right-20 w-12 h-12 border border-tech-blue/40 rounded-full animate-bounce">
        <Zap className="w-6 h-6 text-tech-blue m-auto mt-1.5" />
      </div>
      <div className="absolute bottom-40 left-20 w-14 h-14 border border-tech-cyan/30 rounded-lg animate-pulse">
        <Shield className="w-7 h-7 text-tech-cyan m-auto mt-1.5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
            <span className="text-glow">AI-Powered</span>
            <br />
            <span className="text-tech-gradient">Smart Crowd</span>
            <br />
            <span className="text-foreground">Management</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Making large gatherings safer with real-time AI monitoring and predictive analytics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button 
              onClick={scrollToFeatures}
              className="btn-hero text-lg px-8 py-4"
              size="lg"
            >
              Explore the Solution
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Tech Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-glow">90%</div>
            <div className="text-sm text-muted-foreground">Faster Detection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-gradient">24/7</div>
            <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">1000+</div>
            <div className="text-sm text-muted-foreground">Lives Protected</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;