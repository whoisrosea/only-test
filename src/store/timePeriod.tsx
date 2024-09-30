import { deepMap } from "nanostores";
import { TimePeriod, timePeriodsMock } from "../config";

export const $timePeriod = deepMap<TimePeriod>(timePeriodsMock[0]);

export const setTimePeriod = (period: TimePeriod) => {
  $timePeriod.set(period);
};

export const toNextTimePeriod = () => {
  const currentPeriod = $timePeriod.get();
  const index = timePeriodsMock.findIndex(
    (period) => period.id === currentPeriod.id
  );
  const nextIndex = (index + 1) % timePeriodsMock.length;
  const nextPeriod = timePeriodsMock[nextIndex];
  $timePeriod.set(nextPeriod);
};

export const toPrevTimePeriod = () => {
  const currentPeriod = $timePeriod.get();
  const index = timePeriodsMock.findIndex(
    (period) => period.id === currentPeriod.id
  );
  const prevIndex =
    (index - 1 + timePeriodsMock.length) % timePeriodsMock.length;
  const prevPeriod = timePeriodsMock[prevIndex];
  $timePeriod.set(prevPeriod);
};
