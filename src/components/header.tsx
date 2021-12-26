import { HeaderProps } from "interface/components/Header";
import * as React from "react";
import "./style.css";
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <div className="AppHeader">
        <h3 className="Font1">{props.title}</h3>
      </div>
    </>
  );
};

export default Header;
