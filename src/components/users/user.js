import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import Grid from "./grid";
import form from "./form";
import initialState from "./initialState";
import commonElements from "../common";
import helpers from "../../utils/helpers";
import handlers from "./handlers";
import dialogs from "../dialog";
const { User } = dialogs;
const { CreateUserDialog } = User;
const { compareObjectValues } = helpers;

const { Button } = commonElements;
const { CreateUserForm } = form;
const { handleCreateDialogVisibility, handleCreate } = handlers;

class UserComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }
  componentDidUpdate(prevProp, nextState) {
    if (
      !compareObjectValues(prevProp.users, this.props.users) &&
      nextState.isCreateDialog
    ) {
      this.setState(initialState);
    }
  }
  handleDialog = () => {
    this.setState(handleCreateDialogVisibility(this.state));
  };
  handleSave = () => {
    const {
      dispatch,
      userForm: { fieldValues }
    } = this.props;
    this.setState({
      ...this.state,
      isCreating: !this.state.isCreating
    });
    dispatch(handleCreate(fieldValues));
  };

  render() {
    const { isCreateDialog, isCreating } = this.state;
    return (
      <>
        <Row>
          <Col flex="100px">
            <Button
              handlers={{
                btnShape: "circle",
                htmlType: "submit",
                value: "+",
                handleSubmit: () => this.handleDialog()
              }}
            />
          </Col>
          <Col flex="auto" />
        </Row>
        <Row>
          <Col span={12}>
            <Grid />
          </Col>
          <Col span={12} />
        </Row>
        <CreateUserDialog
          dialogTitle="Create new user"
          isVisible={isCreateDialog}
          handleSubmit={() => this.handleSave()}
          handleCancel={() => this.handleDialog()}
          isLoading={isCreating}
          btnValue="Create"
        >
          <CreateUserForm isDialogClosed={!isCreateDialog} />
        </CreateUserDialog>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...state,
  ownProps
});
export default connect(mapStateToProps)(UserComponent);
