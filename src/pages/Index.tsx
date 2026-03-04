import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const Index = () => {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const otherPosts = posts.filter((p) => p.id !== featuredPost.id);

  useEffect(() => {
    document.title = "FutureByte – Tech Insights on AI, Programming & Emerging Tech";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <main className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <section className="mb-12">
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Ad Placeholder */}
        <div className="mb-12 bg-secondary/50 rounded-xl border border-border p-4 text-center">
          <p className="text-xs text-muted-foreground">Advertisement</p>
          <div className="mt-2 h-24 bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Ad Space</span>
          </div>
        </div>

        {/* Blog Grid + Sidebar */}
        <div id="posts" className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <BlogSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
