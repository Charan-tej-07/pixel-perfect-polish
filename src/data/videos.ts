export interface LearningVideo {
  id: number;
  title: string;
  channel: string;
  url: string;
  videoId: string;
  category: string;
}

export const learningVideos: LearningVideo[] = [
  {
    id: 1,
    title: "But what is a neural network?",
    channel: "3Blue1Brown",
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
    videoId: "aircAruvnKk",
    category: "AI",
  },
  {
    id: 2,
    title: "Machine Learning for Everybody",
    channel: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
    videoId: "i_LwzRVP7bg",
    category: "AI",
  },
  {
    id: 3,
    title: "How Large Language Models Work",
    channel: "3Blue1Brown",
    url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
    videoId: "wjZofJX0v4M",
    category: "AI",
  },
  {
    id: 4,
    title: "JavaScript Full Course for Beginners",
    channel: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    videoId: "PkZNo7MFNFg",
    category: "Programming",
  },
  {
    id: 5,
    title: "React Tutorial for Beginners",
    channel: "Programming with Mosh",
    url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
    videoId: "SqcY0GlETPk",
    category: "Programming",
  },
  {
    id: 6,
    title: "TypeScript Full Course",
    channel: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=30LWjhZzg50",
    videoId: "30LWjhZzg50",
    category: "Programming",
  },
  {
    id: 7,
    title: "Quantum Computing Explained",
    channel: "Kurzgesagt",
    url: "https://www.youtube.com/watch?v=JhHMJCUmq28",
    videoId: "JhHMJCUmq28",
    category: "Emerging Tech",
  },
  {
    id: 8,
    title: "Blockchain Technology Explained",
    channel: "Simply Explained",
    url: "https://www.youtube.com/watch?v=SSo_EIwHSd4",
    videoId: "SSo_EIwHSd4",
    category: "Emerging Tech",
  },
];
