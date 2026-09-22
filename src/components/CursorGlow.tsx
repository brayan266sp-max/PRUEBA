import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CursorGlow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the ambient radial spotlight
  const springConfigSpotlight = { damping: 28, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfigSpotlight);
  const smoothY = useSpring(mouseY, springConfigSpotlight);

  // Faster springs for the precision cursor ring
  const springConfigCursor = { damping: 20, stiffness: 350, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfigCursor);
  const cursorY = useSpring(mouseY, springConfigCursor);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect clickable element hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'button, a, input, textarea, select, [role="button"], [tabindex="0"], label, .cursor-pointer'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Ambient Spotlight following the cursor for light background */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHovered ? 480 : 400,
          height: isHovered ? 480 : 400,
          translateX: '-50%',
          translateY: '-50%',
          background: isHovered
            ? 'radial-gradient(circle, rgba(112, 173, 112, 0.22) 0%, rgba(64, 131, 64, 0.08) 40%, rgba(255, 255, 255, 0) 70%)'
            : 'radial-gradient(circle, rgba(112, 173, 112, 0.14) 0%, rgba(64, 131, 64, 0.04) 40%, rgba(255, 255, 255, 0) 70%)',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
        }}
      />

      {/* 2. Interactive High-Precision Ring */}
      <motion.div
        className="absolute pointer-events-none rounded-full border flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 42 : isClicking ? 20 : 28,
          height: isHovered ? 42 : isClicking ? 20 : 28,
          borderColor: isHovered
            ? 'rgba(47, 111, 53, 0.9)'
            : 'rgba(64, 131, 64, 0.65)',
          backgroundColor: isHovered
            ? 'rgba(112, 173, 112, 0.2)'
            : isClicking
            ? 'rgba(64, 131, 64, 0.25)'
            : 'rgba(255, 255, 255, 0.7)',
          boxShadow: isHovered
            ? '0 0 16px rgba(64, 131, 64, 0.35), inset 0 0 8px rgba(112, 173, 112, 0.25)'
            : '0 0 8px rgba(64, 131, 64, 0.2)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 380,
        }}
      >
        {/* Center precision micro-dot */}
        <motion.div
          animate={{
            scale: isClicking ? 1.5 : isHovered ? 0.6 : 1,
            backgroundColor: isHovered ? '#2F6F35' : '#408340',
          }}
          className="w-1.5 h-1.5 rounded-full"
        />
      </motion.div>
    </div>
  );
};
