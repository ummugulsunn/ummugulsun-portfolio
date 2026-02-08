"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCode,
  FolderOpen,
  FileText,
  FileJson,
  Search,
  Command,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PaletteItem {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  shortcut?: string;
}

const items: PaletteItem[] = [
  {
    id: "home",
    label: "profile.tsx",
    description: "Go to Home",
    href: "/",
    icon: FileCode,
    shortcut: "1",
  },
  {
    id: "projects",
    label: "projects.tsx",
    description: "Go to Projects",
    href: "/projects",
    icon: FolderOpen,
    shortcut: "2",
  },
  {
    id: "about",
    label: "README.md",
    description: "Go to About",
    href: "/about",
    icon: FileText,
    shortcut: "3",
  },
  {
    id: "contact",
    label: "contact.json",
    description: "Go to Contact",
    href: "/contact",
    icon: FileJson,
    shortcut: "4",
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      router.push(href);
    },
    [close, router]
  );

  // Cmd+K to open, Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          open();
        }
      }

      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, open, close]);

  // Arrow keys + Enter navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filtered.length - 1 : prev - 1
        );
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        navigate(filtered[selectedIndex].href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, navigate]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={close}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90vw] md:w-[560px] z-[101] bg-[var(--color-editor-bg-secondary)] border border-[var(--color-editor-border)] rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-editor-border)]">
              <Search
                size={16}
                className="text-[var(--color-text-muted)] shrink-0"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a file name to navigate..."
                className="flex-1 bg-transparent text-[var(--color-text-primary)] text-sm font-mono placeholder:text-[var(--color-text-muted)] outline-none"
              />
              <kbd className="hidden md:flex items-center gap-0.5 px-1.5 py-0.5 bg-[var(--color-editor-bg)] border border-[var(--color-editor-border)] rounded text-[10px] text-[var(--color-text-muted)] font-mono">
                esc
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-[var(--color-text-muted)]">
                  No results found
                </div>
              ) : (
                filtered.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.href)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      index === selectedIndex
                        ? "bg-[var(--color-accent-primary)]/15 text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-editor-hover)]"
                    }`}
                  >
                    <item.icon
                      size={16}
                      className={
                        index === selectedIndex
                          ? "text-[var(--color-accent-primary)]"
                          : "text-[var(--color-text-muted)]"
                      }
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-mono">{item.label}</span>
                      <span className="ml-2 text-xs text-[var(--color-text-muted)]">
                        {item.description}
                      </span>
                    </div>
                    {item.shortcut && (
                      <kbd className="hidden md:inline-flex px-1.5 py-0.5 bg-[var(--color-editor-bg)] border border-[var(--color-editor-border)] rounded text-[10px] text-[var(--color-text-muted)] font-mono">
                        <Command size={10} className="mr-0.5" />
                        {item.shortcut}
                      </kbd>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 px-4 py-2 border-t border-[var(--color-editor-border)] text-[10px] text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 bg-[var(--color-editor-bg)] border border-[var(--color-editor-border)] rounded">
                  ↑↓
                </kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 bg-[var(--color-editor-bg)] border border-[var(--color-editor-border)] rounded">
                  ↵
                </kbd>
                open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 bg-[var(--color-editor-bg)] border border-[var(--color-editor-border)] rounded">
                  esc
                </kbd>
                close
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
