import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Brain, Atom, Code2, Rocket, CheckCircle2 } from "lucide-react";

const coverItems = [
{ icon: Brain, title: "Artificial Intelligence", desc: "Deep dives into machine learning, LLMs, and AI-powered tools transforming industries." },
{ icon: Atom, title: "Quantum Computing", desc: "Breaking down quantum advancements and their real-world applications." },
{ icon: Code2, title: "Programming & Development", desc: "Practical guides, language updates, and software engineering best practices." },
{ icon: Rocket, title: "Emerging Tech & Startups", desc: "Cutting-edge innovations from Web3, biotech, robotics, and startup ecosystems." }];


const trustPoints = [
"Research-backed articles",
"Clear and practical explanations",
"No clickbait, only valuable insights",
"Regular tech updates"];


const About = () => {
  useEffect(() => {
    document.title = "About FutureByte – Tech Insights on AI, Quantum & Programming";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about FutureByte's mission to simplify complex technology and deliver accurate, practical insights.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Powering the Future,{" "}
              <span className="text-gradient">One Byte at a Time.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              FutureByte delivers clear, reliable, and insightful updates on AI,
              Programming, and emerging technologies shaping tomorrow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To simplify complex technology and deliver accurate, practical
              insights that help developers, tech enthusiasts, and innovators stay ahead.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              What We Cover
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coverItems.map((item, i) =>
            <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 text-center card-hover h-full">
                  <item.icon size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Why Trust TechByte?

            </h2>
            <div className="space-y-4">
              {trustPoints.map((point, i) =>
              <AnimatedSection key={point} delay={i * 0.1}>
                  <div className="flex items-center gap-3 bg-card rounded-xl border border-border p-4">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Behind FutureByte */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Behind TechByte</h2>
            <p className="text-muted-foreground leading-relaxed">
              FutureByte was created by passionate tech enthusiasts dedicated to
              exploring innovation and simplifying complex technology for a global
              audience. Every article is crafted with care, research, and a
              commitment to delivering genuine value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center bg-card rounded-xl border border-border p-10">
            <h2 className="text-2xl font-bold text-foreground">
              Join the Future of Technology
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore our latest articles and stay ahead of the curve.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              
              Explore Latest Articles
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>);

};

export default About;