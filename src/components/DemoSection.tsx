import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, BarChart3, Zap } from "lucide-react";
import heatmapImage from "@/assets/heatmap-demo.jpg";

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            See Our <span className="text-tech-gradient">AI in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time crowd detection and analysis with our advanced AI visualization system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Demo Video/Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src={heatmapImage} 
                alt="AI crowd detection heatmap visualization"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg"
                  className="btn-hero rounded-full w-20 h-20 p-0 shadow-[var(--shadow-neon)]"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
              
              {/* Coming Soon Badge */}
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                Live Demo Available
              </Badge>
              
              {/* AI Detection Indicators */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs text-accent font-medium">AI Active</span>
                </div>
                <div className="bg-tech-blue/20 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
                  <span className="text-xs text-tech-blue font-medium">247 Detected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="space-y-8">
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-3xl font-heading font-bold mb-6">
                Real-Time AI <span className="text-glow">Visualization</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Watch our AI system detect and analyze crowd patterns in real-time, 
                providing instant insights and safety alerts for venue managers.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4 animate-fade-in-up delay-200">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-tech-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Live Detection Boxes</h4>
                  <p className="text-muted-foreground">Every person is detected and tracked with bounding boxes and confidence scores.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in-up delay-300">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Density Heatmaps</h4>
                  <p className="text-muted-foreground">Color-coded overlays show crowd density levels from safe to critical zones.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in-up delay-400">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-cyan to-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Instant Alerts</h4>
                  <p className="text-muted-foreground">Automatic notifications when dangerous crowd conditions are detected.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="btn-tech">
                Request Full Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Demo Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-scale-in delay-100">
            <div className="text-4xl font-bold text-glow mb-2">15fps</div>
            <div className="text-sm text-muted-foreground">Real-time Processing</div>
          </div>
          <div className="text-center animate-scale-in delay-200">
            <div className="text-4xl font-bold text-tech-blue mb-2">500+</div>
            <div className="text-sm text-muted-foreground">People Tracked</div>
          </div>
          <div className="text-center animate-scale-in delay-300">
            <div className="text-4xl font-bold text-tech-cyan mb-2">4K</div>
            <div className="text-sm text-muted-foreground">Resolution Support</div>
          </div>
          <div className="text-center animate-scale-in delay-400">
            <div className="text-4xl font-bold text-accent mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Scalable Cameras</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;