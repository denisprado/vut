import React from 'react';
import { connect } from 'react-redux';

import DeleteToolModal from './components/DeleteToolModal';
import AddToolModal from './components/AddToolModal';

const MODAL_COMPONENTS = {
  DELETE_TOOL: DeleteToolModal,
  ADD_TOOL: AddToolModal,
  /* other modals */
};

const ModalRoot = ({ modalType, modalProps, modalIsOpen }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

const mapStateToProps = state => ({
  modalIsOpen: state.modalIsOpen,
});

export default connect(
  mapStateToProps,
  null,
)(ModalRoot);
