import React from "react";
import classNames from "classnames/bind";
import styles from "./Tooltip.scss";

const cx = classNames.bind(styles);

function Tooltip(props) {
  const { content } = props;
  return <div className={cx("wrapper")}>{content}</div>;
}

export default Tooltip;
