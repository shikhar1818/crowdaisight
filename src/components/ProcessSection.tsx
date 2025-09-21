import { Play, Cpu, BarChart3, AlertTriangle, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Play className="w-8 h-8 text-accent" />,
      title: "Input Live Video Feed",
      description: "Connect CCTV cameras, drones, or mobile devices to capture real-time footage of crowds.",
      color: "from-accent to-tech-cyan"
    },
    {
      icon: <Cpu className="w-8 h-8 text-tech-blue" />,
      title: "YOLOv8 Detection",
      description: "Advanced AI processes video frames to detect and count people with 95% accuracy.",
      color: "from-tech-blue to-tech-purple"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-tech-cyan" />,
      title: "Analyze Density & Movement",
      description: "System analyzes crowd density, flow patterns, and identifies potential risk areas.",
      color: "from-tech-cyan to-neon-blue"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-neon-green" />,
      title: "Alerts & Heatmaps",
      description: "Real-time notifications and visual heatmaps are sent to crowd management teams.",
      color: "from-neon-green to-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            How It <span className="text-tech-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered system processes live video feeds in real-time to provide 
            instant crowd insights and safety alerts.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-tech-blue via-tech-cyan to-neon-green transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className={`card-tech text-center animate-fade-in-up delay-${(index + 1) * 100}`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-sm font-bold text-white`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 mt-6`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-background rounded-full p-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-scale-in delay-100">
            <div className="text-3xl font-bold text-glow mb-2">&lt;100ms</div>
            <div className="text-sm text-muted-foreground">Processing Latency</div>
          </div>
          <div className="text-center animate-scale-in delay-200">
            <div className="text-3xl font-bold text-tech-blue mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Detection Accuracy</div>
          </div>
          <div className="text-center animate-scale-in delay-300">
            <div className="text-3xl font-bold text-tech-cyan mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Cameras Supported</div>
          </div>
          <div className="text-center animate-scale-in delay-400">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;