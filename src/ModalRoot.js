import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Modal from 'react-modal';
import DeleteToolModal from './components/DeleteToolModal';
import AddToolModal from './components/AddToolModal';


const MODAL_COMPONENTS = {
  DELETE_TOOL: DeleteToolModal,
  ADD_TOOL: AddToolModal,
};

const mapStateToProps = state => ({
  ...state.modal,
});

class ModalRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.data.open
      });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.data.modalType) {
      return null;
    }
    const SpecifiedModal = MODAL_COMPONENTS[this.props.data.modalType]

    return (
      <div>
        <Modal isOpen={this.state.modalIsOpen} closeModal={this.closeModal}>
          <SpecifiedModal {...this.props.data} />
        </Modal>
      </div>
    );
  }
};

ModalRoot.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    tags: propTypes.string,
  }).isRequired,
};


export default connect(
  mapStateToProps,
  null,
)(ModalRoot);
