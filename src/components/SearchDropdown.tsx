import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import { posts } from "@/data/posts";
import { motion, AnimatePresence } from "framer-motion";

interface SearchDropdownProps {
  onClose: () => void;
}

const SearchDropdown = ({ onClose }: SearchDropdownProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const path = location.pathname;
    return () => {};
  }, []);

  const pathnameRef = useRef(location.pathname);
  useEffect(() => {
    if (location.pathname !== pathnameRef.current) {
      onClose();
    }
    pathnameRef.current = location.pathname;
  }, [location.pathname, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return posts
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 5);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const highlightMatch = (text: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/20 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          ref={containerRef}
          className="max-w-xl mx-auto mt-20 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl shadow-lg border border-border overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search size={18} className="text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search articles..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              )}
            </div>

            {query.trim().length >= 2 && (
              <div className="max-h-80 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((post, i) => (
                    <Link
                      key={post.id}
                      to={`/post/${post.slug}`}
                      onClick={onClose}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors ${
                        i === selectedIndex ? "bg-secondary/50" : ""
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {highlightMatch(post.title)}
                        </p>
                        <span className="text-xs text-primary font-medium">
                          {post.category}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-6 text-sm text-muted-foreground text-center">
                    No articles found.
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchDropdown;
