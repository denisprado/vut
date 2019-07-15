import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';

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
    openModal({
      modalType: 'DELETE_TOOL',
      modalProps: id,
      open: true,
      closeModal: this.closeModal,
    });
  }

  openAddModal() {
    const { openModal } = this.props;
    openModal({
      modalType: 'ADD_TOOL',
      open: true,
      closeModal: this.closeModal,
    });
  }

  render() {
    const { tools, loading } = this.props;
    return (
      <Container>

        <h1>VUTTR</h1>
        <h2>Very Usefull Tools do Remember</h2>
        <Tools>
          <Search>
            <input type="text" name="search" placeholder="search" />
            <input type="checkbox" name="search-check" value="false" />
            Search in tags only
          </Search>
          <button type="button" onClick={() => this.openAddModal()}>Add</button>
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

Home.propTypes = {
  getToolsRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  tools: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  loading: state.loading,
  tools: state.tools,
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
