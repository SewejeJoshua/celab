import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; 
import Admin  from "@/components/AdminCLT";
import AdminLogin from "@/components/Login";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      {/* <Admin /> */}
      <Footer />
    </main>
  );
};

export default Index;