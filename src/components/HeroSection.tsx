import { useState } from "react";
import { motion } from "framer-motion";
import NewsletterModal from "./NewsletterModal";

const HeroSection = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const scrollToPosts = () => {
    document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Stay Ahead in the World of{" "}
            <span className="text-gradient">Technology</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Daily insights on AI, Programming, and the future of innovation.
            Clear, reliable, and always forward-thinking.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToPosts}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Explore Latest Posts
            </button>
            <button
              type="button"
              onClick={() => setShowNewsletter(true)}
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
        <NewsletterModal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
      </div>
    </section>
  );
};

export default HeroSection;
