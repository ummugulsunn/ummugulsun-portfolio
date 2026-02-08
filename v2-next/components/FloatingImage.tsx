"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface FloatingImageProps {
  src: string;
  alt: string;
  isVisible: boolean;
}

export default function FloatingImage({ src, alt, isVisible }: FloatingImageProps) {
  const [mounted, setMounted] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for cursor tracking
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Offset image to be slightly away from cursor
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: 0,
        top: 0,
        x,
        y,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        rotate: isVisible ? 0 : -5,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.3, ease: "easeOut" },
        rotate: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="relative w-[400px] h-[300px] rounded-lg overflow-hidden shadow-2xl border-2 border-[var(--color-editor-border)] bg-[var(--color-editor-bg-secondary)]">
        <Image
          src={src}
          alt={alt}
          fill
          className={src.includes("app_logo") ? "object-contain p-4" : "object-cover"}
          unoptimized
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/20 to-transparent mix-blend-overlay" />
      </div>
    </motion.div>
  );
}
