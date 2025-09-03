"use client";

import Image from "next/image";

interface ScrollingLogosProps {
  className?: string;
}

export function ScrollingLogos({ className = "" }: ScrollingLogosProps) {
  const logos = [
    { src: "/logos/2d50043b80e76d966802cde6ad48a5f4.png", alt: "Software 11", scale: 1.2 },
    { src: "/logos/slack-icon.svg", alt: "Slack", scale: 1.04 },
    { src: "/logos/autocad-vector-logo-seeklogo/autocad-seeklogo.png", alt: "AutoCAD", scale: 1.04 },
    { src: "/logos/trello-vector-logo-seeklogo/trello-seeklogo.png", alt: "Trello", scale: 1.04 },
    { src: "/logos/801c7f53f65d430e7a6ee6b23c2d6107.png", alt: "Software", scale: 1.2 },
    { src: "/logos/20fcd1663a8d597a494e3fd81f64f73f.png", alt: "Software 2", scale: 1.2 },
    { src: "/logos/gmail-logo-icon.png", alt: "Gmail", scale: 1.3 },
    { src: "/logos/809391ad559b23d48c2364eb8dd94ccd.png", alt: "Software 10", scale: 1.2 },
    { src: "/logos/1b929bfbd5cb50f3d29a3154b9f14bb9.png", alt: "Software 5", scale: 2.4 },
    { src: "/logos/f57c81a38fbef92eab8bf99276f70464.png", alt: "Software 6", scale: 1.2, invert: true },
    { src: "/logos/76cc1f3966b698bfcdff7e3723a9f0f4.png", alt: "Software 7", scale: 2.4 },
    { src: "/logos/6bf2654de04e661f8fb724c334fdf352.png", alt: "Software 8", scale: 1.2 },
    { src: "/logos/44ada239ad7ac239a0ee831a5090d810.png", alt: "Software 9", scale: 1.2 },
    { src: "/logos/9ffdd66cdafb89313fb2391fd2f05943.png", alt: "Software 4", scale: 1.2 },
    { src: "/logos/Microsoft_Office_Excel_Logo_512px.png", alt: "Microsoft Excel", scale: 1 },
    { src: "/logos/Microsoft_Office_OneNote_Logo_512px.png", alt: "Microsoft OneNote", scale: 1 },
    { src: "/logos/946df01ff29a16527cae692e79c5dd9c.png", alt: "Software 3", scale: 1.2 }
  ];

  return (
    <div className={`w-full overflow-hidden bg-transparent ${className}`}>
      <div className="relative flex -mx-32">
        <div className="animate-scroll-left flex space-x-2 py-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[60px] flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90 * logo.scale}
                height={30 * logo.scale}
                className={`object-contain ${logo.invert ? 'invert' : ''}`}
              />
            </div>
          ))}
        </div>
        <div className="animate-scroll-left flex space-x-2 py-12" aria-hidden="true">
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="relative w-[200px] h-[60px] flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90 * logo.scale}
                height={30 * logo.scale}
                className={`object-contain ${logo.invert ? 'invert' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 