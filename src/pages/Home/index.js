import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { Container, Search, Tools, List, Item, Tags, Tag } from './styles';

const mapStateToProps = state => ({
  loading: state.loading,
  tools: state.tools,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ToolsActions,
      ...ModalActions,
    },
    dispatch,
  );

class Home extends Component {
  state = {
    query: '',
    onlyTagSearch: false,
  };

  componentDidMount() {
    this.getTools();
  }

  handleQuery(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
    this.getTools();
  }

  getTools() {
    const { getToolsRequest } = this.props;
    const { query, onlyTagSearch } = this.state;
    const queryParameter = onlyTagSearch ? 'tags_like=' : 'q=';
    getToolsRequest(query, queryParameter);
  }

  openDeleteModal(id) {
    const { openModal, closeModal } = this.props;
    openModal({
      modalType: 'DELETE_TOOL',
      modalProps: id,
      open: true,
      closeModal,
    });
  }

  openAddModal() {
    const { openModal, closeModal } = this.props;
    openModal({
      modalType: 'ADD_TOOL',
      open: true,
      closeModal,
    });
  }

  shouldComponentRender() {
    const { loading, tools } = this.props;
    if (loading === false) return false;
    if (!tools) return false;
    return true;
  }

  render() {
    const { tools } = this.props;
    const { query, onlyTagSearch } = this.state;
    if (!this.shouldComponentRender()) return 'Loading...';
    return (
      <Container>
        <h1>VUTTR</h1>
        <h2>Very Usefull Tools do Remember</h2>
        <Tools>
          <Search>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={event => this.handleQuery(event)}
            />
            <input
              type="checkbox"
              name="checkTags"
              defaultChecked={onlyTagSearch}
              onClick={() => {
                this.setState({ onlyTagSearch: !onlyTagSearch });
                this.setState({ query: '' });
              }}
            />
            search in tags only
          </Search>
          <button type="button" onClick={() => this.openAddModal()}>
            Add
          </button>
        </Tools>
        <List>
          {tools &&
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
                <Tags>
                  {tool.tags.map(tag => (
                    <Tag key={tag}>#{tag}</Tag>
                  ))}
                </Tags>
              </Item>
            ))}
        </List>
      </Container>
    );
  }
}

Home.propTypes = {
  getToolsRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  tools: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
