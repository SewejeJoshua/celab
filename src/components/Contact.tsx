import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Lagos, Nigeria",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "celabtech001@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 (810) 585-9773",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Let's create something amazing together
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Get in touch and 
            let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.label}</h4>
                    <p className="text-muted-foreground mt-1">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-secondary rounded-2xl">
              <h4 className="font-display font-bold text-foreground mb-2">
                Office Hours
              </h4>
              <p className="text-muted-foreground text-sm">
                Monday - Saturday: 9:00 AM - 6:00 PM PST
                <br />
                {/* Saturday - Sunday: Closed */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;