import React from "react";
import type from "./redux/types";
const REQUEST = "_REQUESTED";

const updateFieldValues = payload => {
  return {
    type: `${type.UPDATE_FIELD_VALUES}${REQUEST}`,
    payload: payload
  };
};
const handleFormFields = ({ fieldValues, name, value, entity }) => {
  return {
    ...fieldValues,
    [entity]: {
      ...fieldValues[entity],
      [name]: value
    }
  };
};
const handleInputChange = event => {
  const { value } = event.target;
  return value;
};
export default {
  handleFormFields,
  handleInputChange,
  updateFieldValues
};
