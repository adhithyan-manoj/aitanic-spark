import { Star, Award, Medal } from "lucide-react";

const sponsors = {
  title: [
    { name: "TechCorp Industries", tier: "Title Sponsor" },
  ],
  gold: [
    { name: "InnovateTech", tier: "Gold Sponsor" },
    { name: "DataDriven AI", tier: "Gold Sponsor" },
  ],
  silver: [
    { name: "CloudNine Solutions", tier: "Silver Sponsor" },
    { name: "ByteForce", tier: "Silver Sponsor" },
    { name: "NexGen Labs", tier: "Silver Sponsor" },
  ],
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're grateful to our sponsors who make AITANIC possible
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Title Sponsor */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-yellow-500">Title Sponsor</span>
          </div>
          <div className="flex justify-center">
            {sponsors.title.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 min-w-[300px]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                    <span className="font-display text-2xl font-bold text-yellow-500">TC</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{sponsor.name}</h3>
                  <span className="text-sm text-yellow-500">{sponsor.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">Gold Sponsors</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 min-w-[240px]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
                    <span className="font-display text-lg font-bold text-amber-400">{sponsor.name.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{sponsor.name}</h3>
                  <span className="text-xs text-amber-400">{sponsor.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Medal className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-400">Silver Sponsors</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative p-5 rounded-xl bg-gradient-to-br from-gray-500/10 to-gray-600/5 border border-gray-500/20 hover:border-gray-400/40 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-500/20 flex items-center justify-center mx-auto mb-2 border border-gray-500/20">
                    <span className="font-display text-sm font-bold text-gray-400">{sponsor.name.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="font-display text-base font-medium text-foreground">{sponsor.name}</h3>
                  <span className="text-xs text-gray-400">{sponsor.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Interested in sponsoring AITANIC?</p>
          <a 
            href="mailto:sponsors@aitanic.tech" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Contact us for sponsorship opportunities
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
