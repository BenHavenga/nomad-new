import { useEffect, useRef, useState } from 'react';

export const FlowingCircle = () => {
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const animate = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    
    const elapsed = timestamp - startTimeRef.current;
    
    // Create wave-like motion patterns with reduced frequency
    const elements = document.querySelectorAll('.flowing-blob');
    elements.forEach((element, index) => {
      // Significantly reduced frequencies and calculations
      const freq = 0.00005 + (index * 0.00001); // 40x slower than original
      const amplitude = 20 - (index * 2); // Reduced amplitude
      
      // Simplified circular motion
      const phase = (Math.PI * 2 * index) / elements.length;
      const x = Math.cos(elapsed * freq + phase) * amplitude;
      const y = Math.sin(elapsed * freq + phase) * amplitude;
      
      // Use CSS transform with hardware acceleration
      element.setAttribute('style', 
        `transform: translate3d(${x}px, ${y}px, 0) scale(1)`
      );
    });
    
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    setTimeout(() => setIsLoaded(true), 500);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center -mt-28">
      <div className={`relative w-[990px] h-[990px] transition-all duration-[5000ms] ease-out ${
        isLoaded ? 'scale-100 opacity-100' : 'scale-[0.3] opacity-0'
      }`}>
        {/* Main container with reduced animation */}
        <div className="relative w-full h-full animate-very-slow-spin">
          {/* Base glow with reduced blur */}
          <div className="absolute inset-[5%] rounded-full bg-gradient-radial from-blue-400/30 via-purple-900/30 to-transparent blur-2xl" />
          
          {/* Reduced number of wave layers with optimized blur */}
          <div className="flowing-blob absolute inset-[8%] transition-transform duration-[3000ms]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-600/40 via-blue-400/40 to-fuchsia-500/40 blur-[30px]" />
          </div>
          
          <div className="flowing-blob absolute inset-[24%] transition-transform duration-[3000ms]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/35 via-purple-600/35 to-blue-400/35 blur-[20px]" />
          </div>
          
          {/* Core glow with reduced animation */}
          <div className="absolute inset-[40%] rounded-full bg-gradient-radial from-cyan-400/30 via-fuchsia-500/20 to-transparent blur-[15px]" />
        </div>
      </div>
    </div>
  );
}; 