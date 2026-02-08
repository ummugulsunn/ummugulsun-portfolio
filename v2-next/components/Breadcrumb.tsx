"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const pathMap: Record<string, string[]> = {
  "/": ["src", "app", "profile.tsx"],
  "/projects": ["src", "app", "projects.tsx"],
  "/about": ["src", "app", "README.md"],
  "/contact": ["src", "app", "contact.json"],
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathMap[pathname] || pathMap["/"];

  return (
    <div className="hidden md:flex h-6 bg-[var(--color-editor-bg)] border-b border-[var(--color-editor-border)] items-center px-4 text-[12px] font-mono text-[var(--color-text-muted)] select-none shrink-0 gap-0.5">
      {segments.map((segment, index) => (
        <span key={index} className="flex items-center gap-0.5">
          {index > 0 && (
            <ChevronRight size={12} className="text-[var(--color-text-muted)] opacity-60" />
          )}
          <span
            className={
              index === segments.length - 1
                ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] cursor-default transition-colors"
                : "hover:text-[var(--color-text-secondary)] cursor-default transition-colors"
            }
          >
            {segment}
          </span>
        </span>
      ))}
    </div>
  );
}
