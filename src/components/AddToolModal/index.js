import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, Input } from '@rocketseat/unform';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container } from './styles';

const AddToolModal = ({ addToolsRequest }) => {
  function handleSubmit(data) {
    const toolData = data;
    toolData.tags = data.tags.split(' ');
    addToolsRequest(toolData);
  }

  return (
    <Container>
      <h2>
        <i className="fa fa-plus" />
        {' '}
Add tool?
      </h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Tool name:</label>
        <Input name="title" type="text" id="title" />
        <label htmlFor="link">Tool Link:</label>
        <Input name="link" type="text" id="link" />
        <label htmlFor="description">Tool Description:</label>
        <Input name="description" id="description" multiline />
        <label htmlFor="tags">Tags:</label>
        <Input id="tags" name="tags" />
        <button type="submit">Add tool</button>
      </Form>
    </Container>
  );
};

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
