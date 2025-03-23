
import React, { useEffect, useRef } from 'react';

interface MathProps {
  formula: string;
  block?: boolean;
}

// MathJax will be loaded from CDN and accessed via window
declare global {
  interface Window {
    MathJax: any;
  }
}

const Math: React.FC<MathProps> = ({ formula, block = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if MathJax is already loaded
    if (window.MathJax) {
      if (containerRef.current) {
        window.MathJax.typesetPromise([containerRef.current]).catch((err: any) => 
          console.error('MathJax error:', err)
        );
      }
    }
  }, [formula]);

  return (
    <div 
      ref={containerRef} 
      className={block ? 'my-4' : 'inline'}
    >
      {block ? `\\[${formula}\\]` : `\\(${formula}\\)`}
    </div>
  );
};

export default Math;
