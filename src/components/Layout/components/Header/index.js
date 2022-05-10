import classNames from "classnames/bind";
import React from "react";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>Header</div>
    </header>
  );
}

export default Header;
