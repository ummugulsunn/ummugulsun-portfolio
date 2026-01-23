"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileCode } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-editor-bg)] text-[var(--color-text-primary)]">
      {/* Sidebar - Minimal File Explorer */}
      <Sidebar />

      {/* Main Editor Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Tab Bar */}
        <TabBar />

        {/* Code Editor Content */}
        <div className="px-8 py-12 font-mono">
          <EditorContent />
        </div>
      </main>
    </div>
  );
}


function TabBar() {
  return (
    <div className="h-10 bg-[var(--color-editor-bg-secondary)] border-b border-[var(--color-editor-border)] flex items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 px-3 py-1 bg-[var(--color-editor-bg)] rounded-t-md border-t-2 border-[var(--color-accent-primary)] text-sm"
      >
        <FileCode size={14} />
        <span>profile.tsx</span>
      </motion.div>
    </div>
  );
}

function EditorContent() {
  return (
    <div className="max-w-7xl space-y-2">
      {/* Line 1 */}
      <CodeLine lineNumber={1} delay={0.4}>
        <span className="syntax-purple">import</span>{" "}
        <span className="syntax-blue">{"{ Student }"}</span>{" "}
        <span className="syntax-purple">from</span>{" "}
        <span className="syntax-green">&quot;@university/engineering&quot;</span>
        <span className="syntax-pink">;</span>
      </CodeLine>

      {/* Line 2 - Empty */}
      <CodeLine lineNumber={2} delay={0.5}>
        <span></span>
      </CodeLine>

      {/* Line 3 */}
      <CodeLine lineNumber={3} delay={0.6}>
        <span className="syntax-purple">const</span>{" "}
        <span className="syntax-cyan">profile</span>{" "}
        <span className="syntax-pink">=</span>{" "}
        <span className="syntax-purple">new</span>{" "}
        <span className="syntax-blue">Student</span>
        <span className="syntax-pink">({"{"}</span>
      </CodeLine>

      {/* Line 4 */}
      <CodeLine lineNumber={4} delay={0.7}>
        <span className="ml-8">
          <span className="syntax-cyan">name</span>
          <span className="syntax-pink">:</span>{" "}
          <span className="syntax-green">&quot;Ümmügülsün Türkmen&quot;</span>
          <span className="syntax-pink">,</span>
        </span>
      </CodeLine>

      {/* Line 5 */}
      <CodeLine lineNumber={5} delay={0.8}>
        <span className="ml-8">
          <span className="syntax-cyan">type</span>
          <span className="syntax-pink">:</span>{" "}
          <span className="syntax-green">&quot;Computer Engineering Student&quot;</span>
          <span className="syntax-pink">,</span>
        </span>
      </CodeLine>

      {/* Line 6 */}
      <CodeLine lineNumber={6} delay={0.9}>
        <span className="ml-8">
          <span className="syntax-cyan">focus</span>
          <span className="syntax-pink">:</span>{" "}
          <span className="syntax-pink">[</span>
          <span className="syntax-green">&quot;Computer Vision&quot;</span>
          <span className="syntax-pink">,</span>{" "}
          <span className="syntax-green">&quot;Mobile Apps&quot;</span>
          <span className="syntax-pink">,</span>{" "}
          <span className="syntax-green">&quot;Web Systems&quot;</span>
          <span className="syntax-pink">]</span>
          <span className="syntax-pink">,</span>
        </span>
      </CodeLine>

      {/* Line 7 */}
      <CodeLine lineNumber={7} delay={1.0}>
        <span className="ml-8">
          <span className="syntax-cyan">stack</span>
          <span className="syntax-pink">:</span>{" "}
          <span className="syntax-pink">[</span>
          <span className="syntax-green">&quot;Python&quot;</span>
          <span className="syntax-pink">,</span>{" "}
          <span className="syntax-green">&quot;Java&quot;</span>
          <span className="syntax-pink">,</span>{" "}
          <span className="syntax-green">&quot;Swift&quot;</span>
          <span className="syntax-pink">,</span>{" "}
          <span className="syntax-green">&quot;Next.js&quot;</span>
          <span className="syntax-pink">]</span>
          <span className="syntax-pink">,</span>
        </span>
      </CodeLine>

      {/* Line 8 */}
      <CodeLine lineNumber={8} delay={1.1}>
        <span className="ml-8">
          <span className="syntax-cyan">status</span>
          <span className="syntax-pink">:</span>{" "}
          <span className="syntax-green">&quot;Building, Learning, Creating...&quot;</span>
        </span>
      </CodeLine>

      {/* Line 9 */}
      <CodeLine lineNumber={9} delay={1.2}>
        <span className="syntax-pink">{"})"}</span>
        <span className="syntax-pink">;</span>
      </CodeLine>

      {/* Line 10 - Empty */}
      <CodeLine lineNumber={10} delay={1.3}>
        <span></span>
      </CodeLine>

      {/* Line 11 - Comment */}
      <CodeLine lineNumber={11} delay={1.4}>
        <span className="text-[var(--color-text-muted)] italic">
          // Welcome to my digital workspace
        </span>
      </CodeLine>

      {/* Line 12 */}
      <CodeLine lineNumber={12} delay={1.5}>
        <span className="syntax-cyan">profile</span>
        <span className="syntax-pink">.</span>
        <span className="syntax-blue">init</span>
        <span className="syntax-pink">()</span>
        <span className="syntax-pink">;</span>
      </CodeLine>

      {/* Line 13 - Empty */}
      <CodeLine lineNumber={13} delay={1.6}>
        <span></span>
      </CodeLine>

      {/* Line 14 - Navigate to projects */}
      <CodeLine lineNumber={14} delay={1.7}>
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/projects" className="inline-flex items-center gap-2">
            <span className="text-[var(--color-text-muted)]">//</span>
            <span className="syntax-blue underline decoration-2 decoration-[var(--color-syntax-blue)] hover:decoration-[var(--color-syntax-cyan)] transition-colors">
              View all projects →
            </span>
          </Link>
        </motion.div>
      </CodeLine>

      {/* Line 15 */}
      <CodeLine lineNumber={15} delay={1.8}>
        <span className="cursor-blink" />
      </CodeLine>
    </div>
  );
}

interface CodeLineProps {
  lineNumber: number;
  children: React.ReactNode;
  delay: number;
}

function CodeLine({ lineNumber, children, delay }: CodeLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      className="editor-line text-xl md:text-2xl lg:text-3xl"
      data-line={lineNumber}
    >
      {children}
    </motion.div>
  );
}
