// TimeButton.tsx
import React from "react";
import { motion } from "framer-motion";
import cls from "./TimeCircle.module.scss";
import { TimePeriod } from "../../config";

interface TimeButtonProps {
  period: TimePeriod;
  rotation: number;
  isSelected: boolean;
  onClick: (period: TimePeriod) => void;
  x: number;
  y: number;
}

const TimeButton: React.FC<TimeButtonProps> = ({
  period,
  rotation,
  isSelected,
  onClick,
  x,
  y,
}) => {
  const nameVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -15 },
  };

  const contentVariants = {
    selected: { scale: 1, opacity: 1 },
    hover: { scale: 1, opacity: 1 },
    initial: { scale: 0.1, opacity: 0 },
  };

  const buttonVariants = {
    selected: {
      scale: 0.5,
      opacity: 1,
      height: "56px",
      backgroundColor: "var(--white-1)",
      width: "56px",
      borderRadius: "50%",
      transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
    },
    hover: {
      scale: 1,
      opacity: 1,
      height: "56px",
      backgroundColor: "var(--white-1)",
      width: "56px",
      borderRadius: "50%",
      transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
    },
    initial: {
      overflow: "hidden",
      backgroundColor: "var(--blue-4)",
      scale: 1,
      opacity: 1,
      height: "6px",
      width: "6px",
      borderRadius: "10px",
      transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
    },
  };

  return (
    <motion.button
      onClick={() => onClick(period)}
      className={cls.button}
      variants={buttonVariants}
      style={{
        transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
      }}
      animate={isSelected ? "selected" : "initial"}
      whileHover="hover"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      aria-label={`Выбрать период ${period.name}`}
    >
      <motion.div
        variants={contentVariants}
        className={cls.content}
        transition={{ duration: 0.2 }}
      >
        {period.id}
        <motion.div
          className={cls.button__name}
          animate={isSelected ? "visible" : "hidden"}
          variants={nameVariants}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
        >
          {period.name}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default TimeButton;
