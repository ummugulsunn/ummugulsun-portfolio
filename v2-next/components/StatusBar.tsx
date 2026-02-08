"use client";

import { usePathname } from "next/navigation";
import { GitBranch } from "lucide-react";

const pageConfig: Record<string, { language: string; file: string }> = {
  "/": { language: "TypeScript React", file: "profile.tsx" },
  "/projects": { language: "TypeScript React", file: "projects.tsx" },
  "/about": { language: "Markdown", file: "README.md" },
  "/contact": { language: "JSON", file: "contact.json" },
};

export default function StatusBar() {
  const pathname = usePathname();
  const config = pageConfig[pathname] || pageConfig["/"];

  return (
    <div className="hidden md:flex h-6 bg-[#1f6feb] items-center justify-between px-3 text-[11px] text-white/90 font-mono select-none shrink-0">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch size={12} />
          main
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#3fb950]" />
          0 errors
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#d29922]" />
          0 warnings
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>{config.language}</span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-white/60" />
          Prettier
        </span>
      </div>
    </div>
  );
}
