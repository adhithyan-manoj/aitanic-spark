import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sprintAiImage from "@/assets/event-sprint-ai.jpg";
import webXcelerateImage from "@/assets/event-webxcelerate.jpg";
import EventDetailsDialog, { EventDetails } from "./EventDetailsDialog";

const events: EventDetails[] = [
  {
    image: sprintAiImage,
    title: "Sprint AI",
    category: "AI-Powered Ideathon",
    description: "An AI-powered ideathon by the Dept. of Computer Science, St. Berchmans College. Teams of 1-4 tackle niche problems, present innovative solutions, and optionally build an MVP prototype. This is your chance to showcase your problem-solving skills and creativity using AI technologies.",
    prize: "₹10,000",
    date: "6 February 2026",
    time: "9:00 AM - 5:00 PM",
    teamSize: "1-4 Members",
    venue: "Computer Science Lab",
    highlights: [
      "AI-powered problem solving",
      "MVP prototype development",
      "Expert mentorship available",
      "Networking opportunities",
      "Certificates for all participants",
      "Cash prizes for winners"
    ],
    rules: [
      "Team size must be between 1-4 members.",
      "All team members must be currently enrolled students.",
      "Each team must register through the official Google Form before the deadline.",
      "Use of AI tools and technologies is encouraged and expected.",
      "Plagiarism or copying existing projects will lead to disqualification.",
      "Teams must present their solution within the given time limit.",
      "Decision of the judges will be final and binding.",
      "Participants must bring their own laptops and required accessories."
    ],
    registrationLink: "https://forms.google.com/sprint-ai-registration",
    coordinators: {
      teachers: ["Ms. Dhanya C. Nair (+91 82812 71755)", "Ms. Jasmin Sebastine", "Ms. Rini Elizabeth"],
      students: ["Aromal Sreekumar (+91 7012011756)", "Athul Krishnan", "Adithyan Manoj"]
    }
  },
  {
    image: webXcelerateImage,
    title: "WebXcelerate AI",
    category: "AI Frontend Designing",
    description: "Showcase your frontend design skills powered by AI tools. Create stunning, responsive web interfaces and compete for exciting prizes. This competition challenges you to leverage AI-powered design tools to create beautiful, functional, and user-friendly web interfaces.",
    prize: "₹10,000",
    date: "6 February 2026",
    time: "10:00 AM - 4:00 PM",
    teamSize: "Individual",
    venue: "Computer Science Lab",
    highlights: [
      "AI-assisted web design",
      "Real-time design challenges",
      "Industry expert judges",
      "Portfolio building opportunity",
      "Certificates for all participants",
      "Cash prizes for top performers"
    ],
    rules: [
      "This is an individual competition. No team entries allowed.",
      "Participants must be currently enrolled students.",
      "Register through the official Google Form before the deadline.",
      "Use of AI design tools (Figma AI, Framer, Lovable, etc.) is mandatory.",
      "All designs must be original and created during the competition.",
      "Designs will be judged on creativity, usability, and technical execution.",
      "Pre-made templates or copied designs will result in disqualification.",
      "Participants must bring their own laptops with required software installed.",
      "Internet connectivity will be provided.",
      "The judges' decision is final."
    ],
    registrationLink: "https://forms.google.com/webxcelerate-registration",
    coordinators: {
      teachers: ["Ms. Dhanya C. Nair (+91 82812 71755)", "Ms. Jasmin Sebastine", "Ms. Rini Elizabeth"],
      students: ["Aromal Sreekumar (+91 7012011756)", "Athul Krishnan", "Adithyan Manoj"]
    }
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEventClick = (event: EventDetails) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

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
              onClick={() => handleEventClick(event)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
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
                
                {/* Click Indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-xs font-medium">Click for details</span>
                </div>
                
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

                  {/* View Details Button */}
                  <Button 
                    variant="neon" 
                    className="w-full group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventClick(event);
                    }}
                  >
                    View Details & Register
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

      {/* Event Details Dialog */}
      <EventDetailsDialog 
        event={selectedEvent}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default EventsSection;
