import React, { useState, useEffect } from "react";
import styles from "./Buttons.module.css";
import Button from "react-bootstrap/Button";

const CustomButton = ({ categoria, textButton, size }) => {
  const [categoriasCSS, setCategoriaCSS] = useState("");

  useEffect(() => {
    if (categoria === "orange") {
      setCategoriaCSS(styles.orangeBtn);
    } else {
      setCategoriaCSS(styles.blueBtn);
    }

    if (size === "big") {
      setCategoriaCSS(styles.bigBtn);
    }
  }, [categoria]);

  return (
    <>
      <Button className={categoriasCSS}>{textButton}</Button>
    </>
  );
};

export default CustomButton;
