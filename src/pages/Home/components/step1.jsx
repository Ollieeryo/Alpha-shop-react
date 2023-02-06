import step1 from "./step1.module.scss";

function Step1({ theme }) {
  // darkTheme
  const inputThemeChange = theme ? step1.darkInputStyle : step1.inputStyle;
  const selectThemeChange = theme ? step1.darkSelectStyle : step1.selectStyle;

  return (
    <div className={step1.formWrap}>
      <h2 className={step1.stepTitle}>寄送地址</h2>
      <form action="">
        <section className={step1.formContainer}>
          <div className={step1.selectMobile}>
            <div className={step1.formRow}>
              <label htmlFor="">稱謂</label>
              <div className={step1.selectWrap}>
                <select
                  name="title"
                  id="title"
                  required
                  className={selectThemeChange}
                >
                  <option value="" disabled selected>
                    請選擇稱謂
                  </option>
                  <option value="Mr.">先生</option>
                  <option value="Ms.">女士</option>
                </select>
              </div>
            </div>
            <div className={step1.formRowInput}>
              <label htmlFor="name">姓名</label>
              <input
                type="name"
                placeholder="請輸入姓名"
                className={inputThemeChange}
              />
            </div>
          </div>
        </section>

        <section className={step1.formContainer}>
          <div className={step1.inputMobile}>
            <div className={step1.formRowInput2}>
              <label htmlFor="phone">電話</label>
              <input
                type="phon"
                placeholder="請輸入行動電話"
                className={inputThemeChange}
              />
            </div>
            <div className={step1.formRowInput2}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="請輸入電子郵件"
                className={inputThemeChange}
              />
            </div>
          </div>
        </section>

        <section className={step1.formContainer}>
          <div className={step1.inputMobile}>
            <div className={step1.formRow} id={step1["formRowMobile"]}>
              <label htmlFor="">縣市</label>
              <div className={step1.selectWrap}>
                <select
                  name="city"
                  id="city"
                  required
                  className={selectThemeChange}
                >
                  <option value="" disabled selected>
                    請選擇縣市
                  </option>
                  <option value="台北">台北</option>
                  <option value="台中">台中</option>
                </select>
              </div>
            </div>
            <div className={step1.formRowInput}>
              <label htmlFor="">地址</label>
              <input
                type="address"
                placeholder="請輸入地址"
                className={inputThemeChange}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Step1;
