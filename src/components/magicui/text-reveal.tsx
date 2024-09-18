import React, { FC, ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  textColor?: string;
  fontSize?: string;
  textAlign?: "left" | "center" | "right";
  containerStyle?: React.CSSProperties;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  textColor = "currentColor",
  fontSize = "inherit",
  textAlign = "left",
  containerStyle = {},
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  const words = text.split(" ");
  
  const sectionHeight = "50vh";

  useEffect(() => {
    if (targetRef.current) {
      const element = targetRef.current;
      const onResize = () => {
        setElementTop(element.offsetTop);
        setElementHeight(element.offsetHeight);
      };
      
      onResize();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
  }, [targetRef]);

  const scrollYProgress = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight * 0.5],
    [0, 1]
  );

  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={targetRef}
      className={cn("relative z-10", className)}
      style={{ height: sectionHeight, ...containerStyle }}
    >
      <motion.div
        style={{
          position: 'sticky',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: containerOpacity,
          width: '90%',
          textAlign: textAlign,
        }}
        className="mx-auto flex max-w-5xl items-center bg-transparent px-4 py-8"
      >
        <p 
          className={cn("flex flex-wrap", textAlign === "center" ? "justify-center" : textAlign === "right" ? "justify-end" : "justify-start")}
          style={{
            color: textColor,
            fontSize: fontSize,
            width: '100%',
            backgroundColor: "#e1e1e1",
            borderRadius: "10px",
          }}
        >
          {words.map((word, i) => {
            const start = (i / words.length) * 0.5;
            const end = Math.min(start + 0.1, 0.5);
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} textColor={textColor}>
                {word}
              </Word>
            );
          })}
        </p>
      </motion.div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  textColor?: string;
}

const Word: FC<WordProps> = ({ children, progress, range, textColor }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2">
      <motion.span
        style={{ opacity: opacity, color: textColor }}
        className={cn("transition-colors duration-200")}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;