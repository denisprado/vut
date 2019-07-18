import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import _ from 'lodash';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Item, Tags, Header } from './styles';

class ToolsRow extends Component {
  openDeleteModal(id) {
    const { openModal, closeModal } = this.props;
    openModal({
      modalType: 'DELETE_TOOL',
      modalProps: id,
      open: true,
      closeModal,
    });
  }

  render() {
    const { tool } = this.props;
    const {
      id, title, description, link, tags,
    } = tool;
    return (
      <Item key={id}>
        <Header>
          <button type="button" onClick={() => this.openDeleteModal(id)}>
            <i className="fa fa-remove" />
            remove
          </button>
          <h2>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
        </Header>
        <p>{description}</p>
        <Tags />
      </Item>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(ToolsRow);
