import React, { Fragment, useState } from "react";

import { faTiktok, faUber } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCloudArrowUp,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMessage,
  faPaperPlane,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";

import images from "~/assets/images";
import Button from "~/components/Button";
import Image from "~/components/Image";
import Menu from "../Popper/Menu";
import Search from "../Search";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import routes from "~/config/routes";

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
  const [hasAccount, setHasAccount] = useState(false);
  const handleMenuOnChange = (menuItem) => {
    console.log(menuItem);
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
        <Link to={routes.home} className={cx("logo")}>
          <Image src={images.logo} alt="Tiktok" />
        </Link>
        <Search />
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
                  className={cx("tooltip")}
                  content="Message"
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
                  className={cx("tooltip")}
                  content="Inbox"
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
