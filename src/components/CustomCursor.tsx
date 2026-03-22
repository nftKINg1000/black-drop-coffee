"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const scrollX = useSpring(cursorX, springConfig);
  const scrollY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("img, button, a")) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    }

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: scrollX,
        translateY: scrollY,
        left: -12,
        top: -12,
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,1)",
      }}
      className="fixed w-6 h-6 rounded-full mix-blend-difference pointer-events-none z-[99999] backdrop-blur-sm sm:block"
    />
  );
}
