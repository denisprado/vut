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
    const {
      deleteToolsRequest, modalProps,
    } = this.props;
    deleteToolsRequest(modalProps);
  }


  render() {
    const {
      closeModal, modalProps,
    } = this.props;

    return (
      <div>
        <p>
          Delete tool id
          {modalProps}
          ?
        </p>
        <button
          type="button"
          onClick={
            () => this.handleDeleteTool()
          }
        >
          Yes
        </button>
        <button type="button" onClick={() => closeModal()}>Nope</button>
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
  }, dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(DeleteToolModal);
