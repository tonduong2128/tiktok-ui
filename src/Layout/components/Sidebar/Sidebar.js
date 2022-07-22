import classNames from "classnames/bind";
import React from "react";
import { Menu, MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import { router } from "~/config";
import {
  faHouse,
  faUserGroup,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar(props) {
  return (
    <aside className={cx("wrapper")}>
      <Menu className={cx("separate")}>
        <MenuItem textPrimary title="For you" to={router.home} icon={faHouse} />
        <MenuItem title="Following" to={router.follwing} icon={faUserGroup} />
        <MenuItem title="Live" to={router.live} icon={faVideo} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
