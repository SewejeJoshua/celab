"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
   

    title: "EarlyChildhood",
    category: "Education",
    status: "Deployed",
    desc: "A digital platform focused on early childhood development, enabling structured learning, child data management, and seamless interaction between caregivers and administrators.",
    tech: ["React", "TypeScript", "API Integration"],
    type: "Web App",
    link: "https://early-childhood.onrender.com/",
  },
  {
    title: "Comfort Homes CRM",
    category: "Real Estate",
    status: "Deployed",
    desc: "Comfort Homes & Properties Ltd stands as Abuja's foremost powerhouse, where success seamlessly meets innovation. This CRM streamlines property management, client relations, and operational efficiency.",
    tech: ["Mobile App"],
    type: "iOS App",
    link: "https://apps.apple.com/ng/app/comfort-homes-crm/id6761488550",
  },
  {
    title: "Qiimeet",
    category: "Social Platform",
    status: "Deployed",
    desc: "Meet real people, chat, and build genuine connections on Qiimeet. Designed for authentic engagement, real-time messaging, and meaningful interactions.",
    tech: ["Mobile App"],
    type: "Android App",
    link: "https://play.google.com/store/apps/details?id=com.qiimeet",
  },
  {
     title: "OFAS",
    category: "Healthcare",
    status: "Currently Building",
    desc: "Comprehensive asthma patient management platform featuring inhaler tracking, trigger logging, peak flow monitoring, and emergency action plans for improved patient outcomes.",
    tech: ["React Native", "Django", "PostgreSQL", "Figma"],
    type: "Mobile & Web",
    link: "https://ofas.onrender.com/",
    highlight: true,
  },
  {
    title: "MedConnect",
    category: "Healthcare",
    desc: "Telemedicine platform connecting patients with doctors — including video consultations, appointment scheduling, and medical records management.",
    tech: ["React Native", "Django", "PostgreSQL"],
    type: "Mobile & Web",
  },
  {
    title: "ClinicFlow EHR",
    category: "Healthcare",
    desc: "Electronic health records system designed to streamline patient data, lab results, and billing within a unified interface.",
    tech: ["React", "Python", "PostgreSQL"],
    type: "Web App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        
        {/* Header (same style as Services) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Projects
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
            Projects That Make an Impact
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A selection of real-world systems and products across healthcare, real estate, and social platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Card = (
              <div
                className={`group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg flex flex-col ${
                  p.highlight ? "border-accent/40" : ""
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground">
                    {p.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {p.status && (
                      <span
                        className={`text-xs font-medium ${
                          p.status === "Deployed"
                            ? "text-green-500"
                            : "text-accent"
                        }`}
                      >
                        {p.status === "Deployed" ? "✅" : "🚀"}
                      </span>
                    )}

                    {p.link && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {p.type}
                  </span>

                  {p.status && (
                    <span className="text-xs text-muted-foreground">
                      {p.status}
                    </span>
                  )}
                </div>

                {/* Bottom hover line (same as Services) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            );

            return p.link ? (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={p.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;