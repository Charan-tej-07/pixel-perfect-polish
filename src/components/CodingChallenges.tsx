import { useState, useCallback } from "react";
import { getDailyProblem, CodingProblem } from "@/data/problems";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Code2, ChevronDown } from "lucide-react";

const languages = ["JavaScript", "Python", "Java", "C++", "TypeScript", "Go"];
const problemCategories = ["Web Development", "DSA", "Basic Coding"] as const;

interface ValidationResult {
  isCorrect: boolean;
  correctAnswer: string;
}

function validateCode(code: string, problem: CodingProblem): ValidationResult {
  const trimmedCode = code.trim();
  const normalizedCode = trimmedCode.toLowerCase().replace(/\s+/g, " ");

  // Check each keyword group — if ALL keywords in any group are present, it's correct
  for (const group of problem.acceptKeywords) {
    const allPresent = group.every((keyword) =>
      normalizedCode.includes(keyword.toLowerCase())
    );
    if (allPresent) {
      return { isCorrect: true, correctAnswer: problem.sampleAnswer };
    }
  }

  // Also check if the expected output literally appears in the code
  for (const tc of problem.testCases) {
    const expected = tc.expected.replace(/"/g, "").toLowerCase();
    if (expected.length > 1 && normalizedCode.includes(expected)) {
      return { isCorrect: true, correctAnswer: problem.sampleAnswer };
    }
  }

  return { isCorrect: false, correctAnswer: problem.sampleAnswer };
}

type ResultState = 
  | { type: "correct" }
  | { type: "wrong"; correctAnswer: string }
  | { type: "empty" }
  | null;

const CodingChallenges = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Basic Coding");
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<ResultState>(null);
  const [showHint, setShowHint] = useState(false);

  const problem: CodingProblem = getDailyProblem(selectedCategory);

  const handleRun = useCallback(() => {
    // Handle empty input
    if (!code.trim()) {
      setResult({ type: "empty" });
      setTimeout(() => setResult(null), 3000);
      return;
    }

    const validation = validateCode(code, problem);

    if (validation.isCorrect) {
      setResult({ type: "correct" });
      setTimeout(() => setResult(null), 4000);
    } else {
      setResult({ type: "wrong", correctAnswer: validation.correctAnswer });
      // Keep wrong answer visible longer so user can read the correct answer
      setTimeout(() => setResult(null), 8000);
    }
  }, [code, problem]);

  const resetState = () => {
    setCode("");
    setResult(null);
    setShowHint(false);
  };

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Code2 size={20} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">Daily Coding Challenge</h2>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Category tabs */}
        <div className="flex border-b border-border overflow-x-auto">
          {problemCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                resetState();
              }}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Language selector */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-muted-foreground">Language:</span>
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="appearance-none bg-secondary text-foreground text-xs px-3 py-1.5 pr-7 rounded-lg border border-border outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Problem */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-base font-semibold text-foreground">{problem.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                problem.difficulty === "Easy"
                  ? "bg-green-500/10 text-green-600"
                  : problem.difficulty === "Medium"
                  ? "bg-yellow-500/10 text-yellow-600"
                  : "bg-red-500/10 text-red-600"
              }`}>
                {problem.difficulty}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{problem.description}</p>
            <p className="mt-2 text-xs text-muted-foreground font-mono bg-secondary px-3 py-2 rounded-lg">
              {problem.example}
            </p>
          </div>

          {/* Code editor */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`// Write your ${selectedLanguage} solution here...`}
            className="w-full h-36 bg-foreground/5 text-foreground text-sm font-mono p-4 rounded-lg border border-border outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />

          {/* Actions */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={handleRun}
              className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Run Code
            </button>
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 border border-border text-foreground rounded-lg text-sm hover:bg-secondary transition-colors"
            >
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>
          </div>

          {showHint && (
            <p className="mt-3 text-sm text-muted-foreground italic bg-secondary/50 px-4 py-2 rounded-lg">
              💡 {problem.hint}
            </p>
          )}

          {/* Result feedback */}
          <AnimatePresence>
            {result?.type === "empty" && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 flex items-center gap-2 text-yellow-600 bg-yellow-500/10 px-4 py-3 rounded-lg border border-yellow-500/20"
              >
                <AlertTriangle size={20} />
                <span className="text-sm font-medium">⚠️ Please enter an answer before running.</span>
              </motion.div>
            )}

            {result?.type === "correct" && (
              <motion.div
                key="correct"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-4 flex items-center gap-2 text-green-600 bg-green-500/10 px-4 py-3 rounded-lg border border-green-500/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                >
                  <CheckCircle2 size={22} />
                </motion.div>
                <span className="text-sm font-medium">✅ Correct Answer! Great job! 🎉</span>
              </motion.div>
            )}

            {result?.type === "wrong" && (
              <motion.div
                key="wrong"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 space-y-3"
              >
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-3 rounded-lg border border-red-500/20">
                  <XCircle size={22} />
                  <span className="text-sm font-medium">❌ Wrong Answer. Try again!</span>
                </div>
                <div className="bg-secondary/70 rounded-lg border border-border p-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    The correct answer is:
                  </p>
                  <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">
                    {result.correctAnswer}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CodingChallenges;
