export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const categories = ["AI", "Programming", "Emerging Tech"];

export const posts: Post[] = [
  {
    id: 1,
    slug: "future-of-generative-ai-2026",
    title: "The Future of Generative AI in 2026: What's Changed",
    excerpt: "From multimodal reasoning to autonomous agents, generative AI has evolved far beyond chatbots. Here's what developers need to know.",
    content: `## The AI Landscape Has Shifted

Generative AI in 2026 is no longer about simple text generation. The latest models demonstrate genuine reasoning capabilities, can process multiple modalities simultaneously, and are being deployed as autonomous agents in production environments.

### Multimodal Is the New Standard

Every major AI provider now offers models that seamlessly handle text, images, audio, and video. The distinction between "text models" and "image models" has blurred significantly.

### Autonomous Agents Are Real

Unlike the hype of 2024, today's AI agents actually work in production. Companies are deploying agents that can:

- Navigate complex multi-step workflows
- Make decisions based on real-time data
- Collaborate with human teams effectively

### What Developers Should Focus On

\`\`\`python
# The new paradigm: Agent-first development
from agent_framework import Agent, Tool

agent = Agent(
    model="latest-reasoning-model",
    tools=[Tool.web_search, Tool.code_exec, Tool.file_manager],
    memory="persistent"
)

result = agent.execute("Analyze our Q1 metrics and generate a report")
\`\`\`

The key skill for developers in 2026 isn't prompt engineering — it's **agent architecture design**.

### Looking Ahead

The trajectory is clear: AI is becoming infrastructure, not just a feature. The developers who thrive will be those who understand how to build reliable, observable AI systems.`,
    category: "AI",
    author: "FutureByte Team",
    date: "Mar 3, 2026",
    readTime: "6 min read",
    tags: ["AI", "Generative AI", "Machine Learning", "Agents"],
    featured: true,
  },
  {
    id: 2,
    slug: "rust-web-development-guide",
    title: "Why Rust Is Dominating Web Development in 2026",
    excerpt: "Rust has moved beyond systems programming. Here's how it's reshaping web backends, WebAssembly, and full-stack development.",
    content: `## Rust's Web Revolution

Rust is no longer just for systems programmers. In 2026, it has become a serious contender for web development, thanks to mature frameworks and excellent WebAssembly support.

### The Frameworks

- **Actix Web** and **Axum** have matured significantly
- **Leptos** brings full-stack Rust with reactive UI
- **Dioxus** offers a React-like experience in Rust

### Performance That Matters

\`\`\`rust
use axum::{routing::get, Router, Json};
use serde::Serialize;

#[derive(Serialize)]
struct Article {
    title: String,
    views: u64,
}

async fn get_articles() -> Json<Vec<Article>> {
    Json(vec![
        Article { title: "Rust Web".into(), views: 15000 },
    ])
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/api/articles", get(get_articles));
    axum::serve(listener, app).await.unwrap();
}
\`\`\`

### Why Teams Are Switching

The combination of memory safety, performance, and developer experience has made Rust the go-to choice for teams building high-performance web services.`,
    category: "Programming",
    author: "FutureByte Team",
    date: "Mar 2, 2026",
    readTime: "5 min read",
    tags: ["Rust", "Web Development", "Programming", "WebAssembly"],
  },
  {
    id: 3,
    slug: "quantum-computing-practical-applications",
    title: "Emerging Tech: Quantum Computing Reaches Practical Milestones",
    excerpt: "Quantum computers are solving real-world problems in drug discovery and optimization. Here's what's actually working.",
    content: `## Quantum Goes Practical

2026 marks the year quantum computing moved from theoretical promise to practical delivery. Several companies have demonstrated quantum advantage on commercially relevant problems.

### Real Applications

1. **Drug Discovery**: Molecular simulations that took months on classical computers now run in hours
2. **Financial Optimization**: Portfolio optimization at scales previously impossible
3. **Cryptography**: Post-quantum cryptographic standards are now being widely deployed

### What This Means for Developers

While most developers won't write quantum code directly, understanding quantum-safe practices is becoming essential. Start with post-quantum cryptography libraries and understand which of your systems might be vulnerable.

### The Hardware Race

IBM, Google, and several startups have achieved systems with over 1000 logical qubits, making error-corrected quantum computing a reality for specific use cases.`,
    category: "Emerging Tech",
    author: "FutureByte Team",
    date: "Mar 1, 2026",
    readTime: "4 min read",
    tags: ["Quantum Computing", "Emerging Tech", "Cryptography"],
  },
  {
    id: 4,
    slug: "typescript-5-new-features",
    title: "TypeScript 5.x: The Features That Changed How We Code",
    excerpt: "From decorator metadata to improved type inference, TypeScript keeps raising the bar for JavaScript development.",
    content: `## TypeScript Keeps Evolving

TypeScript 5.x has introduced features that fundamentally improve how we write and maintain JavaScript applications.

### Key Features

#### Decorator Metadata
\`\`\`typescript
function log(target: any, context: ClassMethodDecoratorContext) {
  return function (...args: any[]) {
    console.log(\`Calling \${String(context.name)}\`);
    return target.apply(this, args);
  };
}

class UserService {
  @log
  async getUser(id: string) {
    return await db.users.find(id);
  }
}
\`\`\`

#### Improved Inference

The compiler is smarter than ever at inferring types, reducing the need for explicit annotations while maintaining full type safety.

### Migration Tips

Upgrading is straightforward for most projects. The TypeScript team has maintained excellent backward compatibility while adding powerful new capabilities.`,
    category: "Programming",
    author: "FutureByte Team",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    tags: ["TypeScript", "JavaScript", "Web Development"],
  },
  {
    id: 5,
    slug: "ai-coding-assistants-comparison",
    title: "AI Coding Assistants in 2026: A Comprehensive Comparison",
    excerpt: "GitHub Copilot, Cursor, and new contenders — which AI coding assistant actually makes you more productive?",
    content: `## The AI Assistant Landscape

The AI coding assistant market has matured significantly. Here's an honest comparison of what's available.

### The Contenders

| Feature | Copilot | Cursor | Lovable |
|---------|---------|--------|---------|
| Code Completion | ★★★★★ | ★★★★★ | ★★★★ |
| Multi-file Context | ★★★★ | ★★★★★ | ★★★★★ |
| Agent Mode | ★★★★ | ★★★★★ | ★★★★★ |
| UI Generation | ★★★ | ★★★ | ★★★★★ |

### What Actually Matters

The best assistant isn't the one with the most features — it's the one that fits your workflow. Consider:

- **Solo developers**: Lovable or Cursor for maximum productivity
- **Large teams**: GitHub Copilot for enterprise integration
- **Front-end focus**: Lovable for rapid UI development

### The Productivity Reality

Studies show 30-50% productivity gains with well-integrated AI assistants. The key is learning to work *with* the AI, not fighting against it.`,
    category: "AI",
    author: "FutureByte Team",
    date: "Feb 27, 2026",
    readTime: "7 min read",
    tags: ["AI", "Developer Tools", "Productivity"],
  },
  {
    id: 6,
    slug: "web3-beyond-crypto",
    title: "Web3 Beyond Crypto: Decentralized Tech That Actually Works",
    excerpt: "Forget the hype — here are the decentralized technologies delivering real value in identity, storage, and governance.",
    content: `## Web3 Grows Up

The Web3 ecosystem has moved past the speculative crypto era. In 2026, decentralized technologies are solving real problems.

### What's Working

1. **Decentralized Identity (DID)**: Self-sovereign identity is being adopted by governments and enterprises
2. **IPFS & Filecoin**: Decentralized storage is now reliable enough for production use
3. **DAOs**: Governance frameworks have matured with legal recognition in several jurisdictions

### For Developers

\`\`\`javascript
// Decentralized identity verification
import { DIDAuth } from '@web3/did-auth';

const verifier = new DIDAuth({
  network: 'mainnet',
  schema: 'employment-credential'
});

const isValid = await verifier.verify(credential);
\`\`\`

### The Pragmatic View

Not everything needs to be decentralized. The winning approach is hybrid architectures that use decentralized tech where it provides genuine advantages.`,
    category: "Emerging Tech",
    author: "FutureByte Team",
    date: "Feb 25, 2026",
    readTime: "5 min read",
    tags: ["Web3", "Decentralized", "Blockchain", "Identity"],
  },
];
