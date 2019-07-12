import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AddToolModal = ({ modalType, closeModal, modal }) => (
  <div>
    <Modal style={customStyles} isOpen={modal.modalIsOpen} onRequestClose={() => closeModal}>
      <p>Add tool?</p>
      <button
        type="button"
        onClick={() => {
          closeModal();
        }}
      >
        Yes
      </button>
      <button type="button" onClick={() => closeModal()}>
        Nope
      </button>
    </Modal>
  </div>
);

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
