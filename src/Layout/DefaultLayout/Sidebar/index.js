import classNames from "classnames/bind";
import React from "react";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar(props) {
  return (
    <aside children={cx("wrapper")}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;
