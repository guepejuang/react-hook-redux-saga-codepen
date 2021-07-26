import React from "react";
import { Modal } from "antd";

const ConfirmDialog = props => {
  const {
    children,
    dialogTitle,
    isVisible,
    handleSubmit,
    handleCancel,
    isConfirmLoading
  } = props;
  return (
    <Modal
      title={dialogTitle}
      visible={isVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      confirmLoading={isConfirmLoading}
    >
      {children}
    </Modal>
  );
};
export default ConfirmDialog;
