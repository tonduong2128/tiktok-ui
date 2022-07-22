import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  textPrimary,
  outline,
  onClick,
  children,
  small,
  midle,
  large,
  hover,
  disable,
  className,
  iconLeft,
  iconRight,
  sizeIcon,
  outlineBlack,
  empty,
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
    textPrimary,
    midle,
    large,
    disable,
    outlineBlack,
    hover,
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
      {empty ? children : <span>{children}</span>}
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
Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
