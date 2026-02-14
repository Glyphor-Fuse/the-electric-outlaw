import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 2,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 7,
      repeatDelay: 2,
      delay: 2,
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-20",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-screen bg-background relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <Beam
          key={beam.initialX + "beam-collision"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 z-0"
      ></div>
    </div>
  );
};

const Beam = ({
  className,
  containerRef,
  parentRef,
  beamOptions,
}: {
  className?: string;
  containerRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
  beamOptions: {
    initialX?: number;
    translateX?: number;
    initialY?: number;
    translateY?: number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
  };
}) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, (beamOptions.duration || 5) * 1000 + (beamOptions.repeatDelay || 0) * 1000);
    return () => clearInterval(interval);
  }, [beamOptions.duration, beamOptions.repeatDelay]);

  return (
    <motion.div
      key={cycle}
      ref={beamRef}
      initial={{
        translateY: beamOptions.initialY || "-200px",
        translateX: beamOptions.initialX || "0px",
        rotate: beamOptions.rotate || 0,
      }}
      animate={{
        translateY: beamOptions.translateY || "1200px",
        translateX: beamOptions.translateX || "0px",
        rotate: beamOptions.rotate || 0,
      }}
      transition={{
        duration: beamOptions.duration || 5,
        delay: beamOptions.delay || 0,
        ease: "linear",
      }}
      className={cn(
        "absolute left-0 top-4 m-auto h-14 w-px rounded-full bg-gradient-to-t from-primary to-transparent",
        className
      )}
    />
  );
};
