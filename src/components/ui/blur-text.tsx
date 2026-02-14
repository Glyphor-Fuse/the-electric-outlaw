import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BlurText = ({
  text,
  className,
  delay = 0,
  animateBy = "words",
  direction = "top",
}: {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: direction === "top" ? -20 : direction === "bottom" ? 20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      transition: {
        delay: delay + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={cn("flex flex-wrap justify-center gap-x-[0.2em]", className)}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          className="inline-block"
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </div>
  );
};
