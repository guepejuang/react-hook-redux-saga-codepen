import type from "./types";

const updateFieldValues = data => {
  return {
    type: type.UPDATE_FIELD_VALUES,
    payload: data
  };
};

export default {
  updateFieldValues
};
