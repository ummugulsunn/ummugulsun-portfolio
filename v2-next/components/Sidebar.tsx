"use client";

import { motion } from "framer-motion";
import { FileCode, FolderOpen, Mail, User, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: FileCode, label: "Explorer", href: "/" },
    { icon: FolderOpen, label: "Projects", href: "/projects" },
    { icon: User, label: "About", href: "/about" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-16 bg-[var(--color-editor-bg-secondary)] border-r border-[var(--color-editor-border)] flex flex-col items-center py-6 gap-6"
    >
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        
        return (
          <motion.div key={item.label}>
            <Link href={item.href}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-accent-primary)] text-white"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-editor-hover)] hover:text-[var(--color-text-primary)]"
                }`}
                title={item.label}
              >
                <item.icon size={20} />
              </motion.button>
            </Link>
          </motion.div>
        );
      })}

      {/* Social Links at Bottom */}
      <div className="mt-auto flex flex-col gap-4">
        <a
          href="https://github.com/ummugulsunn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ümmügülsün-t-306904257/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </motion.aside>
  );
}
