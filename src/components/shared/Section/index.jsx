import React from "react";
import styles from "./styles.module.scss";
import Container from "../Container";

const Section = ({ children, className = "" }) => {
  return (
    <div className={`${styles.section_wrapper} ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default Section;
