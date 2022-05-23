import { faTiktok, faUber } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCircleXmark,
  faCloudArrowUp,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faMessage,
  faPaperPlane,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import React, { Fragment, useRef, useState } from "react";
import "tippy.js/dist/tippy.css"; // optional
import images from "~/assets/images";
import Button from "~/components/Button";
import Image from "~/components/Image";
import AccountItem from "../AccountItem";
import { Wrapper as PopperWrapper } from "../Popper";
import Menu from "../Popper/Menu";
import styles from "./Header.module.scss";

const MENU_ITEMS = [
  {
    icon: faLanguage,
    title: "English",
    children: {
      title: "Languge",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vn",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: faCircleQuestion,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: faKeyboard,
    title: "Keyboard shortcutslish",
  },
];

const MENU_ITEMS_USER = [
  {
    icon: faUber,
    title: "View profile",
    to: "/@_tonduong",
  },
  {
    icon: faTiktok,
    title: "Get coins",
    to: "/coins",
  },
  {
    icon: faGear,
    title: "Setting",
    to: "/setting",
  },
  {
    icon: faLanguage,
    title: "English",
  },
  {
    icon: faCircleQuestion,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: faKeyboard,
    title: "Keyboard shortcuts",
  },
  {
    icon: faArrowRightFromBracket,
    title: "Logout",
    topLine: true,
  },
];

const cx = classNames.bind(styles);
function Header(props) {
  const [isFocus, setIsFocus] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(undefined);
  const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  const idPreLoading = useRef(undefined);

  const handleMenuOnChange = (menuItem) => {
    console.log(menuItem);
  };
  const handleInputOnchage = (e) => {
    setSearch(() => e.target.value);
    if (e.target.value === "") {
      setIsLoading(() => undefined);
    } else {
      setIsLoading(() => true);
      if (idPreLoading.current !== undefined) {
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
  MENU_ITEMS_USER.find((item) => item.title === "Logout").onClick =
    handleOnLogout;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <a href="#" className={cx("logo")}>
          <Image src={images.logo} alt="Tiktok" />
        </a>
        <Tippy
          visible={isLoading !== undefined}
          delay={200}
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
                searching: isLoading !== undefined,
              })}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <ul className={cx("actions")}>
          {hasAccount ? (
            <Fragment>
              <li>
                <Button
                  className={cx("btn-content")}
                  iconLeft={faCloudArrowUp}
                  outline
                >
                  Upload
                </Button>
              </li>
              <li>
                <Tippy
                  placement="bottom"
                  interactive
                  render={(attrs) => (
                    <div className={cx("tooltip")} tabIndex="-1" {...attrs}>
                      Message
                    </div>
                  )}
                >
                  <p>
                    <Button
                      className={cx("btn-icon")}
                      iconLeft={faPaperPlane}
                      sizeIcon={20}
                    />
                  </p>
                </Tippy>
              </li>
              <li>
                <Tippy
                  placement="bottom"
                  interactive
                  render={(attrs) => (
                    <div className={cx("tooltip")} tabIndex="-1" {...attrs}>
                      Inbox
                    </div>
                  )}
                >
                  <p>
                    <Button
                      className={cx("btn-icon")}
                      iconLeft={faMessage}
                      sizeIcon={20}
                    />
                  </p>
                </Tippy>
              </li>
              <li>
                <Menu
                  delay={[0, 200]}
                  items={MENU_ITEMS_USER}
                  placement="bottom-end"
                >
                  <button className={cx("btn-icon", "avatar")}>
                    <Image
                      src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1666368916613121.jpeg?x-expires=1653040800&x-signature=qdVhxeP4D%2F2Wcw8A%2FmMhkmApLlI%3D"
                      alt="Avatar"
                    />
                  </button>
                </Menu>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Button
                  iconLeft={faPlus}
                  onClick={(e) => console.log("Heelo")}
                  outline
                  className={cx("btn-content")}
                >
                  Upload
                </Button>
              </li>
              <li>
                <Button
                  primary
                  className={cx("btn-content")}
                  onClick={handleOnLogin}
                >
                  Login
                </Button>
              </li>
              <li>
                <Menu
                  delay={[0, 200]}
                  placement="bottom-end"
                  items={MENU_ITEMS}
                  onChange={handleMenuOnChange}
                >
                  <button className={cx("btn-more")}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </Menu>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
