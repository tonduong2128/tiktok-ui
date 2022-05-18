import {
  faCircleXmark,
  faCloudArrowUp,
  faMagnifyingGlass,
  faMessage,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React, { useState } from "react";
import images from "~/assets/images";
import Tooltip from "../Tooltip";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header(props) {
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(undefined);
  const [search, setSearch] = useState("");
  const handleInputOnchage = (e) => {
    setSearch(() => e.target.value);
    if (e.target.value === "") {
      setIsLoading(() => undefined);
    } else {
      setIsLoading(() => true);
      setTimeout(() => {
        setIsLoading(() => false);
      }, 500);
    }
  };
  const handleButtonClear = (e) => {
    setSearch(() => "");
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <a href="#" className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </a>
        <div className={cx("search", { isFocus: isFocus })}>
          <input
            placeholder="Search accounts and videos"
            spellCheck={false}
            className={cx("input")}
            onFocus={() => setIsFocus(() => true)}
            onBlur={() => setIsFocus(() => false)}
            value={search}
            onChange={handleInputOnchage}
          />
          <button
            className={cx("clear", {
              isLoading: isLoading !== undefined && !isLoading,
            })}
            onClick={handleButtonClear}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <div
            className={cx("loading", {
              isLoading: isLoading !== undefined && isLoading,
            })}
          >
            <FontAwesomeIcon icon={faSpinner} />
          </div>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <ul className={cx("tool")}>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </a>
            <div className={cx("tooltip")}>
              <Tooltip content="Upload videos" />
            </div>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
            <div className={cx("tooltip")}>
              <Tooltip className={cx("tooltip")} content="Message" />
            </div>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faMessage} />
            </a>
            <div className={cx("tooltip")}>
              <Tooltip className={cx("tooltip")} content="Inbox" />
            </div>
          </li>
          <li>
            <a className={cx("avatar")} href="">
              <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1666368916613121.jpeg?x-expires=1653040800&x-signature=qdVhxeP4D%2F2Wcw8A%2FmMhkmApLlI%3D"
                alt="Avatar"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
