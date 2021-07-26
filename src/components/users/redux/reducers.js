import type from "./types";
const initialState = {
  users: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case type.CREATE_USER:
      return {
        ...state,
        user: action.payload
      };
    case type.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    case type.REMOVE_USER:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
