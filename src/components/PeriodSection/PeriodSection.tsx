import { useStore } from "@nanostores/react";
import cls from "./PeriodSection.module.scss";
import { $timePeriod } from "../../store/timePeriod";
import { useState, useEffect } from "react";

const PeriodSection = () => {
  const timePeriod = useStore($timePeriod);
  const [currentStartDate, setCurrentStartDate] = useState(
    timePeriod.startDate
  );
  const [currentEndDate, setCurrentEndDate] = useState(timePeriod.endDate);

  useEffect(() => {
    let startDate = currentStartDate;
    let endDate = currentEndDate;
    const targetStartDate = timePeriod.startDate
    const targetEndDate =timePeriod.endDate

    const interval = setInterval(() => {
      if (startDate < targetStartDate) {
        startDate++;
        setCurrentStartDate(startDate);
      } else if (startDate > targetStartDate) {
        startDate--;
        setCurrentStartDate(startDate);
      }

      if (endDate < targetEndDate) {
        endDate++;
        setCurrentEndDate(endDate);
      } else if (endDate > targetEndDate) {
        endDate--;
        setCurrentEndDate(endDate);
      }

      if (startDate === targetStartDate && endDate === targetEndDate) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [timePeriod]);

  return (
    <div className={cls.section}>
      <div className={cls.section__start}>{currentStartDate}</div>
      <div className={cls.section__end}>{currentEndDate}</div>
    </div>
  );
};

export default PeriodSection;
