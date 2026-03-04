import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-gradient">
              FutureByte
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Delivering clear, reliable, and insightful updates on AI,
              Programming, and emerging technologies shaping tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/category/AI" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                AI
              </Link>
              <Link to="/category/Programming" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Programming
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 FutureByte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
