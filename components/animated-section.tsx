"use client";

import { useEffect, useRef, memo, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fade-up"
    | "fade-in"
    | "slide-in-left"
    | "slide-in-right"
    | "zoom-in";
  delay?: number;
  className?: string;
}

const AnimatedSection = memo(function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const animationClasses = {
      "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      "fade-in": isVisible ? "opacity-100" : "opacity-0",
      "slide-in-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
      "slide-in-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
      "zoom-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    };

    return `${baseClasses} ${animationClasses[animation]}`;
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
});

export { AnimatedSection };
