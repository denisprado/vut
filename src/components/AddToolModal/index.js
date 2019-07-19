import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input } from '@rocketseat/unform';
import plusIcon from '../../assets/images/Icon-Add-Square-2px.svg';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container, AddButton } from './styles';

const AddToolModal = ({ addToolsRequest }) => {
  function handleSubmit(data) {
    const toolData = data;
    toolData.tags = data.tags.split(' ');
    addToolsRequest(toolData);
  }

  return (
    <Container>
      <div className="headerModal">
        <img src={plusIcon} alt="Add Tool" height="20px" />
        <h2>Add tool?</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tool name:</label>
          <Input name="title" type="text" id="title" />
          <label htmlFor="link">Tool Link:</label>
          <Input name="link" type="text" id="link" />
          <label htmlFor="description">Tool Description:</label>
          <Input name="description" id="description" multiline />
          <label htmlFor="tags">Tags:</label>
          <Input id="tags" name="tags" />
        </div>
        <AddButton type="submit">Add tool</AddButton>
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
