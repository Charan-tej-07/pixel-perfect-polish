import { useState } from "react";
import { Link } from "react-router-dom";
import { posts, categories } from "@/data/posts";
import { TrendingUp } from "lucide-react";
import NewsletterModal from "./NewsletterModal";

const BlogSidebar = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const trendingPosts = posts.slice(0, 4);

  return (
    <aside className="space-y-6">
      {/* Trending Posts */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
          <TrendingUp size={16} className="text-primary" />
          Trending Posts
        </h3>
        <div className="space-y-3">
          {trendingPosts.map((post, i) => (
            <Link
              key={post.id}
              to={`/post/${post.slug}`}
              className="flex items-start gap-3 group"
            >
              <span className="text-lg font-bold text-primary/30 min-w-[24px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </p>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="text-sm font-semibold text-foreground mb-2">Newsletter</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Get the latest tech insights delivered to your inbox.
        </p>
        <button
          type="button"
          onClick={() => setShowNewsletter(true)}
          className="w-full px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Subscribe
        </button>
      </div>

      <NewsletterModal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />

      {/* Ad Placeholder */}
      <div className="bg-secondary/50 rounded-xl border border-border p-5 text-center">
        <p className="text-xs text-muted-foreground">Advertisement</p>
        <div className="mt-2 h-48 bg-secondary rounded-lg flex items-center justify-center">
          <span className="text-xs text-muted-foreground">Ad Space</span>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
