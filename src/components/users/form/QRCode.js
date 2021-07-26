import React from "react";
import commonElements from "../../common";
import { Form } from "antd";
const { TextField } = commonElements;
const QRCode = props => {
  const { handleInputChange, setFieldTextState, fieldValues } = props;
  const { qrCode } = fieldValues;

  return (
    <>
      <Form.Item>
        <TextField
          handlers={{
            handleChange: e =>
              setFieldTextState("status", handleInputChange(e), "qrCode"),
            placeholder: "Status",
            name: "status",
            value: qrCode ? qrCode.status : ""
          }}
        />
      </Form.Item>
    </>
  );
};

export default QRCode;
