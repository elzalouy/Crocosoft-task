import { ButtonProps } from "interface/components/Button";
import * as React from "react";
import { Link } from "react-router-dom";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link className={props.className} to={props.link}>
      {props.title}
    </Link>
  );
};

export default Button;
