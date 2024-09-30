import {
  $timePeriod,
  toNextTimePeriod,
  toPrevTimePeriod,
} from "../../store/timePeriod";
import { useStore } from "@nanostores/react";
import { timePeriodsMock } from "../../config";
import cls from "./PeriodController.module.scss";

const PeriodController = () => {
  const timePeriod = useStore($timePeriod);
  return (
    <div className={cls.controller}>
      <div className={cls.controller__counter}>
        {timePeriod.id}/{timePeriodsMock.length}
      </div>
      <div className={cls.controller__actions}>
        <button
          disabled={timePeriod.id === 1}
          className={cls.controller__buttonLeft}
          onClick={toPrevTimePeriod}
        />
        <button
          disabled={timePeriod.id === 6}
          className={cls.controller__buttonRight}
          onClick={toNextTimePeriod}
        />
      </div>
    </div>
  );
};

export default PeriodController;
