/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import removeIcon from '../../assets/images/Icon-Close-2px.svg';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import '../../config/reactotron';

import { Container, RemoveButton, CancelButton } from './styles';

class DeleteToolModal extends Component {
  handleDeleteTool() {
    const { deleteToolsRequest, modalProps } = this.props;
    deleteToolsRequest(modalProps);
  }

  render() {
    const { closeModal, modalProps } = this.props;

    return (
      <Container>
        <div className="headerModal">
          <img src={removeIcon} alt="Add Tool" height="20px" />
          <h2>Remove Tool?</h2>
        </div>
        <p>
          Are you sure you want to remove
          <b>
            {' '}
            {modalProps.title}
          </b>
?
        </p>
        <CancelButton onClick={() => closeModal()}>Cancel</CancelButton>
        <RemoveButton type="button" onClick={() => this.handleDeleteTool()}>
          Yes, remove
        </RemoveButton>
      </Container>
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
