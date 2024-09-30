import React, { useState, useEffect, useMemo } from "react";
import { TimePeriod, timePeriodsMock } from "../../config";
import cls from "./TimeCircle.module.scss";
import { $timePeriod, setTimePeriod } from "../../store/timePeriod";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import TimeButton from "./TimeButton";

const TimeCircle = () => {
  const timePeriod = useStore($timePeriod);

  // Вычисляем degreesPerPeriod
  const degreesPerPeriod = useMemo(
    () => 360 / timePeriodsMock.length,
    [timePeriodsMock.length]
  );

  // Функция для вычисления rotation
  const calculateRotationToPosition = (
    targetIndex: number,
    desiredAngle: number
  ) => {
    const targetAngle = (targetIndex + 1) * degreesPerPeriod;
    return desiredAngle - targetAngle;
  };

  // Находим индекс текущего timePeriod
  const currentIndex = timePeriodsMock.findIndex(
    (p) => p.id === timePeriod.id
  );

  // Вычисляем начальное значение rotation
  const initialRotation = calculateRotationToPosition(currentIndex, 270);

  // Инициализируем состояние rotation с начальным значением
  const [rotation, setRotation] = useState(initialRotation);

  // Вычисляем позиции кнопок вокруг круга
  const positions = useMemo(() => {
    return timePeriodsMock.map((_, index) => {
      const angle = index * degreesPerPeriod + 90;
      const radian = (angle * Math.PI) / 180;
      return {
        x: 265 * Math.cos(radian),
        y: 265 * Math.sin(radian),
      };
    });
  }, [degreesPerPeriod]);

  // Обработчик клика по кнопке
  const handleRotate = (newPeriod: TimePeriod) => {
    const newPeriodIndex = timePeriodsMock.findIndex(
      (p) => p.id === newPeriod.id
    );
    const newRotation = calculateRotationToPosition(newPeriodIndex, 270);
    setRotation(newRotation);
    setTimePeriod(newPeriod);
  };

  // Обновляем rotation при изменении timePeriod
  useEffect(() => {
    // Избегаем обновления rotation при первом рендере, если оно уже установлено
    if (rotation !== calculateRotationToPosition(currentIndex, 270)) {
      const newRotation = calculateRotationToPosition(currentIndex, 270);
      setRotation(newRotation);
    }
  }, [timePeriod, degreesPerPeriod, currentIndex, rotation]);

  return (
    <motion.div
      className={cls.circle}
      animate={{ rotate: rotation }}
      transition={{ type: "spring", stiffness: 600, damping: 60 }}
    >
      {timePeriodsMock.map((period, index) => (
        <TimeButton
          key={period.id}
          period={period}
          rotation={rotation}
          isSelected={period.id === timePeriod.id}
          onClick={handleRotate}
          x={positions[index].x}
          y={positions[index].y}
        />
      ))}
    </motion.div>
  );
};

export default TimeCircle;
