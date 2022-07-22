import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import stytle from "./Menu.module.scss";
const cx = classNames.bind(stytle);

function MenuItem({ title, icon, to, ...rest }) {
  return (
    <NavLink
      className={(nav) => cx("menu-item", { active: nav.isActive })} //NavLink cung cấp
      to={to}
      {...rest}
    >
      <FontAwesomeIcon className={cx("icon")} icon={icon} />
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};
export default MenuItem;
