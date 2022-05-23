import classNames from "classnames/bind";
import React, { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(
  ({ fallcack = images.noAvatar, className, src, ...props }, ref) => {
    const [srcNoAvatar, setSrcNoAvatar] = useState("");
    return (
      <img
        className={cx(className, "img")}
        {...props}
        src={srcNoAvatar || src}
        ref={ref}
        onError={() => setSrcNoAvatar(fallcack)}
      />
    );
  }
);

export default Image;
