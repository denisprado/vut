import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';

import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Form, Input } from '@rocketseat/unform';


class AddToolModal extends Component {
  handleSubmit = data => {
    data.tags = data.tags.split(' ');
    const { addToolsRequest } = this.props;
    addToolsRequest(data);
  }

  render() {
    const { closeModal, modal } = this.props;
    return (
      <div>

        <p>Add tool?</p>
        <Form onSubmit={this.handleSubmit}>
          <Input name="title" />
          <Input name="description" />
          <Input name="tags" />
          <button type="submit">Add</button>
          <button type="button" onClick={() => closeModal()}>Cancel</button>
        </Form>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...ToolsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToolModal);
