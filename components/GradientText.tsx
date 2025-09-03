import React from 'react';

interface GradientTextProps {
  text: string;
  gradientWords: string[];
  className?: string;
  gradientClassName?: string;
}

export default function GradientText({ 
  text, 
  gradientWords, 
  className = "", 
  gradientClassName = "bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent" 
}: GradientTextProps) {
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, index) => {
        const isGradient = gradientWords.some(gradientWord => 
          word.toLowerCase().includes(gradientWord.toLowerCase())
        );
        
        return (
          <span
            key={index}
            className={isGradient ? gradientClassName : ""}
          >
            {word}{index < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </span>
  );
} 