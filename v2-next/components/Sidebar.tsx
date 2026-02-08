"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  FolderOpen,
  Mail,
  User,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: FileCode, label: "Home", href: "/" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: User, label: "About", href: "/about" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden md:flex w-16 bg-[var(--color-editor-bg-secondary)] border-r border-[var(--color-editor-border)] flex-col items-center py-4 gap-2 shrink-0"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold mb-4 hover:opacity-80 transition-opacity"
        >
          üt<span className="text-[var(--color-accent-primary)]">.</span>
        </Link>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center gap-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} title={item.label}>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--color-accent-primary)] text-white"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-editor-hover)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  <item.icon size={20} />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Social Links — Bottom */}
        <div className="mt-auto flex flex-col items-center gap-3">
          <a
            href="https://github.com/ummugulsunn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%BCmm%C3%BCg%C3%BCls%C3%BCn-t-306904257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </motion.aside>

      {/* ===== Mobile Bottom Nav ===== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-editor-bg-secondary)]/95 backdrop-blur-md border-t border-[var(--color-editor-border)] flex items-center justify-around h-14">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-[var(--color-accent-primary)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                <item.icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
