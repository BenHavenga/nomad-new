"use client";

interface MovingBackgroundProps {
  className?: string;
}

export function MovingBackground({ className = "" }: MovingBackgroundProps) {
  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none -z-50 ${className}`}
      style={{
        background: `
          radial-gradient(circle at 30% 30%, 
            rgba(150, 0, 255, 0.024) 0%,
            rgba(150, 0, 255, 0.016) 25%,
            rgba(150, 0, 255, 0.008) 50%,
            transparent 70%
          ),
          radial-gradient(circle at 70% 70%, 
            rgba(120, 0, 255, 0.024) 0%,
            rgba(120, 0, 255, 0.016) 25%,
            rgba(120, 0, 255, 0.008) 50%,
            transparent 70%
          ),
          linear-gradient(
            135deg,
            rgba(14, 0, 55, 1) 0%,
            rgba(8, 0, 32, 1) 100%
          )
        `,
        opacity: 1,
      }}
    />
  );
}
