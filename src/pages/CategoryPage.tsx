import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import YouTubeVideo from "@/components/YouTubeVideo";
import CodingChallenges from "@/components/CodingChallenges";
import { posts } from "@/data/posts";
import { learningVideos } from "@/data/videos";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const category = name || "";

  const categoryPosts = posts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  const categoryVideos = learningVideos.filter(
    (v) => v.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(() => {
    document.title = `${category} – FutureByte`;
  }, [category]);

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

        <h1 className="text-3xl font-bold text-foreground mb-2">{category}</h1>
        <p className="text-muted-foreground mb-8">
          Latest articles and resources on {category}.
        </p>

        {/* Articles */}
        {categoryPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categoryPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-card rounded-xl border border-border mb-12">
            <p className="text-muted-foreground">
              No articles in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Learning Videos */}
        {categoryVideos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Learn {category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryVideos.map((video) => (
                <YouTubeVideo
                  key={video.id}
                  videoId={video.videoId}
                  title={video.title}
                  channel={video.channel}
                />
              ))}
            </div>
          </section>
        )}

        {/* Coding Challenges - Programming only */}
        {category.toLowerCase() === "programming" && <CodingChallenges />}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
