import { Linkedin, Twitter } from "lucide-react";
import Josh from "@/assets/images/Josh.jpeg";
import Wiz from "@/assets/images/wiz.jpeg";
import Chi from "@/assets/images/chichi.jpeg"; 

const team = [
  {
    name: "Adeyemi Wisdom",
    role: "Founder & CEO / Lead Backend Engineer",
    image: Wiz,
    linkedin: "#",
    twitter: "https://x.com/wisdom_ade87034",
  },
  {
    name: "Seweje Joshua",
    role: "Co-Founder / Lead Frontend Engineer",
    image: Josh,
    linkedin: "https://www.linkedin.com/in/joshua-seweje-7746732a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/Joshuathajosh",
  },
  {
    name: "Chris Chibuka",
    role: "Lead Brand & UX Designer",
    image: Chi,
    linkedin: "https://www.linkedin.com/in/chris-chiboka-36b6b7203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/chiboka_xd",
  },
  // {
  //   name: "David Kim",
  //   role: "Strategy Director",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  //   linkedin: "#",
  //   twitter: "#",
  // },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-10 ">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-2xl md:text-4xl font-bold text-foreground">
            Meet the people behind CelabTech
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A diverse team of experts passionate about creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:flex md:ml-[45px] lg:flex lg:ml-[25px] xl:flex xl:ml-[60px] 2xl:ml-[125px] 2xl:flex sm:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl overflow-hidden card-elevated"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[300px] h-[320px] aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;