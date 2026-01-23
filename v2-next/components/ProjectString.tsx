"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingImage from "./FloatingImage";
import { ExternalLink, Github } from "lucide-react";

interface ProjectStringProps {
  name: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  delay: number;
}

export default function ProjectString({
  name,
  description,
  image,
  github,
  demo,
  delay,
}: ProjectStringProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.3, ease: "easeOut" }}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4">
          {/* Project name as a clickable string */}
          <motion.span
            className="text-4xl md:text-5xl lg:text-6xl font-mono syntax-green cursor-pointer relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            &quot;{name}&quot;
            
            {/* Hover underline effect */}
            <motion.span
              className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-syntax-green)]"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>

          {/* Action buttons (visible on hover) */}
          <motion.div
            className="flex gap-2 items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10 
            }}
            transition={{ duration: 0.2 }}
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--color-editor-border)] hover:bg-[var(--color-accent-primary)] text-[var(--color-text-secondary)] hover:text-white transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--color-editor-border)] hover:bg-[var(--color-accent-primary)] text-[var(--color-text-secondary)] hover:text-white transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </motion.div>
        </div>

        {/* Description (appears on hover) */}
        <motion.div
          className="ml-8 mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-mono">
            <span className="syntax-pink">//</span> {description}
          </p>
        </motion.div>
      </motion.div>

      {/* Floating preview image */}
      <FloatingImage src={image} alt={name} isVisible={isHovered} />
    </>
  );
}
