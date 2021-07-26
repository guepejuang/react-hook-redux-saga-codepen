import type from "./types";
const initialState = {
  fieldValues: {}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_FIELD_VALUES:
      return {
        ...state,
        fieldValues: action.payload
      };

    default:
      return state;
  }
};
export default reducer;
