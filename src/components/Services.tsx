"use client";

import {
  Palette,
  Code,
  LineChart,
  Smartphone,
  Globe,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Identity",
    description:
      "We develop strategic brand identities that define your voice, communicate your value with clarity, and position you to win in your market.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build high-performance websites and digital platforms engineered for speed, scalability, and conversion—turning visitors into paying customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "We create intuitive mobile experiences that increase engagement, strengthen customer relationships, and expand your digital footprint.",
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description:
      "We design data-driven strategies that align technology with business objectives—unlocking growth, improving performance, and maximizing ROI.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description:
      "We build end-to-end commerce solutions that streamline operations, optimize the buying journey, and significantly increase revenue.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "We implement advanced security systems that protect your infrastructure, secure customer data, and ensure long-term business continuity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Capabilities
          </span>

          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
            What We Do Best
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We design and build intelligent digital systems that power growth,
            improve efficiency, and drive measurable business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <p className="text-lg text-muted-foreground">
            Every solution we build is designed with one goal in mind: to create
            measurable growth and lasting value for your business.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;