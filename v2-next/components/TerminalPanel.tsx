"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronUp, ChevronDown } from "lucide-react";

const terminalLines = [
  { type: "prompt", text: "$ whoami" },
  { type: "output", text: "Ümmügülsün Türkmen — Computer Engineering Student" },
  { type: "prompt", text: "$ cat skills.txt" },
  {
    type: "output",
    text: "Python, Java, C/C++, JavaScript, TypeScript, Swift",
  },
  { type: "prompt", text: "$ npm run portfolio" },
  { type: "success", text: "✓ Compiled successfully in 0.3s" },
  { type: "output", text: "  ▸ Local:   http://localhost:3000" },
  { type: "output", text: "  ▸ Ready in 247ms" },
  { type: "prompt", text: "$ echo $STATUS" },
  { type: "success", text: "Open to new opportunities 🚀" },
];

export default function TerminalPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Animate lines appearing one by one when opened
  useEffect(() => {
    if (!isOpen || isMinimized) return;
    setVisibleLines(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= terminalLines.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isOpen, isMinimized]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  // Toggle with Cmd+`
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setIsMinimized(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Toggle Button (visible when closed) */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="hidden md:flex fixed bottom-7 right-4 z-40 items-center gap-1.5 px-2.5 py-1 bg-[var(--color-editor-bg-secondary)] border border-[var(--color-editor-border)] rounded-md text-[11px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)] transition-all font-mono"
          title="Toggle Terminal (⌘`)"
        >
          <Terminal size={12} />
          Terminal
        </button>
      )}

      {/* Terminal Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMinimized ? 32 : 200,
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:flex flex-col border-t border-[var(--color-editor-border)] bg-[var(--color-editor-bg)] shrink-0 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between h-8 px-3 bg-[var(--color-editor-bg-secondary)] border-b border-[var(--color-editor-border)] shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[var(--color-text-secondary)] flex items-center gap-1.5">
                  <Terminal size={12} />
                  TERMINAL
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  zsh
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-5 h-5 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-editor-hover)] rounded transition-colors"
                >
                  {isMinimized ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-editor-hover)] rounded transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-2 font-mono text-[13px] leading-relaxed"
              >
                {terminalLines.slice(0, visibleLines).map((line, index) => (
                  <div key={index} className="flex items-center gap-0">
                    {line.type === "prompt" ? (
                      <span>
                        <span className="text-[var(--color-syntax-green)]">
                          ~/portfolio
                        </span>
                        <span className="text-[var(--color-text-muted)]">
                          {" "}
                        </span>
                        <span className="text-[var(--color-text-primary)]">
                          {line.text}
                        </span>
                      </span>
                    ) : line.type === "success" ? (
                      <span className="text-[var(--color-success)]">
                        {line.text}
                      </span>
                    ) : (
                      <span className="text-[var(--color-text-secondary)]">
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}
                {visibleLines >= terminalLines.length && (
                  <div className="flex items-center gap-0 mt-0.5">
                    <span className="text-[var(--color-syntax-green)]">
                      ~/portfolio
                    </span>
                    <span className="text-[var(--color-text-muted)]"> </span>
                    <span className="text-[var(--color-text-primary)]">$ </span>
                    <span className="cursor-blink" />
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
