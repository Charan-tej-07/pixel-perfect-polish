import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const BlogCard = ({ post, index }: { post: Post; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/post/${post.slug}`} className="block group">
        <div className="bg-card rounded-xl border border-border overflow-hidden card-hover h-full">
          <div className="aspect-video bg-secondary flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors">
              FB
            </div>
          </div>
          <div className="p-5">
            <span className="inline-flex px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <h3 className="mt-3 text-base font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User size={12} />
                {post.author}
              </span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
