import { TextInputProps } from "../interface/components/Input";
import * as React from "react";

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <>
      <div className="form-group mt-2">
        <label htmlFor="exampleInputEmail1">{props.title}</label>
        <input
          name={props.name}
          type={props.type}
          value={props?.value}
          onChange={(e) => props.onChange(e)}
          className="form-control"
          placeholder={props.title}
        />
        {props.small?.length > 0 && (
          <small id="title" className="form-text text-muted">
            {props.small}
          </small>
        )}
      </div>
    </>
  );
};

export default Input;
