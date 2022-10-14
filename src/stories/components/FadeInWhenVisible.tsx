import React, { FC, useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Props
interface FadeInWhenVisibleProps {
  children: ReactNode | ReactNode[];
  duration?: number;
}

const FadeInWhenVisible: FC<FadeInWhenVisibleProps> = ({
  children,
  duration = 0.5,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration }}
      variants={{
        visible: { scale: 1, y: 0 },
        hidden: { scale: 0.985, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
