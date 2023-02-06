import styled from "./index.module.scss";
import Navbar from "./components/navBar";
import StepProgress from "./components/stepProgress";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import ProgressControl from "./components/progressControl";
import Cart from "./components/cart";
import { useState } from "react";
import { ProductDataProvider, PaymentDataProvider } from "./CartContext";
import Footer from "./components/footer";

function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [theme, setTheme] = useState(false);

  return (
    <body className={`${theme ? styled.darkTheme : styled.lightTheme}`}>
      <div className="wrap">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className={styled.stepContainer}>
          <ProductDataProvider>
            <div className={styled.stepWrap}>
              <StepProgress currentStep={currentStep} theme={theme} />
              {currentStep === 1 && <Step1 theme={theme} />}
              {currentStep === 2 && <Step2 theme={theme} />}
              <PaymentDataProvider>
                {currentStep === 3 && <Step3 theme={theme} />}
                <ProgressControl
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  theme={theme}
                />
              </PaymentDataProvider>
            </div>

            <div className={styled.cartWrap}>
              <Cart theme={theme} />
            </div>
          </ProductDataProvider>
        </div>
      </div>
      <Footer theme={theme} />
    </body>
  );
}

export default Home;
