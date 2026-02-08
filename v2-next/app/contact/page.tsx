"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-8 py-12 font-mono"
    >
      <div className="space-y-1">
        {/* Line 1 - Opening brace */}
        <JL n={1}>
          <span className="syntax-pink">{"{"}</span>
        </JL>

        {/* Developer info */}
        <JL n={2}>
          <span className="ml-8">
            <span className="syntax-cyan">&quot;developer&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-pink">{"{"}</span>
          </span>
        </JL>

        <JL n={3}>
          <span className="ml-16">
            <span className="syntax-cyan">&quot;name&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Ümmügülsün Türkmen&quot;
            </span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={4}>
          <span className="ml-16">
            <span className="syntax-cyan">&quot;role&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Computer Engineering Student&quot;
            </span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={5}>
          <span className="ml-16">
            <span className="syntax-cyan">&quot;location&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Istanbul, Turkey&quot;
            </span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={6}>
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
        </JL>

        <JL n={7}>
          <span className="ml-8">
            <span className="syntax-pink">{"}"}</span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={8}><span>&nbsp;</span></JL>

        {/* Contact channels */}
        <JL n={9}>
          <span className="ml-8">
            <span className="syntax-cyan">&quot;contact_channels&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-pink">{"{"}</span>
          </span>
        </JL>

        {/* Email */}
        <JL n={10}>
          <span className="ml-16 flex items-center gap-2 group">
            <span className="syntax-cyan">&quot;email&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <a
              href="mailto:ummugulsunturkmen@gmail.com"
              className="syntax-green hover:underline decoration-2"
            >
              &quot;ummugulsunturkmen@gmail.com&quot;
            </a>
            <span className="syntax-pink">,</span>
            <button
              onClick={() =>
                copyToClipboard("ummugulsunturkmen@gmail.com", "email")
              }
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
              title="Copy email"
            >
              {copiedField === "email" ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </span>
        </JL>

        {/* GitHub */}
        <JL n={11}>
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
              onClick={() =>
                copyToClipboard("https://github.com/ummugulsunn", "github")
              }
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
              title="Copy GitHub URL"
            >
              {copiedField === "github" ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </span>
        </JL>

        {/* LinkedIn */}
        <JL n={12}>
          <span className="ml-16 flex items-center gap-2 group">
            <span className="syntax-cyan">&quot;linkedin&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <a
              href="https://www.linkedin.com/in/%C3%BCmm%C3%BCg%C3%BCls%C3%BCn-t-306904257/"
              className="syntax-green hover:underline decoration-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;linkedin.com/in/ümmügülsün-t&quot;
            </a>
            <span className="syntax-pink">,</span>
            <button
              onClick={() =>
                copyToClipboard(
                  "https://www.linkedin.com/in/%C3%BCmm%C3%BCg%C3%BCls%C3%BCn-t-306904257/",
                  "linkedin"
                )
              }
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
              title="Copy LinkedIn URL"
            >
              {copiedField === "linkedin" ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </span>
        </JL>

        {/* Medium */}
        <JL n={13}>
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
              onClick={() =>
                copyToClipboard("https://medium.com/@ummugulsun", "medium")
              }
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)]"
              title="Copy Medium URL"
            >
              {copiedField === "medium" ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </span>
        </JL>

        <JL n={14}>
          <span className="ml-8">
            <span className="syntax-pink">{"}"}</span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={15}><span>&nbsp;</span></JL>

        {/* Response time */}
        <JL n={16}>
          <span className="ml-8">
            <span className="syntax-cyan">&quot;response_time&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">&quot;within 24 hours&quot;</span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={17}>
          <span className="ml-8">
            <span className="syntax-cyan">&quot;timezone&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-green">
              &quot;Europe/Istanbul (UTC+3)&quot;
            </span>
            <span className="syntax-pink">,</span>
          </span>
        </JL>

        <JL n={18}>
          <span className="ml-8">
            <span className="syntax-cyan">&quot;languages&quot;</span>
            <span className="syntax-pink">:</span>{" "}
            <span className="syntax-pink">[</span>
            <span className="syntax-green">&quot;English&quot;</span>
            <span className="syntax-pink">,</span>{" "}
            <span className="syntax-green">&quot;Turkish&quot;</span>
            <span className="syntax-pink">]</span>
          </span>
        </JL>

        {/* Closing brace */}
        <JL n={19}>
          <span className="syntax-pink">{"}"}</span>
          <span className="cursor-blink ml-2" />
        </JL>
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-[var(--color-editor-bg-secondary)] border border-[var(--color-editor-border)] rounded-lg">
        <p className="text-[var(--color-text-secondary)] text-lg">
          <span className="syntax-pink">//</span> Click on any link to connect
          or hover to copy contact info
        </p>
        <p className="text-[var(--color-text-secondary)] text-lg mt-2">
          <span className="syntax-pink">//</span> Available for freelance
          projects, collaborations, and full-time opportunities
        </p>
      </div>
    </motion.div>
  );
}

function JL({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="editor-line text-base md:text-lg" data-line={n}>
      {children}
    </div>
  );
}
