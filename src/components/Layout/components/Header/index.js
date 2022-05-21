import {
  faCircleXmark,
  faCloudArrowUp,
  faEllipsisVertical,
  faMagnifyingGlass,
  faMessage,
  faPaperPlane,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React, { useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import images from "~/assets/images";
import Setting from "../Setting";
import Tooltip from "../Tooltip";
import styles from "./Header.module.scss";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function Header(props) {
  const [isFocus, setIsFocus] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(undefined);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const idPreLoading = useRef(undefined);

  const handleInputOnchage = (e) => {
    setSearch(() => e.target.value);
    if (e.target.value === "") {
      setIsLoading(() => undefined);
    } else {
      setIsLoading(() => true);
      if (idPreLoading.current != undefined) {
        clearTimeout(idPreLoading);
      }
      idPreLoading.current = setTimeout(() => {
        setIsLoading(() => false);
      }, 1000);
    }
  };
  const handleButtonClear = (e) => {
    setSearch(() => "");
    setIsLoading(() => undefined);
  };
  const handleOnLogin = (e) => {
    setTimeout(() => {
      setHasAccount(() => true);
    }, 1000);
  };
  const handleOnLogout = (e) => {
    setTimeout(() => {
      setHasAccount(() => false);
    }, 1000);
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <a href="#" className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </a>
        <Tippy
          visible={isLoading != undefined}
          interactive={true}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <ul className={cx("accounts-result")}>
                  <li>
                    <AccountItem />
                  </li>
                  <li>
                    <AccountItem />
                  </li>
                  <li>
                    <AccountItem />
                  </li>
                  <li>
                    <AccountItem />
                  </li>
                </ul>
              </PopperWrapper>
            </div>
          )}
        >
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
            <button
              className={cx("search-btn", {
                searching: isLoading != undefined,
              })}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        {hasAccount ? (
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
                <Tooltip content="Message" />
              </div>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMessage} />
              </a>
              <div className={cx("tooltip")}>
                <Tooltip content="Inbox" />
              </div>
            </li>
            <li>
              <a className={cx("avatar")} href="#">
                <img
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1666368916613121.jpeg?x-expires=1653040800&x-signature=qdVhxeP4D%2F2Wcw8A%2FmMhkmApLlI%3D"
                  alt="Avatar"
                />
              </a>
              <div className={cx("tooltip", "setting")}>
                <Setting handleLogout={handleOnLogout} hasAccount />
              </div>
            </li>
          </ul>
        ) : (
          <ul className={cx("tool")}>
            <li>
              <Button
                onClick={(e) => console.log("Heelo")}
                outline
                className={cx("btn-upload")}
              >
                Upload
              </Button>
            </li>
            <li>
              <Button primary onClick={handleOnLogin}>
                Login
              </Button>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </a>
              <div className={cx("tooltip", "setting")}>
                <Setting />
              </div>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
