import React from "react";
import { Form } from "antd";
import commonElements from "../../common";
const { TextField } = commonElements;

const Details = props => {
  const { handleInputChange, setFieldTextState, fieldValues } = props;
  const { details } = fieldValues;
  return (
    <>
      <Form.Item>
        <TextField
          handlers={{
            handleChange: e =>
              setFieldTextState("first_name", handleInputChange(e), "details"),
            placeholder: "First Name",
            name: "first_name",
            value: details ? details.first_name : ""
          }}
        />
      </Form.Item>
      <Form.Item>
        <TextField
          handlers={{
            handleChange: e =>
              setFieldTextState("last_name", handleInputChange(e), "details"),
            placeholder: "Last Name",
            name: "last_name",
            value: details ? details.last_name : ""
          }}
        />
      </Form.Item>
    </>
  );
};

export default Details;
