import type from "./types";

const fetchUsers = data => {
  return {
    type: type.FETCH_USERS,
    payload: data
  };
};
const createUser = data => {
  return {
    type: type.CREATE_USER,
    payload: data
  };
};
const updateUser = data => {
  return {
    type: type.UPDATE_USER,
    payload: data
  };
};
const removeUser = id => {
  return {
    type: type.REMOVE_USER,
    id: id
  };
};

export default {
  fetchUsers,
  createUser,
  updateUser,
  removeUser
};
