import React from "react";
import { v1 as uuidv1 } from "uuid";
import type from "./redux/types";
import initialState from "./initialState";
const REQUEST = "_REQUESTED";

const getUsers = payload => {
  return {
    type: `${type.FETCH_USERS}${REQUEST}`,
    payload: payload
  };
};
const handleCreate = payload => {
  const fieldValues = {
    ...payload,
    user: {
      ...payload.details,
      id: `u-${uuidv1()}`,
      gender: "F",
      date_of_birth: "07/15/1990",
      date_of_birth_obj: {
        month: "07",
        day: "15",
        year: "1990"
      },
      address:
        "REL Engineering Pte Ltd Level 4-220 Plaza Mart Building Gatuslao St Bacolod City 6100 Philippines",
      contact_number: "0943567901",
      email: "jen@gmail.com",
      created_date: "07/15/1990",
      updated_date: "07/15/1990"
    }
  };
  return {
    type: `${type.CREATE_USER}${REQUEST}`,
    payload: fieldValues
  };
};
const handleCreateDialogVisibility = payload => {
  return {
    ...payload,
    isCreateDialog: !payload.isCreateDialog
  };
};
const viewUpdateForm = payload => {
  return {
    ...initialState,
    updateUserDetails: payload
  };
};
const handleInputChange = event => {
  const { value } = event.target;
  return value;
};
const handleCancel = () => {
  return {
    ...initialState,
    updateUserDetails: null
  };
};
const handleUpdate = payload => {
  return {
    type: `${type.UPDATE_USER}${REQUEST}`,
    user: payload,
    isUpdating: true,
    updateUserDetails: null
  };
};
const handleDelete = id => {
  return {
    type: `${type.REMOVE_USER}${REQUEST}`,
    id: id,
    isDeleting: true
  };
};
const handleDeleteDialogVisibility = (payload, user) => {
  return {
    ...payload,
    isConfirmDialog: !payload.isConfirmDialog,
    isDeleting: payload.isDelete,
    userId: user ? user.id : null,
    userName: user ? user.first_name : ""
  };
};
export default {
  getUsers,
  handleCreate,
  handleCreateDialogVisibility,
  viewUpdateForm,
  handleInputChange,
  handleCancel,
  handleUpdate,
  handleDelete,
  handleDeleteDialogVisibility
};
