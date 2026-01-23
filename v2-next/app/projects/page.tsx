"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileCode, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectString from "@/components/ProjectString";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[var(--color-editor-bg)] text-[var(--color-text-primary)]">
      {/* Header/Tab Bar */}
      <div className="sticky top-0 z-40 bg-[var(--color-editor-bg-secondary)] border-b border-[var(--color-editor-border)]">
        <div className="h-10 flex items-center px-4 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1 bg-[var(--color-editor-bg)] rounded-t-md border-t-2 border-[var(--color-accent-primary)] text-sm"
          >
            <FileCode size={14} />
            <span>projects.tsx</span>
          </motion.div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="px-8 py-12 font-mono max-w-7xl mx-auto">
        <div className="space-y-2">
          {/* Line 1 - Imports */}
          <CodeLine lineNumber={1} delay={0.3}>
            <span className="syntax-purple">import</span>{" "}
            <span className="syntax-blue">{"{ useState, useEffect }"}</span>{" "}
            <span className="syntax-purple">from</span>{" "}
            <span className="syntax-green">&quot;react&quot;</span>
            <span className="syntax-pink">;</span>
          </CodeLine>

          {/* Line 2 */}
          <CodeLine lineNumber={2} delay={0.35}>
            <span className="syntax-purple">import</span>{" "}
            <span className="syntax-blue">{"{ Project }"}</span>{" "}
            <span className="syntax-purple">from</span>{" "}
            <span className="syntax-green">&quot;@/types&quot;</span>
            <span className="syntax-pink">;</span>
          </CodeLine>

          {/* Line 3 - Empty */}
          <CodeLine lineNumber={3} delay={0.4}>
            <span></span>
          </CodeLine>

          {/* Line 4 - Component declaration */}
          <CodeLine lineNumber={4} delay={0.45}>
            <span className="syntax-purple">const</span>{" "}
            <span className="syntax-blue">Projects</span>{" "}
            <span className="syntax-pink">=</span>{" "}
            <span className="syntax-pink">()</span>{" "}
            <span className="syntax-purple">=&gt;</span>{" "}
            <span className="syntax-pink">{"{"}</span>
          </CodeLine>

          {/* Line 5 - Comment */}
          <CodeLine lineNumber={5} delay={0.5}>
            <span className="ml-8 text-[var(--color-text-muted)] italic">
              // Featured projects - Hover to preview
            </span>
          </CodeLine>

          {/* Line 6 - Empty */}
          <CodeLine lineNumber={6} delay={0.55}>
            <span></span>
          </CodeLine>

          {/* Line 7 - Return statement */}
          <CodeLine lineNumber={7} delay={0.6}>
            <span className="ml-8">
              <span className="syntax-purple">return</span>{" "}
              <span className="syntax-pink">(</span>
            </span>
          </CodeLine>

          {/* Line 8 - Opening div */}
          <CodeLine lineNumber={8} delay={0.65}>
            <span className="ml-12">
              <span className="syntax-pink">&lt;</span>
              <span className="syntax-blue">div</span>{" "}
              <span className="syntax-cyan">className</span>
              <span className="syntax-pink">=</span>
              <span className="syntax-green">&quot;projects-container&quot;</span>
              <span className="syntax-pink">&gt;</span>
            </span>
          </CodeLine>

          {/* Line 9 - Empty */}
          <CodeLine lineNumber={9} delay={0.7}>
            <span></span>
          </CodeLine>

          {/* Render all projects dynamically */}
          {projects.map((project, index) => {
            const startLine = 10 + (index * 5);
            const baseDelay = 0.75 + (index * 0.3);
            
            return (
              <div key={project.id}>
                {/* Project opening tag */}
                <CodeLine lineNumber={startLine} delay={baseDelay}>
                  <span className="ml-16">
                    <span className="syntax-pink">&lt;</span>
                    <span className="syntax-blue">ProjectCard</span>
                  </span>
                </CodeLine>

                {/* Title prop with ProjectString component */}
                <CodeLine lineNumber={startLine + 1} delay={baseDelay + 0.05}>
                  <span className="ml-20">
                    <span className="syntax-cyan">title</span>
                    <span className="syntax-pink">=</span>
                    <span className="syntax-pink">{"{"}</span>
                    <ProjectString
                      name={project.name}
                      description={project.description}
                      image={project.image}
                      github={project.github}
                      demo={project.demo}
                      delay={baseDelay + 0.05}
                    />
                    <span className="syntax-pink">{"}"}</span>
                  </span>
                </CodeLine>

                {/* Tech array */}
                <CodeLine lineNumber={startLine + 2} delay={baseDelay + 0.1}>
                  <span className="ml-20">
                    <span className="syntax-cyan">tech</span>
                    <span className="syntax-pink">=</span>
                    <span className="syntax-pink">{"{"}</span>
                    <span className="syntax-pink">[</span>
                    {project.tech.map((tech, i) => (
                      <span key={tech}>
                        <span className="syntax-green">&quot;{tech}&quot;</span>
                        {i < project.tech.length - 1 && <span className="syntax-pink">, </span>}
                      </span>
                    ))}
                    <span className="syntax-pink">]</span>
                    <span className="syntax-pink">{"}"}</span>
                  </span>
                </CodeLine>

                {/* Closing tag */}
                <CodeLine lineNumber={startLine + 3} delay={baseDelay + 0.15}>
                  <span className="ml-16">
                    <span className="syntax-pink">/&gt;</span>
                  </span>
                </CodeLine>

                {/* Empty line after each project except last */}
                {index < projects.length - 1 && (
                  <CodeLine lineNumber={startLine + 4} delay={baseDelay + 0.2}>
                    <span></span>
                  </CodeLine>
                )}
              </div>
            );
          })}

          {/* Line - Empty before closing div */}
          <CodeLine lineNumber={10 + (projects.length * 5)} delay={0.75 + (projects.length * 0.3)}>
            <span></span>
          </CodeLine>

          {/* Line - Closing div */}
          <CodeLine lineNumber={11 + (projects.length * 5)} delay={0.8 + (projects.length * 0.3)}>
            <span className="ml-12">
              <span className="syntax-pink">&lt;/</span>
              <span className="syntax-blue">div</span>
              <span className="syntax-pink">&gt;</span>
            </span>
          </CodeLine>

          {/* Line - Closing return */}
          <CodeLine lineNumber={12 + (projects.length * 5)} delay={0.85 + (projects.length * 0.3)}>
            <span className="ml-8">
              <span className="syntax-pink">)</span>
              <span className="syntax-pink">;</span>
            </span>
          </CodeLine>

          {/* Line - Closing function */}
          <CodeLine lineNumber={13 + (projects.length * 5)} delay={0.9 + (projects.length * 0.3)}>
            <span className="syntax-pink">{"}"};</span>
          </CodeLine>

          {/* Line - Empty */}
          <CodeLine lineNumber={14 + (projects.length * 5)} delay={0.95 + (projects.length * 0.3)}>
            <span></span>
          </CodeLine>

          {/* Line - Export */}
          <CodeLine lineNumber={15 + (projects.length * 5)} delay={1.0 + (projects.length * 0.3)}>
            <span className="syntax-purple">export</span>{" "}
            <span className="syntax-purple">default</span>{" "}
            <span className="syntax-blue">Projects</span>
            <span className="syntax-pink">;</span>
            <span className="cursor-blink" />
          </CodeLine>
        </div>
      </div>
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
      className="editor-line text-base md:text-lg lg:text-xl"
      data-line={lineNumber}
    >
      {children}
    </motion.div>
  );
}
