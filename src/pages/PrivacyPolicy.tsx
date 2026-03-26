import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy – TechByte";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 26, 2026</p>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              Welcome to TechByte. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Email Address:</strong> When you subscribe to our newsletter via Mailchimp.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent, browser type, and device information collected automatically.</li>
              <li><strong className="text-foreground">Cookies:</strong> We use cookies to enhance your browsing experience and remember your preferences (e.g., dark mode).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To send you newsletters and updates you've subscribed to.</li>
              <li>To improve our website content and user experience.</li>
              <li>To analyze website traffic and usage patterns.</li>
              <li>To respond to your inquiries or feedback.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Mailchimp:</strong> For email newsletter subscriptions. Their privacy policy can be found at <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mailchimp.com/legal/privacy</a>.</li>
              <li><strong className="text-foreground">YouTube:</strong> For embedded video content. Subject to Google's privacy policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, update, or delete your personal data.</li>
              <li>Unsubscribe from our newsletter at any time via the link in any email.</li>
              <li>Opt out of cookies through your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our social media channels listed on the website.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
