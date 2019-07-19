import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import DeleteToolModal from './components/DeleteToolModal';
import AddToolModal from './components/AddToolModal';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(23, 12, 58, 0.9)';

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

/**
 * Component Container to open specific modals (delete or add tools)
 */
class ModalRoot extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf({
      modalType: PropTypes.shape().isRequired,
    }).isRequired,
  };

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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          closeModal={this.closeModal}
        >
          <SpecifiedModal {...data} />
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null,
)(ModalRoot);
