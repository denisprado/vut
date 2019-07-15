/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import '../../config/reactotron';
// import { Container } from './styles';

class DeleteToolModal extends Component {
  render() {
    const {
      deleteToolsRequest, closeModal,
    } = this.props;

    return (
      <div>
        <p>Delete tool id {this.props.modalProps}?</p>
        <button
          type="button"
          onClick={
            () => deleteToolsRequest(this.props.modalProps)
          }
        >
          Yes
        </button>
        <button type="button" onClick={() => closeModal()}>Nope</button>
      </div>
    );
  }
}


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
