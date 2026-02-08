"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 py-12 font-mono">
      <div className="space-y-2">
        <CL n={1}>
          <span className="syntax-purple">import</span>{" "}
          <span className="syntax-blue">{"{ Student }"}</span>{" "}
          <span className="syntax-purple">from</span>{" "}
          <span className="syntax-green">&quot;@university/engineering&quot;</span>
          <span className="syntax-pink">;</span>
        </CL>

        <CL n={2}>
          <span>&nbsp;</span>
        </CL>

        <CL n={3}>
          <span className="syntax-purple">const</span>{" "}
          <span className="syntax-cyan">profile</span>{" "}
          <span className="syntax-pink">=</span>{" "}
          <span className="syntax-purple">new</span>{" "}
          <span className="syntax-blue">Student</span>
          <span className="syntax-pink">({"{"}</span>
        </CL>

        <CL n={4}>
          <span className="ml-8">
            <span className="syntax-cyan">name</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Ümmügülsün Türkmen&quot;
            </span>
            <span className="syntax-pink">,</span>
          </span>
        </CL>

        <CL n={5}>
          <span className="ml-8">
            <span className="syntax-cyan">type</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Computer Engineering Student&quot;
            </span>
            <span className="syntax-pink">,</span>
          </span>
        </CL>

        <CL n={6}>
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
        </CL>

        <CL n={7}>
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
        </CL>

        <CL n={8}>
          <span className="ml-8">
            <span className="syntax-cyan">status</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Building, Learning, Creating...&quot;
            </span>
          </span>
        </CL>

        <CL n={9}>
          <span className="syntax-pink">{"})"}</span>
          <span className="syntax-pink">;</span>
        </CL>

        <CL n={10}>
          <span>&nbsp;</span>
        </CL>

        <CL n={11}>
          <span className="text-[var(--color-text-muted)] italic">
            // Welcome to my digital workspace
          </span>
        </CL>

        <CL n={12}>
          <span className="syntax-cyan">profile</span>
          <span className="syntax-pink">.</span>
          <span className="syntax-blue">init</span>
          <span className="syntax-pink">()</span>
          <span className="syntax-pink">;</span>
        </CL>

        <CL n={13}>
          <span>&nbsp;</span>
        </CL>

        <CL n={14}>
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2"
            >
              <span className="text-[var(--color-text-muted)]">//</span>
              <span className="syntax-blue underline decoration-2 decoration-[var(--color-syntax-blue)] hover:decoration-[var(--color-syntax-cyan)] transition-colors">
                View all projects →
              </span>
            </Link>
          </motion.div>
        </CL>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 14 * 0.03, duration: 0.2, ease: "easeOut" }}
          className="editor-line-active text-xl md:text-2xl lg:text-3xl"
          data-line={15}
        >
          <span className="cursor-blink" />
        </motion.div>
      </div>
    </div>
  );
}

function CL({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: (n - 1) * 0.03, duration: 0.2, ease: "easeOut" }}
      className="editor-line text-xl md:text-2xl lg:text-3xl"
      data-line={n}
    >
      {children}
    </motion.div>
  );
}
