import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactModal from 'react-modal';
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

ReactModal.setAppElement('#root');

const DeletePostModal = ({
  modalIsOpen, closeModal, deleteToolsRequest, tool,
}) => (
  <div>
    <ReactModal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => closeModal}>
      <p>Delete tool?</p>
      <button
        type="button"
        onClick={() => {
          deleteToolsRequest(tool.id).then(() => {
            closeModal();
          });
        }}
      >
        Yes
      </button>
      <button type="button" onClick={() => closeModal()}>
        Nope
      </button>
    </ReactModal>
  </div>
);

const mapStateToProps = state => ({
  modalIsOpen: state.modalIsOpen,
});
const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...ToolsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeletePostModal);
