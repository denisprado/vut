import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container } from './styles';

class AddToolModal extends Component {
  handleSubmit = data => {
    data.tags = data.tags.split(' ');
    const { addToolsRequest } = this.props;
    addToolsRequest(data);
  };

  render() {
    const { closeModal } = this.props;
    return (
      <Container>
        <h2>
          <i className="fa fa-plus" /> Add tool?
        </h2>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Tool name: </label>
          <Input name="title" id="title" />
          <label htmlFor="link">Tool Link: </label>
          <Input name="link" />
          <label htmlFor="description">Tool Description: </label>
          <Input name="description" multiline />
          <label htmlFor="tags">Tags: </label>
          <Input name="tags" />
          <button type="submit">Add tool</button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
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
