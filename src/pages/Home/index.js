import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as SearchActions } from '../../store/ducks/search';

import {
  Container, Search, Tools, List, Item, Tags, Tag, Header,
} from './styles';

const mapStateToProps = state => ({
  loading: state.loading,
  tools: state.tools,
  query: state.query,
  onlyTag: state.onlyTag,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ToolsActions,
    ...ModalActions,
    ...SearchActions,
  },
  dispatch,
);

class Home extends Component {
  componentDidMount() {
    this.getTools();
  }

  getTools() {
    const { getToolsRequest } = this.props;
    getToolsRequest();
  }

  handleQuery(e) {
    const { value } = e.target;
    const { changeQuery } = this.props;
    changeQuery({ query: value });
    this.getTools();
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
    const {
      tools, query, onlyTag, toggleOnlyTag
    } = this.props;
    if (!this.shouldComponentRender()) return <i className="fa fa-spinner fa-spin" />;
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
              defaultChecked={onlyTag}
              onClick={() => toggleOnlyTag()}
            />
            search in tags only
          </Search>
          <button type="button" onClick={() => this.openAddModal()}>
            <i className="fa fa-plus" />
            Add
          </button>
        </Tools>
        <List>
          {tools
            && tools.data.map(tool => (
              <Item key={tool.id}>
                <Header>
                  <button
                    type="button"
                    onClick={() => this.openDeleteModal(tool.id)}
                  >
                    <i className="fa fa-remove" />
                    remove
                  </button>
                  <h2>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tool.title}
                    </a>
                  </h2>
                </Header>
                <p>{tool.description}</p>
                <Tags>
                  {tool.tags.map(tag => (
                    <Tag key={uuidv4()}>
                      #
                      {tag}
                    </Tag>
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
