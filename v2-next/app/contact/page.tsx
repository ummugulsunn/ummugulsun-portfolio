"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileJson, ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
            <FileJson size={14} />
            <span>contact.json</span>
          </motion.div>
        </div>
      </div>

      {/* JSON Content */}
      <div className="px-8 py-12 font-mono max-w-5xl mx-auto">
        <div className="space-y-1">
          {/* Line 1 - Opening brace */}
          <JSONLine lineNumber={1} delay={0.3}>
            <span className="syntax-pink">{"{"}</span>
          </JSONLine>

          {/* Line 2 - Developer info */}
          <JSONLine lineNumber={2} delay={0.35}>
            <span className="ml-8">
              <span className="syntax-cyan">&quot;developer&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-pink">{"{"}</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={3} delay={0.4}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;name&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;Ümmügülsün Türkmen&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={4} delay={0.45}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;role&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;Computer Engineering Student&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={5} delay={0.5}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;location&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;Istanbul, Turkey&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={6} delay={0.55}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;system_status&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;Online&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={7} delay={0.6}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;available_for&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-pink">[</span>
              <span className="syntax-green">&quot;freelance&quot;</span>
              <span className="syntax-pink">,</span>{" "}
              <span className="syntax-green">&quot;collaborations&quot;</span>
              <span className="syntax-pink">,</span>{" "}
              <span className="syntax-green">&quot;full-time&quot;</span>
              <span className="syntax-pink">]</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={8} delay={0.65}>
            <span className="ml-8">
              <span className="syntax-pink">{"}"}</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          {/* Line 9 - Empty */}
          <JSONLine lineNumber={9} delay={0.7}>
            <span></span>
          </JSONLine>

          {/* Line 10 - Contact channels */}
          <JSONLine lineNumber={10} delay={0.75}>
            <span className="ml-8">
              <span className="syntax-cyan">&quot;contact_channels&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-pink">{"{"}</span>
            </span>
          </JSONLine>

          {/* Email */}
          <JSONLine lineNumber={11} delay={0.8}>
            <span className="ml-16 flex items-center gap-2 group">
              <span className="syntax-cyan">&quot;email&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <a 
                href="mailto:ummugulsunturkmen@gmail.com"
                className="syntax-green hover:underline decoration-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                &quot;ummugulsunturkmen@gmail.com&quot;
              </a>
              <span className="syntax-pink">,</span>
              <button
                onClick={() => copyToClipboard("ummugulsunturkmen@gmail.com", "email")}
                className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
                title="Copy email"
              >
                {copiedField === "email" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </span>
          </JSONLine>

          {/* GitHub */}
          <JSONLine lineNumber={12} delay={0.85}>
            <span className="ml-16 flex items-center gap-2 group">
              <span className="syntax-cyan">&quot;github&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <a 
                href="https://github.com/ummugulsunn"
                className="syntax-green hover:underline decoration-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                &quot;github.com/ummugulsunn&quot;
              </a>
              <span className="syntax-pink">,</span>
              <button
                onClick={() => copyToClipboard("https://github.com/ummugulsunn", "github")}
                className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
                title="Copy GitHub URL"
              >
                {copiedField === "github" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </span>
          </JSONLine>

          {/* LinkedIn */}
          <JSONLine lineNumber={13} delay={0.9}>
            <span className="ml-16 flex items-center gap-2 group">
              <span className="syntax-cyan">&quot;linkedin&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <a 
                href="https://www.linkedin.com/in/ümmügülsün-t-306904257/"
                className="syntax-green hover:underline decoration-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                &quot;linkedin.com/in/ümmügülsün-t-306904257&quot;
              </a>
              <span className="syntax-pink">,</span>
              <button
                onClick={() => copyToClipboard("https://www.linkedin.com/in/ümmügülsün-t-306904257/", "linkedin")}
                className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
                title="Copy LinkedIn URL"
              >
                {copiedField === "linkedin" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </span>
          </JSONLine>

          {/* Medium */}
          <JSONLine lineNumber={14} delay={0.95}>
            <span className="ml-16 flex items-center gap-2 group">
              <span className="syntax-cyan">&quot;medium&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <a 
                href="https://medium.com/@ummugulsun"
                className="syntax-green hover:underline decoration-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                &quot;medium.com/@ummugulsun&quot;
              </a>
              <button
                onClick={() => copyToClipboard("https://medium.com/@ummugulsun", "medium")}
                className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
                title="Copy Medium URL"
              >
                {copiedField === "medium" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </span>
          </JSONLine>

          <JSONLine lineNumber={15} delay={1.0}>
            <span className="ml-8">
              <span className="syntax-pink">{"}"}</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          {/* Line 16 - Empty */}
          <JSONLine lineNumber={16} delay={1.05}>
            <span></span>
          </JSONLine>

          {/* Line 17 - Response time */}
          <JSONLine lineNumber={17} delay={1.1}>
            <span className="ml-8">
              <span className="syntax-cyan">&quot;response_time&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-pink">{"{"}</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={18} delay={1.15}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;email&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;within 24 hours&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={19} delay={1.2}>
            <span className="ml-16">
              <span className="syntax-cyan">&quot;social&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;within 48 hours&quot;</span>
            </span>
          </JSONLine>

          <JSONLine lineNumber={20} delay={1.25}>
            <span className="ml-8">
              <span className="syntax-pink">{"}"}</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          {/* Line 21 - Empty */}
          <JSONLine lineNumber={21} delay={1.3}>
            <span></span>
          </JSONLine>

          {/* Line 22 - Preferred contact */}
          <JSONLine lineNumber={22} delay={1.35}>
            <span className="ml-8">
              <span className="syntax-cyan">&quot;preferred_contact&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;email&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          {/* Line 23 - Timezone */}
          <JSONLine lineNumber={23} delay={1.4}>
            <span className="ml-8">
              <span className="syntax-cyan">&quot;timezone&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-green">&quot;Europe/Istanbul (UTC+3)&quot;</span>
              <span className="syntax-pink">,</span>
            </span>
          </JSONLine>

          {/* Line 24 - Languages */}
          <JSONLine lineNumber={24} delay={1.45}>
            <span className="ml-8">
              <span className="syntax-cyan">&quot;languages&quot;</span>
              <span className="syntax-pink">:</span>{" "}
              <span className="syntax-pink">[</span>
              <span className="syntax-green">&quot;English&quot;</span>
              <span className="syntax-pink">,</span>{" "}
              <span className="syntax-green">&quot;Turkish&quot;</span>
              <span className="syntax-pink">]</span>
            </span>
          </JSONLine>

          {/* Line 25 - Closing brace */}
          <JSONLine lineNumber={25} delay={1.5}>
            <span className="syntax-pink">{"}"}</span>
            <span className="cursor-blink ml-2" />
          </JSONLine>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-12 p-6 bg-[var(--color-editor-bg-secondary)] border border-[var(--color-editor-border)] rounded-lg"
        >
          <p className="text-[var(--color-text-secondary)] text-lg">
            <span className="syntax-pink">//</span> Click on any link to connect or use the copy button to save contact info
          </p>
          <p className="text-[var(--color-text-secondary)] text-lg mt-2">
            <span className="syntax-pink">//</span> Available for freelance projects, collaborations, and full-time opportunities
          </p>
        </motion.div>
      </div>
    </div>
  );
}

interface JSONLineProps {
  lineNumber: number;
  children: React.ReactNode;
  delay: number;
}

function JSONLine({ lineNumber, children, delay }: JSONLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      className="editor-line text-base md:text-lg"
      data-line={lineNumber}
    >
      {children}
    </motion.div>
  );
}
