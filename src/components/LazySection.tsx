import React, { useState, useEffect, useRef, Suspense, type ReactNode } from 'react';

interface LazySectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

/**
 * A wrapper component that delays rendering of its children until it enters the viewport.
 * Useful for deferring the loading of React.lazy components and improving LCP/TBT.
 */
const LazySection: React.FC<LazySectionProps> = ({ 
  id,
  className,
  children, 
  fallback = null, 
  threshold = 0.1, 
  rootMargin = '200px' 
}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const wrapperClassName = ['w-full min-h-[100px]', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div id={id} ref={sectionRef} className={wrapperClassName}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
