import React from "react";
import { Input } from "antd";
const Field = props => {
  const {
    handlers: { handleChange, placeholder, value, name }
  } = props;
  return (
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};
export default Field;
