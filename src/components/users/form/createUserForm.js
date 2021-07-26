import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Radio } from "antd";
import Details from "./details";
import HealthRecord from "./healthRecord";
import QRCode from "./QRCode";
import initialState from "./initialState";
import formHandlers from "./formHandler";

const { handleFormFields, handleInputChange, updateFieldValues } = formHandlers;

const CreateUserForm = props => {
  const [form] = Form.useForm();
  const [state, setState] = useState(initialState);
  const { formLayout, formItemLayout, tab } = state;
  const { isDialogClosed } = props;

  const dispatch = useDispatch();
  const { fieldValues } = useSelector(state => {
    return {
      fieldValues: state.userForm.fieldValues
    };
  });

  useEffect(() => {
    if (isDialogClosed) {
      setState(initialState);
    }
  }, [isDialogClosed]);
  const onFormTabChange = ({ layout }) => {
    setState({
      ...state,
      tab: layout
    });
  };

  const setFieldTextState = (name, value, entity) => {
    dispatch(
      updateFieldValues(handleFormFields({ fieldValues, name, value, entity }))
    );
  };

  const properties = {
    handleInputChange: handleInputChange,
    setFieldTextState: setFieldTextState,
    fieldValues: fieldValues
  };
  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormTabChange}
      >
        <Form.Item name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="details">Details</Radio.Button>
            <Radio.Button value="healthRecord">Health Record</Radio.Button>
            <Radio.Button value="qrCode">QR Code</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {tab === "details" && <Details {...properties} />}
        {tab === "healthRecord" && <HealthRecord {...properties} />}
        {tab === "qrCode" && <QRCode {...properties} />}
      </Form>
    </div>
  );
};

export default CreateUserForm;
