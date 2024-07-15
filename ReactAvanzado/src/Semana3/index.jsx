import { Children, cloneElement } from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = Children.map(children, (child) => {
    return cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
