import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { Button } from "~/components/Button";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const AccountItem = React.forwardRef(({ account }, ref) => {
  const { full_name, avatar, nickname, tick } = account;
  return (
    <Button ref={ref} empty className={cx("wrapper")} href={`/@${nickname}`}>
      <Image
        className={cx("avatar")}
        src={avatar}
        alt={nickname || "Nickname"}
      />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <span>{nickname}</span>
          {tick && (
            <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
          )}
        </div>
        <span className={cx("username")}>{full_name}</span>
      </div>
    </Button>
  );
});
AccountItem.propTypes = {
  account: PropTypes.object,
};

export default AccountItem;
