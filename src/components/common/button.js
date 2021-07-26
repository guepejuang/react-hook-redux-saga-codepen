import React from "react";
import { Button } from "antd";
const Btn = props => {
  const {
    handlers: {
      type,
      htmlType,
      value,
      handleSubmit,
      isDisabled,
      isLoading,
      isDanger,
      btnShape
    }
  } = props;
  return (
    <Button
      type={type || "primary"}
      htmlType={htmlType || "submit"}
      onClick={handleSubmit}
      disabled={isDisabled}
      loading={isLoading}
      danger={isDanger}
      shape={btnShape}
    >
      {value}
    </Button>
  );
};
export default Btn;
