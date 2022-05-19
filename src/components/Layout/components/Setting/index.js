import { faTiktok, faUber } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faGear,
  faKeyboard,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);
function Setting(props) {
  const { hasAccount, handleLogout } = props;
  const handleOnLogout = (e) => {
    handleLogout(e);
  };
  return (
    <div className={cx("wrapper", "setting")}>
      <ul className={cx("inner")}>
        {hasAccount && (
          <React.Fragment>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUber} />
                <div className={cx("content")}>View profile</div>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} />
                <div className={cx("content")}>Get coins</div>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGear} />
                <div className={cx("content")}>Setting</div>
              </a>
            </li>
          </React.Fragment>
        )}
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLanguage} />
            <div className={cx("content")}>English</div>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faCircleQuestion} />
            <div className={cx("content")}>Feedback and help</div>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faKeyboard} />
            <div className={cx("content")}>Keyboard shortcuts</div>
          </a>
        </li>
        {hasAccount && (
          <li className={cx("seperate")} onClick={(e) => handleOnLogout(e)}>
            <a href="#">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <div className={cx("content")}>Logout</div>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Setting;
