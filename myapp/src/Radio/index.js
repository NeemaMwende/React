import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange,
    });
  });
  // and pass the correct props to each RadioOption

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input id={value}
       type="radio" 
       name="radioGroup"
        value={value}
        checked={checked}
        // onChange={handleChange}
        onChange={(e) => { 
            onChange(e.target.value); 
          }}
       />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
