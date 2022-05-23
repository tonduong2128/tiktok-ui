import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  iconLeft,
  iconRight,
  sizeIcon,
  outlineBlack,
  ...rest
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...rest,
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
  const classes = cx("wrapper", className, {
    primary,
    outline,
    small,
    large,
    disable,
    outlineBlack,
  });
  return (
    <Comp className={classes} {...props}>
      {iconLeft && (
        <FontAwesomeIcon
          className={cx("icon-left")}
          fontSize={sizeIcon}
          icon={iconLeft}
        />
      )}
      <span>{children}</span>
      {iconRight && (
        <FontAwesomeIcon
          className={cx("icon-right")}
          fontSize={sizeIcon}
          icon={iconRight}
        />
      )}
    </Comp>
  );
}

export default Button;
