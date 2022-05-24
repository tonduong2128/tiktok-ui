import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import React, { useRef, useState } from "react";
import AccountItem from "../AccountItem";
import { Wrapper as PopperWrapper } from "../Popper";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search({ className }) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [isLoading, setIsLoading] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");
  const idPreLoading = useRef(undefined);
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);

  const handleInputOnchage = (e) => {
    setSearchValue(() => e.target.value);
    if (e.target.value === "") {
      setIsLoading(() => undefined);
    } else {
      setIsLoading(() => true);
      if (idPreLoading.current !== undefined) {
        clearTimeout(idPreLoading);
      }
      idPreLoading.current = setTimeout(() => {
        setIsLoading(() => false);
        setSearchResult(() => [121]);
      }, 1000);
    }
  };
  const handleButtonClear = (e) => {
    setSearchValue(() => "");
    setIsLoading(() => undefined);
    setSearchResult(() => []);
    inputRef.current.focus();
  };
  return (
    <HeadlessTippy
      onClickOutside={() => setIsFocusInput(() => false)}
      visible={isFocusInput && searchResult.length > 0}
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
      <div className={cx("search", { isFocus: isFocusInput })}>
        <input
          placeholder="Search accounts and videos"
          spellCheck={false}
          className={cx("input")}
          onFocus={() => setIsFocusInput(() => true)}
          value={searchValue}
          onChange={handleInputOnchage}
          ref={inputRef}
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
    </HeadlessTippy>
  );
}

export default Search;
