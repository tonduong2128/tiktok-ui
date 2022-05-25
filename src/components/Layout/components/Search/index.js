import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import * as request from "~/api-service/searchServices";
import Button from "~/components/Button";
import { useDebounce } from "~/hooks";
import AccountItem from "../AccountItem";
import { Wrapper as PopperWrapper } from "../Popper";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search(props) {
  const inputRef = useRef();
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const deboundceSearch = useDebounce(searchValue, 500);
  const [isLoading, setIsLoading] = useState(undefined);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (deboundceSearch === "") {
      setIsLoading(() => undefined);
      setSearchResult(() => []);
      return;
    }
    (async () => {
      setIsLoading(() => true);
      const result = await request.search(deboundceSearch);
      setSearchResult(result || []);
      setIsLoading(() => false);
    })();
  }, [deboundceSearch]);
  const handleButtonClear = (e) => {
    setSearchValue(() => "");
    setIsLoading(() => undefined);
    setSearchResult(() => []);
    inputRef.current.focus();
  };
  const handleClickSearch = (e) => {
    if (deboundceSearch !== "") {
      return;
    }
    (async () => {
      setIsLoading(() => true);
      if (deboundceSearch === "") {
        setIsLoading(() => undefined);
        setSearchResult(() => []);
      } else {
        setIsLoading(() => true);
        const result = await request.search(deboundceSearch, "more");
        setSearchResult(result || []);
        setIsLoading(() => false);
      }
    })();
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
              {searchResult.map((account) => (
                <li key={account.id}>
                  <AccountItem account={account} />
                </li>
              ))}
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
          onChange={(e) => setSearchValue(() => e.target.value.trim() || "")}
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
        <Button
          onClick={handleClickSearch}
          className={cx("search-btn", {
            searching: isLoading !== undefined,
          })}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
