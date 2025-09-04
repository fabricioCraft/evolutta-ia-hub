import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
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