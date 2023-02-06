import { ReactComponent as Logo } from "../public/logo.svg";
import { ReactComponent as Search } from "../public/search.svg";
import { ReactComponent as Cart } from "../public/cart.svg";
import { ReactComponent as Moon } from "../public/moon.svg";
import { ReactComponent as Light } from "../public/sun.svg";
import { ReactComponent as Bars } from "../public/bars.svg";
import navBar from "./navBar.module.scss";
import { useState } from "react";

function Navbar({ theme, setTheme }) {
  const [menu, setMenu] = useState(false);

  const handleThemeClick = () => {
    setTheme(!theme);
  };

  // change navBar content color in darkTheme
  const navBarClass = theme
    ? navBar.navBar + " " + navBar.darkTheme
    : navBar.navBar + " " + navBar.lightTheme;
  // change icon color in darkTheme
  const iconColor = theme ? "white" : "black";

  // mobile menu change
  const handleMenu = () => {
    setMenu(!menu);
  };

  const menuHeight = menu ? "100%" : "0";
  const menuBackground = theme ? "black" : "white";

  return (
    <nav
      className={navBarClass}
      style={{ height: menuHeight, backgroundColor: menuBackground }}
    >
      <div className={navBar.barIcon}>
        <Bars width="1rem" fill={iconColor} onClick={handleMenu} />
      </div>
      <div className={navBar.navBarInfo}>
        <div className={navBar.infoWrap}>
          <a href="#">男款</a>
          <div className={navBar.grayLine}></div>
        </div>
        <div className={navBar.infoWrap}>
          <a href="#">女款</a>
          <div className={navBar.grayLine}></div>
        </div>
        <div className={navBar.infoWrap}>
          <a href="#">最新消息</a>
          <div className={navBar.grayLine}></div>
        </div>
        <div className={navBar.infoWrap}>
          <a href="#">客製商品</a>
          <div className={navBar.grayLine}></div>
        </div>
        <div className={navBar.infoWrap}>
          <a href="#">聯絡我們</a>
          <div className={navBar.grayLine}></div>
        </div>
      </div>

      <div className={navBar.navBarLogo}>
        <div>
          <Logo fill="orange" width="2rem" />
        </div>
        <span className={navBar.navBarLogoText}>ALPHA SHOP</span>
      </div>

      <div className={navBar.navBarLink}>
        <div>
          <a href="#">
            <Search width="1.5rem" fill={iconColor} />
          </a>
        </div>
        <div>
          <a href="#">
            <Cart width="1.5rem" fill={iconColor} />
          </a>
        </div>
        <div>
          <a href="#">
            {theme ? (
              <Light
                onClick={handleThemeClick}
                width="1.5rem"
                fill={iconColor}
              />
            ) : (
              <Moon onClick={handleThemeClick} width="1.5rem" />
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
