import React from "react";
import styles from "./styles.module.scss";
const Container = ({ children, className }) => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <div className={`${styles.container} ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
