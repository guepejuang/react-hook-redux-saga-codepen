import React from "react";
import { Modal, Button } from "antd";

const ConfirmDialog = props => {
  const {
    children,
    dialogTitle,
    isVisible,
    handleSubmit,
    handleCancel,
    isLoading,
    btnValue
  } = props;
  return (
    <Modal
      visible={isVisible}
      title={dialogTitle}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={handleSubmit}
        >
          {btnValue}
        </Button>
      ]}
    >
      {children}
    </Modal>
  );
};
export default ConfirmDialog;
