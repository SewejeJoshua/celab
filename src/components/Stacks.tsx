"use client";

const techStack = [
  { name: "Figma", category: "Design", icon: "🎨" },
  { name: "Python", category: "Backend", icon: "🐍" },
  { name: "Django", category: "Framework", icon: "🌐" },
  { name: "JavaScript", category: "Frontend", icon: "⚡" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "React Native", category: "Mobile", icon: "📱" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "TypeScript", category: "Frontend", icon: "🔷" },
  { name: "REST APIs", category: "Backend", icon: "🔗" },
  { name: "Git", category: "DevOps", icon: "📦" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎯" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header (same as Services & Projects) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Tools
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
            Technology Stack
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We choose the right tool for every project — always prioritizing reliability, scalability, and performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="group relative bg-card border border-border rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              {/* Icon */}
               

              {/* Text */}
              <div>
                <p className="font-semibold text-sm text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.category}
                </p>
              </div>

              {/* Bottom hover line (same design system) */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;