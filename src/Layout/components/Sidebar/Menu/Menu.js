import classNames from "classnames/bind";
import React from "react";
import stytle from "./Menu.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(stytle);

function Menu({ children, className }) {
  return <nav className={cx("menu", className)}>{children}</nav>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;
