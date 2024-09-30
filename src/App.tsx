import cls from "./App.module.scss";
import BottomSlider from "./components/BottomSlider/BottomSlider";
import PeriodController from "./components/PeriodController/PeriodController";
import PeriodSection from "./components/PeriodSection/PeriodSection";
import TimeCircle from "./components/TimeCircle/TimeCircle";

function App() {
  return (
    <div className={cls.app}>
      <div className={cls.app__title}>
        <div className={cls.app__title_line} />
        Исторические
        <br /> даты
      </div>
      <TimeCircle />
      <PeriodController />
      <PeriodSection />
      <BottomSlider />
    </div>
  );
}

export default App;
