/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import '../../config/reactotron';
// import { Container } from './styles';

class DeleteToolModal extends Component {
  handleDeleteTool() {
    const { deleteToolsRequest, modalProps } = this.props;
    deleteToolsRequest(modalProps);
  }

  render() {
    const { closeModal, modalProps } = this.props;

    return (
      <div>
        <h2>
          <i className="fa fa-remove" />
          Remove Tool?
        </h2>
        <p>
          Are you sure you want to remove
          <b> {modalProps.title}</b>
          ?
        </p>
        <button type="button" onClick={() => closeModal()}>
          Cancel
        </button>
        <button type="button" onClick={() => this.handleDeleteTool()}>
          Yes, remove
        </button>
      </div>
    );
  }
}

DeleteToolModal.propTypes = {
  closeModal: propTypes.func.isRequired,
  deleteToolsRequest: propTypes.func.isRequired,
  modalProps: propTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...ToolsActions,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(DeleteToolModal);
