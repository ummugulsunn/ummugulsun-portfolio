"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-8 py-12 font-mono"
    >
      <div className="space-y-3">
        {/* Title */}
        <ML n={1}>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold syntax-blue">
            # Ümmügülsün Türkmen
          </span>
        </ML>

        <ML n={2}><span>&nbsp;</span></ML>

        {/* Subtitle */}
        <ML n={3}>
          <span className="text-xl md:text-2xl syntax-green italic">
            &gt; Computer Engineering Student | Creative Problem Solver | Clean
            Code Enthusiast
          </span>
        </ML>

        <ML n={4}><span>&nbsp;</span></ML>

        {/* About Section */}
        <ML n={5}>
          <span className="text-2xl md:text-3xl font-semibold syntax-purple">
            ## About
          </span>
        </ML>

        <ML n={6}><span>&nbsp;</span></ML>

        <ML n={7}>
          <span className="text-lg text-[var(--color-text-primary)]">
            I&apos;m a passionate{" "}
            <span className="font-bold syntax-cyan">
              Computer Engineering student
            </span>{" "}
            who transforms complex problems into
          </span>
        </ML>

        <ML n={8}>
          <span className="text-lg text-[var(--color-text-primary)]">
            elegant software solutions. With expertise in{" "}
            <span className="syntax-orange">Python</span>,{" "}
            <span className="syntax-orange">Java</span>, and modern development
            frameworks,
          </span>
        </ML>

        <ML n={9}>
          <span className="text-lg text-[var(--color-text-primary)]">
            I specialize in creating innovative applications that make a real
            impact. From image processing
          </span>
        </ML>

        <ML n={10}>
          <span className="text-lg text-[var(--color-text-primary)]">
            algorithms to mobile applications, I bring ideas to life through
            clean, efficient code.
          </span>
        </ML>

        <ML n={11}><span>&nbsp;</span></ML>

        {/* Core Competencies */}
        <ML n={12}>
          <span className="text-xl font-semibold syntax-purple">
            ### Core Competencies
          </span>
        </ML>

        <ML n={13}><span>&nbsp;</span></ML>

        <ML n={14}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">Problem Solving:</span>{" "}
            Analytical approach to complex technical challenges
          </span>
        </ML>

        <ML n={15}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">
              Technical Excellence:
            </span>{" "}
            Clean, maintainable code with focus on best practices
          </span>
        </ML>

        <ML n={16}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">Precision:</span>{" "}
            Detail-oriented development with quality focus
          </span>
        </ML>

        <ML n={17}><span>&nbsp;</span></ML>

        {/* Education */}
        <ML n={18}>
          <span className="text-2xl md:text-3xl font-semibold syntax-purple">
            ## Education
          </span>
        </ML>

        <ML n={19}><span>&nbsp;</span></ML>

        <ML n={20}>
          <span className="text-lg">
            <span className="syntax-pink">###</span>{" "}
            <span className="font-bold syntax-blue">
              BSc in Computer Engineering
            </span>
          </span>
        </ML>

        <ML n={21}>
          <span className="text-lg">
            <span className="syntax-cyan">
              Istanbul Health and Technology University
            </span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="italic text-[var(--color-text-secondary)]">
              2023 – 2027
            </span>
          </span>
        </ML>

        <ML n={22}><span>&nbsp;</span></ML>

        <ML n={23}>
          <span className="text-lg">
            <span className="syntax-pink">###</span>{" "}
            <span className="font-bold syntax-blue">
              Associate Degree in Computer Programming
            </span>
          </span>
        </ML>

        <ML n={24}>
          <span className="text-lg">
            <span className="syntax-cyan">Dokuz Eylul University</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="italic text-[var(--color-text-secondary)]">
              2024 – 2026
            </span>
          </span>
        </ML>

        <ML n={25}><span>&nbsp;</span></ML>

        {/* Experience */}
        <ML n={26}>
          <span className="text-2xl md:text-3xl font-semibold syntax-purple">
            ## Experience
          </span>
        </ML>

        <ML n={27}><span>&nbsp;</span></ML>

        <ML n={28}>
          <span className="text-lg">
            <span className="syntax-pink">###</span>{" "}
            <span className="font-bold syntax-blue">
              Information Technology Intern
            </span>{" "}
            <span className="syntax-pink">@</span>{" "}
            <span className="syntax-green">SCA SOCIAL</span>
          </span>
        </ML>

        <ML n={29}>
          <span className="text-lg">
            <span className="italic text-[var(--color-text-secondary)]">
              June 2025 – July 2025
            </span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="text-[var(--color-text-secondary)]">Istanbul</span>
          </span>
        </ML>

        <ML n={30}><span>&nbsp;</span></ML>

        <ML n={31}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Developed proficiency in{" "}
            <span className="syntax-orange">Python</span> programming for data
            analysis and automation
          </span>
        </ML>

        <ML n={32}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Enhanced design skills using{" "}
            <span className="syntax-orange">Adobe Photoshop</span> for visual
            content creation
          </span>
        </ML>

        <ML n={33}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Gained expertise in{" "}
            <span className="syntax-orange">Excel</span> for data management and
            advanced calculations
          </span>
        </ML>

        <ML n={34}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Learned{" "}
            <span className="syntax-orange">AutoCAD</span> fundamentals for
            technical drawing and design
          </span>
        </ML>

        <ML n={35}><span>&nbsp;</span></ML>

        <ML n={36}>
          <span className="text-lg">
            <span className="syntax-pink">###</span>{" "}
            <span className="font-bold syntax-blue">Merchandiser</span>{" "}
            <span className="syntax-pink">@</span>{" "}
            <span className="syntax-green">Türkmenler Socks</span>
          </span>
        </ML>

        <ML n={37}>
          <span className="text-lg">
            <span className="italic text-[var(--color-text-secondary)]">
              July 2024 – October 2024
            </span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="text-[var(--color-text-secondary)]">Istanbul</span>
          </span>
        </ML>

        <ML n={38}><span>&nbsp;</span></ML>

        <ML n={39}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Managed product inventory and
            merchandising at a family-run business
          </span>
        </ML>

        <ML n={40}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Improved customer-facing
            display performance
          </span>
        </ML>

        <ML n={41}>
          <span className="text-lg">
            <span className="syntax-pink">-</span> Gained experience in
            multitasking, teamwork, and logistics
          </span>
        </ML>

        <ML n={42}><span>&nbsp;</span></ML>

        {/* Certifications */}
        <ML n={43}>
          <span className="text-2xl md:text-3xl font-semibold syntax-purple">
            ## Certifications
          </span>
        </ML>

        <ML n={44}><span>&nbsp;</span></ML>

        <ML n={45}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">
              Supervised Machine Learning: Regression and Classification
            </span>
          </span>
        </ML>

        <ML n={46}>
          <span className="text-lg ml-4">
            <span className="text-[var(--color-text-secondary)]">
              DeepLearning.AI, Stanford University
            </span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="italic text-[var(--color-text-muted)]">
              August 2024
            </span>
          </span>
        </ML>

        <ML n={47}><span>&nbsp;</span></ML>

        <ML n={48}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">
              Project Planning: Putting It All Together
            </span>
          </span>
        </ML>

        <ML n={49}>
          <span className="text-lg ml-4">
            <span className="text-[var(--color-text-secondary)]">Google</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="italic text-[var(--color-text-muted)]">
              February 2025
            </span>
          </span>
        </ML>

        <ML n={50}><span>&nbsp;</span></ML>

        <ML n={51}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">
              Project Initiation: Starting a Successful Project
            </span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="italic text-[var(--color-text-muted)]">
              Google, Feb 2025
            </span>
          </span>
        </ML>

        <ML n={52}>
          <span className="text-lg">
            <span className="syntax-pink">-</span>{" "}
            <span className="font-bold syntax-cyan">
              Project Execution: Running the Project
            </span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="italic text-[var(--color-text-muted)]">
              Google, Feb 2025
            </span>
          </span>
        </ML>

        <ML n={53}><span>&nbsp;</span></ML>

        {/* Skills */}
        <ML n={54}>
          <span className="text-2xl md:text-3xl font-semibold syntax-purple">
            ## Skills
          </span>
        </ML>

        <ML n={55}><span>&nbsp;</span></ML>

        <ML n={56}>
          <span className="text-xl font-semibold syntax-blue">
            ### Programming Languages
          </span>
        </ML>

        <ML n={57}>
          <span className="text-lg">
            <span className="syntax-orange">Java</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-orange">Python</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-orange">C/C++</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-orange">JavaScript</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-orange">TypeScript</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-orange">Swift</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-orange">Dart</span>
          </span>
        </ML>

        <ML n={58}><span>&nbsp;</span></ML>

        <ML n={59}>
          <span className="text-xl font-semibold syntax-blue">
            ### Frameworks & Tools
          </span>
        </ML>

        <ML n={60}>
          <span className="text-lg">
            <span className="syntax-cyan">Next.js</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-cyan">React</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-cyan">Flutter</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-cyan">Tailwind CSS</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-cyan">Git/GitHub</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-cyan">Docker</span>{" "}
            <span className="syntax-pink">|</span>{" "}
            <span className="syntax-cyan">Firebase</span>
          </span>
        </ML>

        <ML n={61}><span>&nbsp;</span></ML>

        <ML n={62}>
          <span className="text-xl font-semibold syntax-blue">
            ### Key Competencies
          </span>
        </ML>

        <ML n={63}>
          <span className="text-lg">
            <span className="syntax-green">OOP Principles</span>{" "}
            <span className="syntax-pink">•</span>{" "}
            <span className="syntax-green">Problem Solving</span>{" "}
            <span className="syntax-pink">•</span>{" "}
            <span className="syntax-green">Algorithm Design</span>{" "}
            <span className="syntax-pink">•</span>{" "}
            <span className="syntax-green">Machine Learning</span>{" "}
            <span className="syntax-pink">•</span>{" "}
            <span className="syntax-green">Computer Vision</span>
          </span>
        </ML>

        <ML n={64}><span>&nbsp;</span></ML>

        {/* Footer */}
        <ML n={65}>
          <span className="text-lg text-[var(--color-text-muted)]">---</span>
        </ML>

        <ML n={66}><span>&nbsp;</span></ML>

        <div className="editor-line-active" data-line={67}>
          <span className="text-lg">
            <span className="text-[var(--color-text-muted)]">Built with</span>{" "}
            <span className="syntax-pink">💜</span>{" "}
            <span className="text-[var(--color-text-muted)]">by</span>{" "}
            <a
              href="/"
              className="syntax-blue underline hover:syntax-cyan transition-colors"
            >
              Ümmügülsün Türkmen
            </a>
          </span>
          <span className="cursor-blink ml-2" />
        </div>
      </div>
    </motion.div>
  );
}

function ML({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="editor-line" data-line={n}>
      {children}
    </div>
  );
}
