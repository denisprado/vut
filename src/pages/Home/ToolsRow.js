import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import _ from 'lodash';
import { Creators as ModalActions } from '../../store/ducks/modal';
import {
  Item, Tags, Tag, Header, RemoveButton,
} from './styles';

class ToolsRow extends Component {
  openDeleteModal(id, title) {
    const { openModal, closeModal } = this.props;
    openModal({
      modalType: 'DELETE_TOOL',
      modalProps: { id, title },
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
          <RemoveButton type="button" onClick={() => this.openDeleteModal(id, title)}>
            <i className="fa fa-remove" />
            remove
          </RemoveButton>
          <h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
        </Header>
        <p>{description}</p>
        <Tags>
          {tags.map(tag => (
            <Tag key={uuidv4()}>
              #{tag}
            </Tag>
          ))}
        </Tags>
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
