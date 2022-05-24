import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem(props) {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4cb70bbfa13773f6795ca74bae4defa5.jpeg?x-expires=1653148800&x-signature=NEaOpq7I6lHgOxjIH%2BgF%2Bv7H2fM%3D"
        alt="Hoa"
      />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
        </div>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
