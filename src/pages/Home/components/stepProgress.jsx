import { ReactComponent as Complete } from "../public/pg-complete.svg";
import stepProgress from "./stepProgress.module.scss";

function StepProgress({ currentStep, theme }) {
  let classNameCircle = stepProgress.proCircleBold;
  let classNameTitle = stepProgress.proInfoTitle;

  if (currentStep === 1) {
    classNameCircle = stepProgress.proCircle;
    classNameTitle = stepProgress.proInfoTitle2;
  }

  // darkTheme
  let circleClass = stepProgress.proCircleBold2;
  let proLineClass = stepProgress.proLine;
  if (theme) {
    circleClass = stepProgress.darkProCircleBold2;
    proLineClass = stepProgress.proLineDark;
  }

  if (theme && currentStep !== 1) {
    classNameCircle = stepProgress.whiteProCircle;
  }

  return (
    <div className={stepProgress.stepProWrap}>
      <h1 className={stepProgress.h1}>結帳</h1>
      <div className={stepProgress.proInfo}>
        <div className={stepProgress.alignInfo}>
          {currentStep === 1 ? (
            <div className={circleClass}>1</div>
          ) : (
            <Complete width="20px" />
          )}
          <div className={stepProgress.proInfoTitle}>寄送地址</div>
        </div>
        <div className={proLineClass}></div>
        <div className={stepProgress.alignInfo}>
          {currentStep === 3 ? (
            <Complete width="20px" />
          ) : (
            <div className={classNameCircle}>2</div>
          )}
          <div className={classNameTitle}>運送方式</div>
        </div>
        {currentStep !== 3 ? (
          <div className={stepProgress.proLineGray}></div>
        ) : (
          <div className={proLineClass}></div>
        )}
        <div className={stepProgress.alignInfo}>
          <div className={stepProgress.proCircle}>3</div>
          <div className={stepProgress.proInfoTitle2}>付款資訊</div>
        </div>
      </div>
    </div>
  );
}

export default StepProgress;
