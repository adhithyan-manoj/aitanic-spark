import { Button } from "@/components/ui/button";
import { Code, Gamepad2, Brain, ArrowRight } from "lucide-react";

const events = [
  {
    icon: Code,
    title: "Code Sprint",
    category: "Technical",
    description: "A high-intensity competitive programming challenge where participants solve algorithmic problems under time pressure. Test your coding skills and compete against the best programmers.",
    highlights: ["3-hour duration", "Multiple rounds", "Cash prizes"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI Hackathon",
    category: "Innovation",
    description: "Build innovative AI-powered solutions to solve real-world problems. Form teams, brainstorm ideas, and develop working prototypes within 24 hours.",
    highlights: ["24-hour event", "Team of 4", "Mentorship available"],
    color: "secondary",
  },
  {
    icon: Gamepad2,
    title: "Tech Quiz",
    category: "Fun Event",
    description: "Put your tech knowledge to the test in this exciting quiz competition. From general tech trivia to specific domain questions, prove you're the ultimate tech enthusiast.",
    highlights: ["Multiple rounds", "Solo participation", "Exciting prizes"],
    color: "primary",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participate in exciting events designed to challenge your skills and expand your horizons
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-card-gradient" />
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color === 'primary' ? 'from-primary/5 to-transparent' : 'from-secondary/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 ${event.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                  {event.category}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${event.color === 'primary' ? 'bg-primary/10 group-hover:shadow-[0_0_30px_hsl(185_100%_50%/0.3)]' : 'bg-secondary/10 group-hover:shadow-[0_0_30px_hsl(280_100%_60%/0.3)]'}`}>
                  <event.icon className={`w-8 h-8 ${event.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {event.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${event.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Register Button */}
                <Button 
                  variant={event.color === 'primary' ? 'neon' : 'neon-magenta'} 
                  className="w-full group/btn"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
