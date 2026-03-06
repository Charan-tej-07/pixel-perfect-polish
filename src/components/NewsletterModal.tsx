import { useState, useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAILCHIMP_ACTION =
  "https://gmail.us22.list-manage.com/subscribe/post?u=43583aaad836e47b56f3935b8&id=66857e160a&f_id=009ec2e1f0";

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    onClose();
    setEmail("");
    setStatus("idle");
    setMessage("");
  }, [onClose]);

  // Focus trap & escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();

      // Simple focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      // Submit to Mailchimp via JSONP-style (open in new tab for Mailchimp hosted)
      const form = document.createElement("form");
      form.action = MAILCHIMP_ACTION;
      form.method = "POST";
      form.target = "_blank";

      const emailInput = document.createElement("input");
      emailInput.type = "hidden";
      emailInput.name = "EMAIL";
      emailInput.value = trimmedEmail;
      form.appendChild(emailInput);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setStatus("success");
      setMessage("Thanks for subscribing! Please check your email to confirm.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Subscribe to newsletter"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-foreground mb-2">
              Subscribe to FutureByte
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Get the latest tech insights on AI, Programming & Emerging Tech delivered to your inbox.
            </p>

            {status === "success" ? (
              <div className="text-center py-4">
                <div className="text-3xl mb-3">🎉</div>
                <p className="text-sm font-medium text-primary">{message}</p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 text-sm bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />

                {status === "error" && message && (
                  <p className="text-xs text-destructive">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam, unsubscribe anytime.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
