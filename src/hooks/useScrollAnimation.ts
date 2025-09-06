import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.stagger-fade-up, .reveal-up, .reveal-scale');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('in-view');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return elementRef;
};

// New hook for parallax effects
export const useParallaxEffect = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        elementRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return elementRef;
};

export const useDrawAnimation = () => {
  const iconRef = useRef<SVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const paths = entry.target.querySelectorAll('path');
            paths.forEach((path) => {
              path.classList.add('animate-draw');
            });
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    const currentIcon = iconRef.current;
    if (currentIcon) {
      observer.observe(currentIcon);
    }

    return () => {
      if (currentIcon) {
        observer.unobserve(currentIcon);
      }
    };
  }, []);

  return iconRef;
};