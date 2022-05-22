import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Header({ title, ...rest }) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} {...rest}>
        <FontAwesomeIcon className={cx("header-icon")} icon={faAngleLeft} />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

export default Header;
