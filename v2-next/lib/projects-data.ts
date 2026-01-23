export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "cf-ai-support-bot",
    name: "CF AI Support Bot",
    description: "Intelligent support agent built on Edge infrastructure using Llama 3 LLM for real-time, context-aware interactions.",
    tech: ["TypeScript", "Cloudflare Workers", "Llama 3.3"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/cf_ai_supportbot",
    year: 2024,
  },
  {
    id: "prayer-timer",
    name: "Prayer Timer",
    description: "A native, minimalist macOS menu bar utility for tracking prayer times with live countdowns and system integrations.",
    tech: ["Swift", "AppKit", "macOS"],
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/prayertimer",
    year: 2024,
  },
  {
    id: "neurotech-blink-detection",
    name: "Neurotech Blink Detection",
    description: "Experimental Brain-Computer Interface (BCI) system detecting eye blinks via EEG signals to trigger hardware controls.",
    tech: ["C++", "Arduino", "EEG"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/neurotech-blink-detection",
    year: 2024,
  },
  {
    id: "lensify-ocr-scanner",
    name: "Lensify OCR Scanner",
    description: "High-performance mobile OCR scanner featuring handwriting recognition, batch scanning, and PDF export.",
    tech: ["Flutter", "Dart", "ML Kit"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/lensify-ocr-scanner",
    year: 2024,
  },
  {
    id: "ai-application-tracker",
    name: "AI Application Tracker",
    description: "Smart job application tracking system optimized for performance, featuring AI-driven insights and Kanban boards.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/ai-application-tracker",
    year: 2024,
  },
  {
    id: "gesture-groove",
    name: "Gesture Groove",
    description: "Computer Vision system for controlling digital interfaces through real-time hand gesture recognition.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/gesture-groove-imageprocessing-final-project",
    year: 2024,
  },
];
