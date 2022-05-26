import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem({ account }) {
  const { full_name, avatar, nickname, tick } = account;
  return (
    <Button empty className={cx("wrapper")} href={`/@${nickname}`}>
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
}

export default AccountItem;
