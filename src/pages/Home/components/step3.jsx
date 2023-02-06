import stepStyled from "./step3.module.scss";
import { usePaymentData } from "../CartContext";

function Step3({ theme }) {
  // useContext Hook
  const { paymentData, setPaymentData } = usePaymentData();

  // 建立 儲存 credit card 使用者輸入函式，並且存入 state
  const cardHolderNameChange = (e) => {
    setPaymentData({
      ...paymentData,
      cardHolderName: e.target.value,
    });
  };

  const cardNumberChange = (e) => {
    setPaymentData({
      ...paymentData,
      cardNumber: e.target.value,
    });
  };

  const validDateChange = (e) => {
    setPaymentData({
      ...paymentData,
      validDate: e.target.value,
    });
  };

  const CCVChange = (e) => {
    setPaymentData({
      ...paymentData,
      CCV: e.target.value,
    });
  };

  // darkTheme
  const darkInput = theme ? stepStyled.darkInput : null;

  return (
    <div className={stepStyled.formWrap}>
      <h2 className={stepStyled.step3Title}>付款資訊</h2>
      <form action="">
        <div className={stepStyled.formRow}>
          <label htmlFor="name">持卡人姓名</label>
          <input
            type="name"
            placeholder="John Doe"
            className={stepStyled.input}
            id={darkInput}
            value={paymentData.cardHolderName}
            onChange={cardHolderNameChange}
          />
        </div>

        <div className={stepStyled.formRow}>
          <label htmlFor="card">卡號</label>
          <input
            type="tel"
            placeholder="1111 2222 3333 4444"
            className={stepStyled.input}
            id={darkInput}
            value={paymentData.cardNumber}
            onChange={cardNumberChange}
          />
        </div>

        <div className={stepStyled.formRow2}>
          <div className={stepStyled.formRowCode}>
            <label htmlFor="validDate">有效期限</label>
            <input
              type="valid"
              placeholder="MM/YY"
              className={stepStyled.input}
              id={darkInput}
              value={paymentData.validDate}
              onChange={validDateChange}
            />
          </div>
          <div className={stepStyled.formRowCode}>
            <label htmlFor="code">CVC / CCV</label>
            <input
              type="code"
              placeholder="123"
              className={stepStyled.input}
              id={darkInput}
              value={paymentData.CCV}
              onChange={CCVChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Step3;
