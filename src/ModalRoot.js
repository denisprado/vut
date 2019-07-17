import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Modal from 'react-modal';
import DeleteToolModal from './components/DeleteToolModal';
import AddToolModal from './components/AddToolModal';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(199, 196, 205, .75)';

const MODAL_COMPONENTS = {
  DELETE_TOOL: DeleteToolModal,
  ADD_TOOL: AddToolModal,
};

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
        modalIsOpen: nextProps.data.open,
      });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { data } = this.props;
    const { modalIsOpen } = this.state;
    if (!data.modalType) {
      return null;
    }
    const SpecifiedModal = MODAL_COMPONENTS[data.modalType];

    return (
      <div>
        <Modal isOpen={modalIsOpen} style={customStyles} closeModal={this.closeModal}>
          <SpecifiedModal {...data} />
        </Modal>
      </div>
    );
  }
}

ModalRoot.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    tags: propTypes.string,
    modalType: propTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(ModalRoot);
