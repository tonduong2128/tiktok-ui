import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "../../Popper";
import Header from "./Header";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [], ...rest }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const handleClickBack = (e) => {
    setHistory((history) => {
      return [...history.slice(0, history.length - 1)];
    });
  };

  const renderItems = () => {
    return current.data.map((item, index) => {
      let handleClickItem;
      if (item.children) {
        handleClickItem = (e) => {
          setHistory((history) => [...history, item.children]);
        };
      }
      return <MenuItem data={item} onClick={handleClickItem} key={index} />;
    });
  };

  return (
    <Tippy
      interactive
      {...rest}
      render={(attrs) => (
        <PopperWrapper className={cx("menu-list")} tabIndex="-1" {...attrs}>
          {current.title && (
            <Header onClick={handleClickBack} title={current.title} />
          )}
          <div className={cx("menu-content")}>{renderItems()}</div>
        </PopperWrapper>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
