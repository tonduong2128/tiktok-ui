import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  onClick,
  children,
  small,
  large,
  disable,
  className,
  ...rest
}) {
  let Comp = "button";
  const props = {
    onClick,
  };
  if (disable) {
    delete props.onClick;
  }
  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }
  const classes = cx("wrapper", { primary, outline, small, large, disable });
  return (
    <Comp className={`${className} ${classes}`} {...props} {...rest}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
