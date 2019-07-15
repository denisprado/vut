import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import Modal from 'react-modal';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Form, Input } from '@rocketseat/unform';

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

class AddToolModal extends Component {
  handleSubmit = data => {
    console.log(data.tags)
    const { addToolsRequest } = this.props;
    addToolsRequest(data);
  }

  render() {
    const { closeModal, modal } = this.props;
    return (
      <div>
        <Modal style={customStyles} isOpen={modal.modalIsOpen} onRequestClose={() => closeModal}>
          <p>Add tool?</p>
          <Form onSubmit={this.handleSubmit}>
            <Input name="title" />
            <Input name="description" />
            <Input name="tags" />
            <button type="submit">Add</button>
            <button type="button" onClick={() => closeModal()}>Cancel</button>
          </Form>
        </Modal>
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
