import { useEffect, useState } from "react";
import { Shield, Users, MapPin, TrendingUp } from "lucide-react";

const ImpactSection = () => {
  const [counters, setCounters] = useState({
    detection: 0,
    lives: 0,
    venues: 0,
    efficiency: 0
  });

  const finalValues = {
    detection: 90,
    lives: 10000,
    venues: 500,
    efficiency: 85
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        detection: Math.min(prev.detection + (finalValues.detection / steps), finalValues.detection),
        lives: Math.min(prev.lives + (finalValues.lives / steps), finalValues.lives),
        venues: Math.min(prev.venues + (finalValues.venues / steps), finalValues.venues),
        efficiency: Math.min(prev.efficiency + (finalValues.efficiency / steps), finalValues.efficiency)
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  const impacts = [
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      value: Math.round(counters.detection),
      suffix: "%",
      label: "Faster Detection",
      description: "Our AI system detects overcrowding 90% faster than traditional monitoring methods.",
      color: "text-accent"
    },
    {
      icon: <Users className="w-12 h-12 text-tech-blue" />,
      value: Math.round(counters.lives).toLocaleString(),
      suffix: "+",
      label: "Lives Protected",
      description: "Thousands of lives can be protected through early detection and prevention systems.",
      color: "text-tech-blue"
    },
    {
      icon: <MapPin className="w-12 h-12 text-tech-cyan" />,
      value: Math.round(counters.venues),
      suffix: "+",
      label: "Venues Supported",
      description: "Scalable for stadiums, temples, festivals, airports, and major tourist hubs worldwide.",
      color: "text-tech-cyan"
    },
    {
      icon: <Shield className="w-12 h-12 text-neon-green" />,
      value: Math.round(counters.efficiency),
      suffix: "%",
      label: "Safety Improvement",
      description: "Significant reduction in crowd-related incidents through predictive analytics.",
      color: "text-neon-green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            Making a <span className="text-glow">Global Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered crowd management system is transforming safety standards 
            across venues worldwide, preventing incidents before they occur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className={`card-tech text-center animate-scale-in delay-${(index + 1) * 100}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center">
                  {impact.icon}
                </div>
              </div>
              
              <div className={`text-5xl font-bold mb-2 ${impact.color}`}>
                {impact.value}{impact.suffix}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{impact.label}</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-r from-secondary/30 to-muted/30 rounded-2xl p-8 animate-fade-in-up">
          <h3 className="text-3xl font-heading font-semibold text-center mb-8">
            Protecting People <span className="text-tech-gradient">Everywhere</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🏟️</div>
              <div className="font-semibold">Sports Stadiums</div>
              <div className="text-sm text-muted-foreground">Match day safety</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <div className="font-semibold">Religious Sites</div>
              <div className="text-sm text-muted-foreground">Temple gatherings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎪</div>
              <div className="font-semibold">Festivals</div>
              <div className="text-sm text-muted-foreground">Concert venues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏢</div>
              <div className="font-semibold">Transit Hubs</div>
              <div className="text-sm text-muted-foreground">Airports & stations</div>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-heading font-semibold mb-6">
            Deployed Across <span className="text-glow">50+ Countries</span>
          </h4>
          <div className="flex justify-center items-center gap-8 text-6xl">
            <span>🇺🇸</span>
            <span>🇮🇳</span>
            <span>🇬🇧</span>
            <span>🇩🇪</span>
            <span>🇯🇵</span>
            <span>🇦🇺</span>
            <span>🇧🇷</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;