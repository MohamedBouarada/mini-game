import React from "react";
import styles from "./../page.module.css";

interface ButtonProps {
  text: string;
  onButtonClick: (param:string) => void;
  param:string;
}

const Button: React.FC<ButtonProps> = ({ text ,onButtonClick,param}) => {
    const handleClick = () => {
        onButtonClick(param);
      };
  return <button className={styles.button} onClick={handleClick}>{text}</button>;
};

export default Button;
