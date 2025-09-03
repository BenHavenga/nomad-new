import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import GradientText from './GradientText'

const styles = {
  wrapper: {
    display: 'inline-block' as const,
    whiteSpace: 'pre-wrap' as const,
  },
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  },
}

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view';
  delay?: number;
  completionDelay?: number;
  gradientWords?: string[];
  [key: string]: any;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  delay = 0,
  completionDelay = 0,
  gradientWords = [],
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set<number>());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let currentIteration = 0;
    let completionTimeout: NodeJS.Timeout | undefined;

    const getNextIndex = (revealedSet: Set<number>): number => {
      const textLength = text.length;
      switch (revealDirection) {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1;

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }

          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char: string) => char !== ' ')
      : characters.split('');

    const shuffleText = (originalText: string, currentRevealed: Set<number>): string => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char: string, i: number) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }));

        const nonSpaceChars = positions
          .filter((p: any) => !p.isSpace && !p.isRevealed)
          .map((p: any) => p.char);

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
            ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
        }

        let charIndex = 0;
        return positions
          .map((p: any) => {
            if (p.isSpace) return ' ';
            if (p.isRevealed) return originalText[p.index];
            return nonSpaceChars[charIndex++];
          })
          .join('');
      } else {
        return originalText
          .split('')
          .map((char: string, i: number) => {
            if (char === ' ') return ' ';
            if (currentRevealed.has(i)) return originalText[i];
            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join('');
      }
    };

    if (isHovering) {
      setIsScrambling(true);
      
      // Set completion timeout
      if (completionDelay > 0) {
        completionTimeout = setTimeout(() => {
          setIsScrambling(false);
          setDisplayText(text);
          if (interval) clearInterval(interval);
        }, completionDelay);
      }
      
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            } else {
              if (interval) clearInterval(interval);
              setIsScrambling(false);
              return prevRevealed;
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              if (interval) clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (completionTimeout) clearTimeout(completionTimeout);
    };
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
    completionDelay,
  ]);

  useEffect(() => {
    if (animateOn !== 'view') return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start showing scrambled characters immediately
          setIsHovering(true);
          setIsScrambling(true);
          
          // After delay, start the actual sequential decryption
          setTimeout(() => {
            setHasAnimated(true);
            // Reset revealed indices to start fresh sequential decryption
            setRevealedIndices(new Set());
          }, delay);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, hasAnimated, delay]);

  const hoverProps =
    animateOn === 'hover'
      ? {
        onMouseEnter: () => setIsHovering(true),
        onMouseLeave: () => setIsHovering(false),
      }
      : {};

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
      <span style={styles.srOnly}>{displayText}</span>

      <span aria-hidden="true">
        {gradientWords.length > 0 ? (
          <GradientText
            text={displayText}
            gradientWords={gradientWords}
            className={className}
          />
        ) : (
          displayText.split('').map((char: string, index: number) => {
            const isRevealedOrDone =
              revealedIndices.has(index) || !isScrambling || !isHovering;

            return (
              <span
                key={index}
                className={isRevealedOrDone ? className : encryptedClassName}
              >
                {char}
              </span>
            );
          })
        )}
      </span>
    </motion.span>
  );
} 