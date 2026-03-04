import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  channel: string;
}

const YouTubeVideo = ({ videoId, title, channel }: YouTubeVideoProps) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  const handlePlay = () => {
    setShowEmbed(true);
  };

  const openInNewTab = () => {
    window.open(watchUrl, "_blank", "noopener,noreferrer");
  };

  if (embedFailed || !showEmbed) {
    return (
      <div className="bg-card rounded-xl border border-border overflow-hidden card-hover">
        <div className="relative aspect-video bg-secondary cursor-pointer group" onClick={showEmbed ? openInNewTab : handlePlay}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Play size={24} className="text-primary-foreground ml-1" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-sm font-semibold text-foreground line-clamp-2">{title}</h4>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{channel}</span>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              YouTube <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="relative aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onError={() => setEmbedFailed(true)}
        />
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-foreground line-clamp-2">{title}</h4>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{channel}</span>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            YouTube <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
