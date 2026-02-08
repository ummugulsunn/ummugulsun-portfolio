"use client";

import { motion } from "framer-motion";
import ProjectString from "@/components/ProjectString";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-8 py-12 font-mono"
    >
      <div className="space-y-2">
        {/* Line 1 - Imports */}
        <L n={1}>
          <span className="syntax-purple">import</span>{" "}
          <span className="syntax-blue">{"{ useState, useEffect }"}</span>{" "}
          <span className="syntax-purple">from</span>{" "}
          <span className="syntax-green">&quot;react&quot;</span>
          <span className="syntax-pink">;</span>
        </L>

        <L n={2}>
          <span className="syntax-purple">import</span>{" "}
          <span className="syntax-blue">{"{ Project }"}</span>{" "}
          <span className="syntax-purple">from</span>{" "}
          <span className="syntax-green">&quot;@/types&quot;</span>
          <span className="syntax-pink">;</span>
        </L>

        <L n={3}>
          <span>&nbsp;</span>
        </L>

        {/* Line 4 - Component declaration */}
        <L n={4}>
          <span className="syntax-purple">const</span>{" "}
          <span className="syntax-blue">Projects</span>{" "}
          <span className="syntax-pink">=</span>{" "}
          <span className="syntax-pink">()</span>{" "}
          <span className="syntax-purple">=&gt;</span>{" "}
          <span className="syntax-pink">{"{"}</span>
        </L>

        {/* Line 5 - Comment */}
        <L n={5}>
          <span className="ml-8 text-[var(--color-text-muted)] italic">
            // Featured projects - Hover to preview
          </span>
        </L>

        <L n={6}>
          <span>&nbsp;</span>
        </L>

        {/* Line 7 - Return */}
        <L n={7}>
          <span className="ml-8">
            <span className="syntax-purple">return</span>{" "}
            <span className="syntax-pink">(</span>
          </span>
        </L>

        {/* Line 8 - Opening div */}
        <L n={8}>
          <span className="ml-12">
            <span className="syntax-pink">&lt;</span>
            <span className="syntax-blue">div</span>{" "}
            <span className="syntax-cyan">className</span>
            <span className="syntax-pink">=</span>
            <span className="syntax-green">
              &quot;projects-container&quot;
            </span>
            <span className="syntax-pink">&gt;</span>
          </span>
        </L>

        <L n={9}>
          <span>&nbsp;</span>
        </L>

        {/* Render all projects dynamically */}
        {projects.map((project, index) => {
          const startLine = 10 + index * 5;

          return (
            <div key={project.id}>
              {/* Project opening tag */}
              <L n={startLine}>
                <span className="ml-16">
                  <span className="syntax-pink">&lt;</span>
                  <span className="syntax-blue">ProjectCard</span>
                </span>
              </L>

              {/* Title prop with ProjectString component */}
              <L n={startLine + 1}>
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
                    delay={0}
                  />
                  <span className="syntax-pink">{"}"}</span>
                </span>
              </L>

              {/* Tech array */}
              <L n={startLine + 2}>
                <span className="ml-20">
                  <span className="syntax-cyan">tech</span>
                  <span className="syntax-pink">=</span>
                  <span className="syntax-pink">{"{"}</span>
                  <span className="syntax-pink">[</span>
                  {project.tech.map((tech, i) => (
                    <span key={tech}>
                      <span className="syntax-green">
                        &quot;{tech}&quot;
                      </span>
                      {i < project.tech.length - 1 && (
                        <span className="syntax-pink">, </span>
                      )}
                    </span>
                  ))}
                  <span className="syntax-pink">]</span>
                  <span className="syntax-pink">{"}"}</span>
                </span>
              </L>

              {/* Closing tag */}
              <L n={startLine + 3}>
                <span className="ml-16">
                  <span className="syntax-pink">/&gt;</span>
                </span>
              </L>

              {/* Empty line between projects */}
              {index < projects.length - 1 && (
                <L n={startLine + 4}>
                  <span>&nbsp;</span>
                </L>
              )}
            </div>
          );
        })}

        {/* Closing structure */}
        <L n={10 + projects.length * 5}>
          <span>&nbsp;</span>
        </L>

        <L n={11 + projects.length * 5}>
          <span className="ml-12">
            <span className="syntax-pink">&lt;/</span>
            <span className="syntax-blue">div</span>
            <span className="syntax-pink">&gt;</span>
          </span>
        </L>

        <L n={12 + projects.length * 5}>
          <span className="ml-8">
            <span className="syntax-pink">)</span>
            <span className="syntax-pink">;</span>
          </span>
        </L>

        <L n={13 + projects.length * 5}>
          <span className="syntax-pink">{"}"};</span>
        </L>

        <L n={14 + projects.length * 5}>
          <span>&nbsp;</span>
        </L>

        <div className="editor-line-active text-base md:text-lg lg:text-xl" data-line={15 + projects.length * 5}>
          <span className="syntax-purple">export</span>{" "}
          <span className="syntax-purple">default</span>{" "}
          <span className="syntax-blue">Projects</span>
          <span className="syntax-pink">;</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </motion.div>
  );
}

function L({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="editor-line text-base md:text-lg lg:text-xl" data-line={n}>
      {children}
    </div>
  );
}
