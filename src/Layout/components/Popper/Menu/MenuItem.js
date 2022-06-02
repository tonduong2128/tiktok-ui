import classNames from "classnames/bind";
import React from "react";
import Button from "~/components/Button";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function MenuItem({ data, ...rest }) {
  const { icon, title, topLine, ...rest2 } = data;
  return (
    <Button
      className={cx("item", { topLine })}
      iconLeft={icon}
      {...rest}
      {...rest2}
    >
      {title}
    </Button>
  );
}

export default MenuItem;
