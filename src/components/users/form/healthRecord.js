import React from "react";
import commonElements from "../../common";
import { Form } from "antd";
const { TextField } = commonElements;

const HealthRecord = props => {
  const { handleInputChange, setFieldTextState, fieldValues } = props;
  const { healthRecord } = fieldValues;
  return (
    <>
      <Form.Item>
        <TextField
          handlers={{
            handleChange: e =>
              setFieldTextState(
                "current_health_status",
                handleInputChange(e),
                "healthRecord"
              ),
            placeholder: "Current Health Status",
            name: "current_health_status",
            value: healthRecord ? healthRecord.current_health_status : ""
          }}
        />
      </Form.Item>
    </>
  );
};

export default HealthRecord;
