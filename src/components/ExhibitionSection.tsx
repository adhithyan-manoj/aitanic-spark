import { Button } from "@/components/ui/button";
import { Rocket, Eye, Zap, Box } from "lucide-react";

const exhibitionFeatures = [
  {
    icon: Rocket,
    title: "Student Projects",
    description: "Innovative projects developed by talented students",
  },
  {
    icon: Eye,
    title: "Live Demos",
    description: "Interactive demonstrations of cutting-edge tech",
  },
  {
    icon: Zap,
    title: "Tech Showcases",
    description: "Latest technologies and their applications",
  },
  {
    icon: Box,
    title: "Startup Zone",
    description: "Emerging startups presenting their solutions",
  },
];

const ExhibitionSection = () => {
  return (
    <section id="exhibition" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-glow rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Showcase Zone
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              AITANIC <span className="text-gradient">Exhibition</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Step into the future at our grand exhibition! Witness groundbreaking innovations, 
              interact with cutting-edge technology, and explore creative solutions developed by 
              brilliant minds. From AI-powered applications to IoT solutions, the exhibition 
              showcases the best of what our tech community has to offer.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {exhibitionFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-secondary/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="neon-magenta" size="lg">
              Explore Exhibition
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '30s' }} />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border-2 border-secondary/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              
              {/* Inner Content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-1/4 w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-8 left-4 w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div className="absolute top-1/3 left-0 w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Eye className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSection;
