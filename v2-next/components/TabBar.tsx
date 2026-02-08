"use client";

import { FileCode, FolderOpen, FileText, FileJson } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

interface Tab {
  name: string;
  href: string;
  icon: LucideIcon;
}

const tabs: Tab[] = [
  { name: "profile.tsx", href: "/", icon: FileCode },
  { name: "projects.tsx", href: "/projects", icon: FolderOpen },
  { name: "README.md", href: "/about", icon: FileText },
  { name: "contact.json", href: "/contact", icon: FileJson },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-10 bg-[var(--color-editor-bg-secondary)] border-b border-[var(--color-editor-border)] items-center overflow-x-auto scrollbar-hide shrink-0">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link key={tab.href} href={tab.href}>
            <div
              className={`flex items-center gap-2 px-4 h-10 text-sm font-mono border-r border-[var(--color-editor-border)] whitespace-nowrap transition-colors duration-150 ${
                isActive
                  ? "bg-[var(--color-editor-bg)] text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-editor-hover)]"
              }`}
              style={
                isActive
                  ? {
                      borderTopWidth: 2,
                      borderTopColor: "var(--color-accent-primary)",
                    }
                  : undefined
              }
            >
              <tab.icon
                size={14}
                className={
                  isActive ? "text-[var(--color-accent-primary)]" : ""
                }
              />
              <span>{tab.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
