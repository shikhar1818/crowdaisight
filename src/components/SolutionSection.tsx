import { Eye, AlertTriangle, BarChart3, TrendingUp, Zap, Shield, Brain, Camera } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Eye className="w-12 h-12 text-accent" />,
      title: "Real-Time Detection",
      description: "YOLOv8-powered people counting from CCTV and drone feeds with 95% accuracy in milliseconds.",
      details: ["Computer Vision AI", "Multi-camera Integration", "Live Video Processing", "Instant Detection"]
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-destructive" />,
      title: "Overcrowding Alerts",
      description: "Automatic detection of congestion and risky areas with immediate notification systems.",
      details: ["Smart Thresholds", "Multi-level Alerts", "Emergency Protocols", "Instant Notifications"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-tech-blue" />,
      title: "Heatmaps & Dashboards",
      description: "Visual insights and analytics for crowd managers with comprehensive monitoring tools.",
      details: ["Real-time Heatmaps", "Analytics Dashboard", "Historical Data", "Custom Reports"]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-tech-cyan" />,
      title: "Predictive Forecasting",
      description: "AI predicts crowd build-up trends and potential bottlenecks before they occur.",
      details: ["Pattern Recognition", "Future Predictions", "Risk Assessment", "Proactive Measures"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            Our <span className="text-tech-gradient">AI-Driven Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced artificial intelligence and computer vision technology working together 
            to create the safest possible environment for large gatherings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card-tech animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-secondary to-muted rounded-xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex}
                        className="flex items-center gap-2 text-sm text-accent"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-secondary/50 to-muted/50 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-3xl font-heading font-semibold text-center mb-8">
            Powered by <span className="text-glow">Cutting-Edge Technology</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Brain className="w-12 h-12 text-accent mx-auto mb-3" />
              <div className="font-semibold">YOLOv8 AI</div>
              <div className="text-sm text-muted-foreground">Deep Learning</div>
            </div>
            <div className="text-center">
              <Camera className="w-12 h-12 text-tech-blue mx-auto mb-3" />
              <div className="font-semibold">Computer Vision</div>
              <div className="text-sm text-muted-foreground">Real-time Processing</div>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-tech-cyan mx-auto mb-3" />
              <div className="font-semibold">Edge Computing</div>
              <div className="text-sm text-muted-foreground">Ultra-low Latency</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-neon-green mx-auto mb-3" />
              <div className="font-semibold">Secure Cloud</div>
              <div className="text-sm text-muted-foreground">Enterprise-grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;