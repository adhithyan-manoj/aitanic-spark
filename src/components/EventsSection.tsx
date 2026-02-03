import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sprintAiImage from "@/assets/event-sprint-ai.jpg";
import webXcelerateImage from "@/assets/event-webxcelerate.jpg";

const events = [
  {
    image: sprintAiImage,
    title: "Sprint AI",
    category: "AI-Powered Ideathon",
    description: "An AI-powered ideathon by the Dept. of Computer Science, St. Berchmans College. Teams of 1-4 tackle niche problems, present innovative solutions, and optionally build an MVP prototype.",
    prize: "₹10,000",
    date: "6 February 2026",
  },
  {
    image: webXcelerateImage,
    title: "WebXcelerate AI",
    category: "AI Frontend Designing",
    description: "Showcase your frontend design skills powered by AI tools. Create stunning, responsive web interfaces and compete for exciting prizes.",
    prize: "₹10,000",
    date: "6 February 2026",
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

        {/* Event Cards - Image Based */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Event Poster Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Prize Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
                    <span className="text-primary font-display font-bold">Prize Pool: {event.prize}</span>
                  </div>
                  
                  {/* Date */}
                  <div className="text-sm text-muted-foreground mb-2">{event.date}</div>
                  
                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-primary font-medium mb-4">{event.category}</p>

                  {/* Register Button */}
                  <Button 
                    variant="neon" 
                    className="w-full group/btn"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Events Coming Soon */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">More events coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
