import { Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description:
      "We partner with visionary companies to create digital solutions that drive meaningful impact and sustainable growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Embracing cutting-edge technologies and creative thinking to deliver solutions that stand out in a crowded digital landscape.",
  },
  {
    icon: Users,
    title: "Human Centered",
    description:
      "Every decision we make is guided by empathy and a deep understanding of the people who will use what we create.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Crafting digital excellence since 2020
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We're a team of strategists, designers, and developers united by a 
            passion for creating exceptional digital experiences. Our approach 
            combines creative vision with technical expertise to deliver results 
            that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 card-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;