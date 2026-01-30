import { Palette, Code, LineChart, Smartphone, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Identity",
    description:
      "Strategic brand development that captures your essence and resonates with your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web solutions built with modern technologies for performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform applications that deliver seamless user experiences.",
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description:
      "Data-driven strategies that align your digital presence with business objectives.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description:
      "End-to-end commerce solutions that convert visitors into loyal customers.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and customer data.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
            Everything you need to succeed online
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From concept to launch and beyond, we provide comprehensive digital 
            services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;