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
    id: "ehliyet-rehberim",
    name: "Ehliyet Rehberim",
    description:
      "Full-featured driving license exam prep app published on Google Play with a 5.0 star rating. Includes timed practice exams, progress tracking, and offline support.",
    tech: ["Flutter", "Dart", "Firebase", "Google Play"],
    image:
      "https://images.unsplash.com/photo-1449965408869-ebd13bc9e5c8?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/ehliyet-rehberim",
    year: 2025,
  },
  {
    id: "flowstate-ai",
    name: "FlowState AI",
    description:
      "AI-powered user behavior analysis tool that identifies individuals through keystroke dynamics patterns. Uses machine learning for real-time typing biometrics.",
    tech: ["Python", "scikit-learn", "Pandas", "AI/ML"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/FlowStateAI",
    year: 2026,
  },
  {
    id: "stremio-dual-subtitles",
    name: "Stremio Dual Subtitles",
    description:
      "Stremio addon enabling dual subtitle display for language learners. Watch any content with two languages simultaneously. Deployed on Vercel with active users.",
    tech: ["JavaScript", "Node.js", "Stremio SDK", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/stremio-dual-subtitles",
    demo: "https://stremio-dual-subtitles.vercel.app",
    year: 2026,
  },
  {
    id: "lensify-ocr-scanner",
    name: "Lensify OCR Scanner",
    description:
      "High-performance mobile OCR scanner with handwriting recognition, batch document scanning, and PDF export. Built with Google ML Kit for on-device processing.",
    tech: ["Flutter", "Dart", "ML Kit", "OCR"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/lensify-ocr-scanner",
    year: 2025,
  },
  {
    id: "nexus-analytics",
    name: "Nexus Analytics",
    description:
      "Real-time analytics dashboard with interactive data visualizations, filterable metrics, and responsive design. Built with modern TypeScript architecture.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Charts"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/nexus-analytics",
    year: 2026,
  },
  {
    id: "gesture-groove",
    name: "Gesture Groove",
    description:
      "Computer vision system that controls music playback through real-time hand gesture recognition. Final project for Image Processing course using MediaPipe.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&q=80",
    github:
      "https://github.com/ummugulsunn/gesture-groove-imageprocessing-final-project",
    year: 2025,
  },
  {
    id: "image-processing",
    name: "Image Processing Lab",
    description:
      "Collection of image processing techniques and experiments including edge detection, filtering, morphological operations, and histogram analysis.",
    tech: ["Python", "Jupyter", "OpenCV", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/ummugulsunn/Image-Processing",
    year: 2026,
  },
  {
    id: "campus-marketplace",
    name: "Campus Marketplace",
    description:
      "Full-stack second-hand marketplace platform for university students. Features user auth, product listings, search/filter, and a messaging system.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    github:
      "https://github.com/ummugulsunn/campus-second-hand-marketplace",
    year: 2025,
  },
];
