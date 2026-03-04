import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { Clock, User } from "lucide-react";

const FeaturedPost = ({ post }: { post: Post }) => {
  return (
    <Link to={`/post/${post.slug}`} className="block">
      <div className="bg-card rounded-xl border border-border overflow-hidden card-hover">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-video md:aspect-auto md:min-h-[300px] bg-secondary overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="inline-flex w-fit px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-foreground leading-tight">
              {post.title}
            </h2>
            <p className="mt-3 text-muted-foreground text-sm line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
