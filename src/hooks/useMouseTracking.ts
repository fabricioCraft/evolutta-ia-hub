import { useState, useEffect, useRef } from 'react';

export const useMouseTracking = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let animationId: number;
    let autoMoveAngle = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInside = event.clientX >= rect.left && 
                        event.clientX <= rect.right && 
                        event.clientY >= rect.top && 
                        event.clientY <= rect.bottom;
        
        setIsHovering(isInside);
        
        if (isInside) {
          const relativeX = event.clientX - rect.left - rect.width / 2;
          const relativeY = event.clientY - rect.top - rect.height / 2;
          setMousePosition({ x: relativeX, y: relativeY });
        }
      }
      
      setIsMoving(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const autoMove = () => {
       if (!isHovering) {
         autoMoveAngle += 0.03;
         const x = Math.sin(autoMoveAngle) * 80;
         const y = Math.cos(autoMoveAngle * 0.8) * 60;
         setMousePosition({ x, y });
       }
       animationId = requestAnimationFrame(autoMove);
     };

    window.addEventListener('mousemove', handleMouseMove);
    autoMove();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
    };
  }, [isHovering]);

  return { mousePosition, isMoving, isHovering, elementRef };
};

export default useMouseTracking;