"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            <FileText size={14} />
            <span>README.md</span>
          </motion.div>
        </div>
      </div>

      {/* Editor Content - Markdown Style */}
      <div className="px-8 py-12 font-mono max-w-6xl mx-auto">
        <div className="space-y-3">
          {/* Title */}
          <MarkdownLine lineNumber={1} delay={0.3}>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold syntax-blue"># Ümmügülsün Türkmen</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={2} delay={0.35}>
            <span></span>
          </MarkdownLine>

          {/* Subtitle */}
          <MarkdownLine lineNumber={3} delay={0.4}>
            <span className="text-xl md:text-2xl syntax-green italic">
              &gt; Computer Engineering Student | Creative Problem Solver | Clean Code Enthusiast
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={4} delay={0.45}>
            <span></span>
          </MarkdownLine>

          {/* About Section */}
          <MarkdownLine lineNumber={5} delay={0.5}>
            <span className="text-2xl md:text-3xl font-semibold syntax-purple">## About</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={6} delay={0.55}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={7} delay={0.6}>
            <span className="text-lg text-[var(--color-text-primary)]">
              I&apos;m a passionate <span className="font-bold syntax-cyan">Computer Engineering student</span> who transforms complex problems into
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={8} delay={0.65}>
            <span className="text-lg text-[var(--color-text-primary)]">
              elegant software solutions. With expertise in <span className="syntax-orange">Python</span>, <span className="syntax-orange">Java</span>, and modern development frameworks,
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={9} delay={0.7}>
            <span className="text-lg text-[var(--color-text-primary)]">
              I specialize in creating innovative applications that make a real impact. From image processing
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={10} delay={0.75}>
            <span className="text-lg text-[var(--color-text-primary)]">
              algorithms to mobile applications, I bring ideas to life through clean, efficient code.
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={11} delay={0.8}>
            <span></span>
          </MarkdownLine>

          {/* Core Competencies */}
          <MarkdownLine lineNumber={12} delay={0.85}>
            <span className="text-xl font-semibold syntax-purple">### Core Competencies</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={13} delay={0.9}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={14} delay={0.95}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Problem Solving:</span> Analytical approach to complex technical challenges
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={15} delay={1.0}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Technical Excellence:</span> Clean, maintainable code with focus on best practices
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={16} delay={1.05}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Precision:</span> Detail-oriented development with quality focus
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={17} delay={1.1}>
            <span></span>
          </MarkdownLine>

          {/* Education */}
          <MarkdownLine lineNumber={18} delay={1.15}>
            <span className="text-2xl md:text-3xl font-semibold syntax-purple">## Education</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={19} delay={1.2}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={20} delay={1.25}>
            <span className="text-lg">
              <span className="syntax-pink">###</span> <span className="font-bold syntax-blue">BSc in Computer Engineering</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={21} delay={1.3}>
            <span className="text-lg">
              <span className="syntax-cyan">Istanbul Health and Technology University</span> <span className="syntax-pink">|</span> <span className="italic text-[var(--color-text-secondary)]">2023 – 2027</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={22} delay={1.35}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={23} delay={1.4}>
            <span className="text-lg">
              <span className="syntax-pink">###</span> <span className="font-bold syntax-blue">Associate Degree in Computer Programming</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={24} delay={1.45}>
            <span className="text-lg">
              <span className="syntax-cyan">Dokuz Eylul University</span> <span className="syntax-pink">|</span> <span className="italic text-[var(--color-text-secondary)]">2024 – 2026</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={25} delay={1.5}>
            <span></span>
          </MarkdownLine>

          {/* Experience */}
          <MarkdownLine lineNumber={26} delay={1.55}>
            <span className="text-2xl md:text-3xl font-semibold syntax-purple">## Experience</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={27} delay={1.6}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={28} delay={1.65}>
            <span className="text-lg">
              <span className="syntax-pink">###</span> <span className="font-bold syntax-blue">Information Technology Intern</span> <span className="syntax-pink">@</span> <span className="syntax-green">SCA SOCIAL</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={29} delay={1.7}>
            <span className="text-lg">
              <span className="italic text-[var(--color-text-secondary)]">June 2025 – July 2025</span> <span className="syntax-pink">|</span> <span className="text-[var(--color-text-secondary)]">Istanbul</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={30} delay={1.75}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={31} delay={1.8}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Developed proficiency in <span className="syntax-orange">Python</span> programming for data analysis and automation
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={32} delay={1.85}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Enhanced design skills using <span className="syntax-orange">Adobe Photoshop</span> for visual content creation
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={33} delay={1.9}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Gained expertise in <span className="syntax-orange">Excel</span> for data management and advanced calculations
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={34} delay={1.95}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Learned <span className="syntax-orange">AutoCAD</span> fundamentals for technical drawing and design
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={35} delay={2.0}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={36} delay={2.05}>
            <span className="text-lg">
              <span className="syntax-pink">###</span> <span className="font-bold syntax-blue">Merchandiser</span> <span className="syntax-pink">@</span> <span className="syntax-green">Türkmenler Socks</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={37} delay={2.1}>
            <span className="text-lg">
              <span className="italic text-[var(--color-text-secondary)]">July 2024 – October 2024</span> <span className="syntax-pink">|</span> <span className="text-[var(--color-text-secondary)]">Istanbul</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={38} delay={2.15}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={39} delay={2.2}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Managed product inventory and merchandising at a family-run business
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={40} delay={2.25}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Improved customer-facing display performance
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={41} delay={2.3}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> Gained experience in multitasking, teamwork, and logistics
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={42} delay={2.35}>
            <span></span>
          </MarkdownLine>

          {/* Certifications */}
          <MarkdownLine lineNumber={43} delay={2.4}>
            <span className="text-2xl md:text-3xl font-semibold syntax-purple">## Certifications</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={44} delay={2.45}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={45} delay={2.5}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Supervised Machine Learning: Regression and Classification</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={46} delay={2.55}>
            <span className="text-lg ml-4">
              <span className="text-[var(--color-text-secondary)]">DeepLearning.AI, Stanford University</span> <span className="syntax-pink">|</span> <span className="italic text-[var(--color-text-muted)]">August 2024</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={47} delay={2.6}>
            <span className="text-sm ml-4 text-[var(--color-text-muted)]">
              Credential ID: <span className="syntax-green">F3FQTTDO8ZH7</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={48} delay={2.65}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={49} delay={2.7}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Project Planning: Putting It All Together</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={50} delay={2.75}>
            <span className="text-lg ml-4">
              <span className="text-[var(--color-text-secondary)]">Google</span> <span className="syntax-pink">|</span> <span className="italic text-[var(--color-text-muted)]">February 2025</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={51} delay={2.8}>
            <span className="text-sm ml-4 text-[var(--color-text-muted)]">
              Credential ID: <span className="syntax-green">L4NYXTDWTXL0</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={52} delay={2.85}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={53} delay={2.9}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Project Initiation: Starting a Successful Project</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={54} delay={2.95}>
            <span className="text-lg ml-4">
              <span className="text-[var(--color-text-secondary)]">Google</span> <span className="syntax-pink">|</span> <span className="italic text-[var(--color-text-muted)]">February 2025</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={55} delay={3.0}>
            <span className="text-sm ml-4 text-[var(--color-text-muted)]">
              Credential ID: <span className="syntax-green">8GX2AJ69Z9D6</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={56} delay={3.05}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={57} delay={3.1}>
            <span className="text-lg">
              <span className="syntax-pink">-</span> <span className="font-bold syntax-cyan">Project Execution: Running the Project</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={58} delay={3.15}>
            <span className="text-lg ml-4">
              <span className="text-[var(--color-text-secondary)]">Google</span> <span className="syntax-pink">|</span> <span className="italic text-[var(--color-text-muted)]">February 2025</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={59} delay={3.2}>
            <span className="text-sm ml-4 text-[var(--color-text-muted)]">
              Credential ID: <span className="syntax-green">3E57P9BZ1NEA</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={60} delay={3.25}>
            <span></span>
          </MarkdownLine>

          {/* Skills */}
          <MarkdownLine lineNumber={61} delay={3.3}>
            <span className="text-2xl md:text-3xl font-semibold syntax-purple">## Skills</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={62} delay={3.35}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={63} delay={3.4}>
            <span className="text-xl font-semibold syntax-blue">### Programming Languages</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={64} delay={3.45}>
            <span className="text-lg">
              <span className="syntax-orange">Java</span> <span className="syntax-pink">|</span>{" "}
              <span className="syntax-orange">Python</span> <span className="syntax-pink">|</span>{" "}
              <span className="syntax-orange">C/C++</span> <span className="syntax-pink">|</span>{" "}
              <span className="syntax-orange">JavaScript</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={65} delay={3.5}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={66} delay={3.55}>
            <span className="text-xl font-semibold syntax-blue">### Development Tools</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={67} delay={3.6}>
            <span className="text-lg">
              <span className="syntax-cyan">VSCode</span> <span className="syntax-pink">|</span>{" "}
              <span className="syntax-cyan">Git/GitHub</span> <span className="syntax-pink">|</span>{" "}
              <span className="syntax-cyan">IntelliJ IDEA</span> <span className="syntax-pink">|</span>{" "}
              <span className="syntax-cyan">Docker</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={68} delay={3.65}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={69} delay={3.7}>
            <span className="text-xl font-semibold syntax-blue">### Key Competencies</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={70} delay={3.75}>
            <span className="text-lg">
              <span className="syntax-green">OOP Principles</span> <span className="syntax-pink">•</span>{" "}
              <span className="syntax-green">Problem Solving</span> <span className="syntax-pink">•</span>{" "}
              <span className="syntax-green">Algorithm Design</span> <span className="syntax-pink">•</span>{" "}
              <span className="syntax-green">Machine Learning</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={71} delay={3.8}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={72} delay={3.85}>
            <span className="text-xl font-semibold syntax-blue">### Professional Skills</span>
          </MarkdownLine>

          <MarkdownLine lineNumber={73} delay={3.9}>
            <span className="text-lg">
              <span className="syntax-purple">Team Collaboration</span> <span className="syntax-pink">•</span>{" "}
              <span className="syntax-purple">Adaptability</span> <span className="syntax-pink">•</span>{" "}
              <span className="syntax-purple">Communication</span> <span className="syntax-pink">•</span>{" "}
              <span className="syntax-purple">Project Management</span>
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={74} delay={3.95}>
            <span></span>
          </MarkdownLine>

          {/* Footer */}
          <MarkdownLine lineNumber={75} delay={4.0}>
            <span className="text-lg text-[var(--color-text-muted)]">
              ---
            </span>
          </MarkdownLine>

          <MarkdownLine lineNumber={76} delay={4.05}>
            <span></span>
          </MarkdownLine>

          <MarkdownLine lineNumber={77} delay={4.1}>
            <span className="text-lg">
              <span className="text-[var(--color-text-muted)]">Built with</span> <span className="syntax-pink">💜</span>{" "}
              <span className="text-[var(--color-text-muted)]">by</span>{" "}
              <a href="/" className="syntax-blue underline hover:syntax-cyan transition-colors">Ümmügülsün Türkmen</a>
            </span>
            <span className="cursor-blink ml-2" />
          </MarkdownLine>
        </div>
      </div>
    </div>
  );
}

interface MarkdownLineProps {
  lineNumber: number;
  children: React.ReactNode;
  delay: number;
}

function MarkdownLine({ lineNumber, children, delay }: MarkdownLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      className="editor-line"
      data-line={lineNumber}
    >
      {children}
    </motion.div>
  );
}
