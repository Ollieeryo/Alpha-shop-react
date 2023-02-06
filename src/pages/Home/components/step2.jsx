import step2 from "./step2.module.scss";
import { useProductData } from "../CartContext";

function Step2({ theme }) {
  // useContext Hook
  const { setShippingFee } = useProductData();

  // 建立 儲存 shipping fee 函式，並且存入 state
  const handleShippingChange = (e) => {
    const fee = e.target.value === "standard" ? 0 : 500;
    setShippingFee(fee);
  };

  // darkTheme
  const darkInputChange = theme ? step2["darkFormRow"] : null;
  const darkRadioChange = theme ? step2["darkRadio"] : null;
  const darkPChange = theme ? step2["darkP"] : null;

  return (
    <div className={step2.formWrap}>
      <h2 className={step2.stepTitle}>運送方式</h2>
      <form action="">
        <div className={step2.formRow} id={darkInputChange}>
          <div className={step2.inputWrap}>
            <input
              type="radio"
              name="shipping"
              value="standard"
              className={step2.input}
              id={darkRadioChange}
              onClick={handleShippingChange}
            />
          </div>

          <div className={step2.label}>
            <label htmlFor="">標準運送</label>
            <label htmlFor="">免費</label>
          </div>
          <p className={step2.p} id={darkPChange}>
            約 3 ~ 7 個工作天
          </p>
        </div>

        <div className={step2.formRow} id={darkInputChange}>
          <div className={step2.inputWrap}>
            <input
              type="radio"
              name="shipping"
              value="dhl"
              className={step2.input}
              id={darkRadioChange}
              onClick={handleShippingChange}
            />
          </div>
          <div className={step2.label}>
            <label htmlFor="" className={step2.dhl}>
              DHL 貨運
            </label>
            <label htmlFor="">$500</label>
          </div>
          <p className={step2.p} id={darkPChange}>
            48 小時內送達
          </p>
        </div>
      </form>
    </div>
  );
}

export default Step2;
