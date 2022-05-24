import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import Button from "~/components/Button";
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

  useEffect(() => {
    if (searchValue === "") {
      setIsLoading(() => undefined);
      setSearchResult(() => []);
      clearTimeout(idPreLoading.current);
    } else {
      if (idPreLoading.current !== undefined) {
        setIsLoading(() => false);
        clearTimeout(idPreLoading.current);
      }
      idPreLoading.current = setTimeout(() => {
        setIsLoading(() => true);
        fetch(
          `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue
          )}&type=less`
        )
          .then((data) => data.json())
          .then((result) => {
            setSearchResult(result.data || []);
            setIsLoading(() => false);
          })
          .catch(() => {
            setSearchResult(() => []);
            setIsLoading(() => false);
          });
      }, 500);
    }
  }, [searchValue]);
  const handleButtonClear = (e) => {
    setSearchValue(() => "");
    setIsLoading(() => undefined);
    setSearchResult(() => []);
    inputRef.current.focus();
  };
  const handleClickSearch = (e) => {
    if (searchValue !== "") {
      if (idPreLoading.current !== undefined) {
        setIsLoading(() => false);
        clearTimeout(idPreLoading.current);
      }
      idPreLoading.current = setTimeout(() => {
        setIsLoading(() => true);
        fetch(
          `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue
          )}&type=more`
        )
          .then((data) => data.json())
          .then((result) => {
            setSearchResult(result.data || []);
            setIsLoading(() => false);
          })
          .catch(() => setSearchResult(() => []));
      }, 0);
    }
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
