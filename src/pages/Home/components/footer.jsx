import footer from "./footer.module.scss";
import { ReactComponent as Logo } from "../public/logo.svg";
import { ReactComponent as Facebook } from "../public/facebook.svg";
import { ReactComponent as Instagram } from "../public/instagram.svg";
import { ReactComponent as Whatsapp } from "../public/whatsapp.svg";

export default function Footer({ theme }) {
  const themeChangeContainer = theme ? footer["darkContainer"] : null;

  return (
    <div className={footer.container} id={themeChangeContainer}>
      <div className={footer.wrap}>
        <div className={footer.logo}>
          <div>
            <Logo fill="orange" width="2rem" />
          </div>
          <p className={footer.logoText}>ALPHA SHOP</p>
        </div>

        <div>
          <h3 className={footer.title}>客戶服務</h3>
          <div className={footer.textWrap}>
            <p>運送說明</p>
            <p>退換貨相關</p>
            <p>付款資訊</p>
            <p>FAQ</p>
          </div>
        </div>

        <div>
          <h3 className={footer.title}>關於我們</h3>
          <div className={footer.textWrap}>
            <p>品牌故事</p>
            <p>媒體聯繫</p>
            <p>Press Kit</p>
          </div>
        </div>

        <div>
          <h3 className={footer.title}>資訊</h3>
          <div className={footer.textWrap}>
            <p>隱私權政策</p>
            <p>Cookie</p>
            <p>GDPR</p>
          </div>
        </div>

        <div>
          <h3 className={footer.title}>追蹤 ALPHA SHOP</h3>
          <div className={footer.textWrap}>
            <p>+886 02123-45678</p>
            <div className={footer.iconWrap}>
              <div>
                <Facebook width="16px" fill="gray" />
              </div>
              <div>
                <Instagram width="16px" fill="gray" />
              </div>
              <div>
                <Whatsapp width="16px" fill="gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
