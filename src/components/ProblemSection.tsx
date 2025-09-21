import { AlertTriangle, Users, TrendingDown, AlertCircle } from "lucide-react";
import problemImage from "@/assets/problem-infographic.jpg";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Users className="w-12 h-12 text-destructive" />,
      title: "Overcrowding",
      description: "Dense crowds in stadiums and temples lead to dangerous situations and potential stampedes."
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-tech-blue" />,
      title: "Inefficient Movement",
      description: "Poor crowd flow management causes bottlenecks and increases safety risks."
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-accent" />,
      title: "Lack of Real-time Alerts",
      description: "Traditional monitoring systems fail to provide immediate warnings for dangerous situations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            <span className="text-destructive">The Challenge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Large gatherings in stadiums, temples, and tourist spots often lead to overcrowding, 
            stampedes, and unsafe conditions that traditional monitoring systems cannot effectively manage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src={problemImage} 
                alt="Crowd management challenges infographic"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Problem Points */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`card-tech animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/50 rounded-lg">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-scale-in delay-100">
            <div className="text-4xl font-bold text-destructive mb-2">2000+</div>
            <div className="text-sm text-muted-foreground">Annual Stampede Incidents</div>
          </div>
          <div className="text-center animate-scale-in delay-200">
            <div className="text-4xl font-bold text-tech-blue mb-2">45%</div>
            <div className="text-sm text-muted-foreground">Preventable Accidents</div>
          </div>
          <div className="text-center animate-scale-in delay-300">
            <div className="text-4xl font-bold text-accent mb-2">78%</div>
            <div className="text-sm text-muted-foreground">Detection Delay</div>
          </div>
          <div className="text-center animate-scale-in delay-400">
            <div className="text-4xl font-bold text-tech-cyan mb-2">100M+</div>
            <div className="text-sm text-muted-foreground">People at Risk</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;