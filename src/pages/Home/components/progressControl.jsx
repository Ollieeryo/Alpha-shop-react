import controlStyled from "./progressControl.module.scss";
import { ReactComponent as ArrowLeft } from "../public/arrow-left.svg";
import { usePaymentData } from "../CartContext";
import { useProductData } from "../CartContext";

function PreButton({ onClick, currentStep, id, fill }) {
  return (
    <div>
      {currentStep !== 1 ? (
        <a href="#" onClick={onClick}>
          <ArrowLeft
            width="1rem"
            className={controlStyled.preLinkIcon}
            fill={fill}
          />
          <span className={controlStyled.preLinkButton} id={id}>
            上一步
          </span>
        </a>
      ) : null}
    </div>
  );
}

function NextButton({ onClick, currentStep }) {
  let inputValue;
  if (currentStep === 3) {
    inputValue = "確認下單";
  } else {
    inputValue = "下一步";
  }

  // mobile
  const mobileButton =
    currentStep === 1
      ? controlStyled.button + " " + controlStyled.mobileButton
      : controlStyled.button;
  return (
    <>
      <input
        type="submit"
        value={inputValue}
        className={mobileButton}
        onClick={onClick}
      />
    </>
  );
}

export default function ProgressControl({
  currentStep,
  setCurrentStep,
  theme,
}) {
  // useContext Hook
  const { paymentData } = usePaymentData();
  const { total } = useProductData();

  // 建立 上一步、下一步的 Step 組件切換，和確認訂單的 console.log 資料
  const handleClick = (event) => {
    event.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1); // 顯示下一個步驟
    } else if (currentStep === 3) {
      // 確認訂單
      // 印出 信用卡 和 購物車總金額資料
      console.log(paymentData);
      console.log(total);
    }
  };

  const handlePreClick = (event) => {
    event.preventDefault();
    if (currentStep >= 2 && currentStep <= 3) {
      setCurrentStep(currentStep - 1); // 顯示上一個步驟
    }
  };

  // darkTheme
  const darkPreButton = theme ? controlStyled["darkPreButton"] : null;
  const darkArrowIcon = theme ? "white" : "black";

  return (
    <div className={controlStyled.mobile}>
      <div className={controlStyled.controlLine}></div>
      <div className={controlStyled.buttonWrap}>
        <PreButton
          onClick={handlePreClick}
          currentStep={currentStep}
          id={darkPreButton}
          fill={darkArrowIcon}
        />
        <NextButton onClick={handleClick} currentStep={currentStep} />
      </div>
    </div>
  );
}
