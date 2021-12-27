import { TextAreaInputProps } from "interface/components/Input";
import * as React from "react";

const TextArea: React.FC<TextAreaInputProps> = (props) => {
  return (
    <div className="form-group mt-2">
      <label htmlFor="description">{props.title}</label>
      <textarea
        name={props.name}
        className="form-control"
        id={props.title}
        placeholder={props.title}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
    </div>
  );
};

export default TextArea;
