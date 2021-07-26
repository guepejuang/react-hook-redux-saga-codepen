import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Column, Divider } from "antd";
import initialState from "./initialState";
import handlers from "./handlers";
import commonElements from "../common";
import dialogs from "../dialog";
const Grid = () => {
  const {
    getUsers,
    viewUpdateForm,
    handleInputChange,
    handleCancel,
    handleUpdate,
    handleDelete,
    handleDeleteDialogVisibility
  } = handlers;
  const { Button, TextField } = commonElements;
  const { ConfirmDialog } = dialogs;
  const [state, setState] = useState(initialState);
  const {
    updateUserDetails,
    isUpdating,
    isConfirmDialog,
    userId,
    isDeleting,
    userName
  } = state;

  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.users
    };
  });
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    setState(state);
  }, [users]);
  const setFieldTextState = (fieldName, value) => {
    setState({
      ...state,
      updateUserDetails: {
        ...updateUserDetails,
        [fieldName]: value
      }
    });
  };
  const handleRemoveDialog = (payload) => {
    setState(handleDeleteDialogVisibility(state, payload));
  };
  return (
    <>
      <Table dataSource={users.users}>
        <Column
          align="center"
          sorter={true}
          sortDirections={["ascend", "descend"]}
          title="First Name"
          dataIndex="first_name"
          key="first_name"
          render={(first_name, user) => {
            if (
              updateUserDetails !== null &&
              user.id === updateUserDetails.id
            ) {
              return (
                <TextField
                  handlers={{
                    handleChange: (e) =>
                      setFieldTextState("first_name", handleInputChange(e)),
                    placeholder: "First Name",
                    value:
                      updateUserDetails !== null
                        ? updateUserDetails.first_name
                        : first_name,
                    name: "first_name"
                  }}
                />
              );
            } else {
              return first_name;
            }
          }}
        />
        <Column
          title="Last Name"
          dataIndex="last_name"
          key="last_name"
          render={(last_name, user) => {
            if (
              updateUserDetails !== null &&
              user.id === updateUserDetails.id
            ) {
              return (
                <TextField
                  handlers={{
                    handleChange: (e) =>
                      setFieldTextState("last_name", handleInputChange(e)),
                    placeholder: "First Name",
                    value:
                      updateUserDetails !== null
                        ? updateUserDetails.last_name
                        : last_name,
                    name: "last_name"
                  }}
                />
              );
            } else {
              return last_name;
            }
          }}
        />
        <Column
          title="Action"
          dataIndex="id"
          key="id"
          render={(id, user) => {
            if (updateUserDetails !== null && id === updateUserDetails.id) {
              return (
                <>
                  <Button
                    handlers={{
                      htmlType: "submit",
                      value: "Save",
                      handleSubmit: () => {
                        const res = handleUpdate(updateUserDetails);
                        dispatch(res);
                        setState({
                          ...state,
                          isUpdating: res.isUpdating
                        });
                      },
                      isLoading: isUpdating
                    }}
                  />
                  <Divider type="vertical" />
                  <Button
                    handlers={{
                      type: "block",
                      htmlType: "submit",
                      value: "Cancel",
                      handleSubmit: () => setState(handleCancel()),
                      isDisabled: isUpdating
                    }}
                  />
                </>
              );
            } else {
              return (
                <span>
                  <Button
                    handlers={{
                      htmlType: "submit",
                      value: "Update",
                      handleSubmit: () => setState(viewUpdateForm(user))
                    }}
                  />
                  <Divider type="vertical" />
                  <Button
                    handlers={{
                      isDanger: true,
                      htmlType: "submit",
                      value: "Remove",
                      handleSubmit: () => handleRemoveDialog(user)
                    }}
                  />
                </span>
              );
            }
          }}
        />
      </Table>
      <ConfirmDialog
        dialogType="delete"
        dialogTitle="Remove User"
        isVisible={isConfirmDialog}
        handleSubmit={() => {
          const res = handleDelete(userId);
          dispatch(res);
          setState({
            ...state,
            isDeleting: res.isDeleting
          });
        }}
        handleCancel={() => handleRemoveDialog()}
        isConfirmLoading={isDeleting}
      >
        <p>Are you sure you want to remove {userName} user?</p>
      </ConfirmDialog>
    </>
  );
};

export default Grid;
