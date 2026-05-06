import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-20 md-pb">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open for collaboration
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up opacity-0 delay-100">
            We build digital
            <br />
            <span className="text-gradient">experiences</span> that matter
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 delay-200">
            We are an agency that helps ambitious brands design and build high-performing digital systems that drive growth, increase revenue, and position them to scale with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-300">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 group flex items-center justify-center"
              onClick={scrollToContact}
            >
              Start a project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Example secondary button (optional) */}
            {/* <Button
              variant="ghost"
              size="lg"
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Showreel
            </Button> */}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-up opacity-0 delay-400">
            {[
              { value: "15+", label: "Projects Delivered" },
              { value: "10+", label: "Happy Clients" },
              { value: "6", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
