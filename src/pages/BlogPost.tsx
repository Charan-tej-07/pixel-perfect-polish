import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";
import { ArrowLeft, Clock, User, Tag, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} – FutureByte`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 text-center py-20">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link
            to="/"
            className="text-primary hover:underline text-sm"
          >
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const shareUrl = window.location.href;

  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("```")) {
        return null;
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="text-muted-foreground ml-4 mb-1 list-disc">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
        return (
          <li key={i} className="text-muted-foreground ml-4 mb-1 list-decimal">
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      if (line.startsWith("|")) {
        return (
          <p key={i} className="text-sm text-muted-foreground font-mono bg-secondary px-3 py-1">
            {line}
          </p>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      // Check if it looks like code
      if (
        line.includes("import ") ||
        line.includes("const ") ||
        line.includes("function ") ||
        line.includes("async ") ||
        line.includes("  ") && (line.includes("{") || line.includes("}") || line.includes("(") || line.includes("return"))
      ) {
        return (
          <pre key={i} className="bg-foreground/5 text-foreground text-sm font-mono px-4 py-1 rounded-lg overflow-x-auto">
            {line}
          </pre>
        );
      }
      // Bold text
      const processedLine = line.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-foreground font-semibold">$1</strong>'
      ).replace(
        /`(.*?)`/g,
        '<code class="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
      );
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <article className="max-w-3xl mx-auto">
          {/* Category badge */}
          <Link
            to={`/category/${post.category}`}
            className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
          >
            {post.category}
          </Link>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User size={14} />
              {post.author}
            </span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* Content */}
          <div className="mt-8">{renderContent(post.content)}</div>

          {/* Ad placeholder mid-article */}
          <div className="my-8 bg-secondary/50 rounded-xl border border-border p-4 text-center">
            <p className="text-xs text-muted-foreground">Advertisement</p>
            <div className="mt-2 h-20 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Ad Space</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex items-center gap-2 flex-wrap">
            <Tag size={14} className="text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-3">
            <Share2 size={14} className="text-muted-foreground" />
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Share on LinkedIn
            </a>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
