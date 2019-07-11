import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';

import DeleteToolModal from '../../components/DeleteToolModal';
import AddToolModal from '../../components/AddToolModal';

import {
  Container, Search, Tools, List, Item, Tags, Tag,
} from './styles';

import Loading from '../../components/Loading';

class Home extends Component {
  componentDidMount() {
    const { getToolsRequest } = this.props;
    getToolsRequest();
  }

  openDeleteModal(id) {
    const { openModal } = this.props;
    openModal({ modalType: 'DELETE_TOOL', id });
  }

  openAddModal() {
    const { openModal } = this.props;
    openModal({ modalType: 'ADD_TOOL', modalIsOpen: true });
  }

  render() {
    const { tools, loading } = this.props;
    return (
      <Container>
        <DeleteToolModal />
        <AddToolModal />
        <h1>VUTTR</h1>
        <h2>Very Usefull Tools do Remember</h2>
        <Tools>
          <Search>
            <input type="text" name="search" placeholder="search" />
            <input type="checkbox" name="search-check" value="false" />
            Search in tags only
          </Search>
        </Tools>
        <List>
          {!loading ? (
            tools.data.map(tool => (
              <Item key={tool.id}>
                <h2>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    {tool.title}
                  </a>
                </h2>
                <p>{tool.description}</p>
                <button type="button" onClick={() => this.openDeleteModal(tool.id)}>
                  Delete
                </button>
                <button type="button" onClick={() => this.openAddModal()}>
                  Add
                </button>
                <Tags>
                  {tool.tags.map(tag => (
                    <Tag key={tag}>
                      #
                      {tag}
                    </Tag>
                  ))}
                </Tags>
              </Item>
            ))
          ) : (
              <Loading />
            )}
        </List>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.loading,
  tools: state.tools,
  modalIsOpen: state.modalIsOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ToolsActions,
    ...ModalActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
