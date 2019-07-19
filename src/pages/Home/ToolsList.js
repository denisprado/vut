import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import _ from 'lodash';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as SearchActions } from '../../store/ducks/search';
import {
  Container, Search, MenuBar, List, HeaderTitle,
} from './styles';
import ToolsRow from './ToolsRow';

class ToolList extends Component {
  handleQuery(e) {
    const { value } = e.target;
    const { changeQuery, getToolsRequest } = this.props;
    changeQuery({ query: value });
    getToolsRequest();
  }

  openAddModal() {
    const { openModal, closeModal } = this.props;
    openModal({
      modalType: 'ADD_TOOL',
      open: true,
      closeModal,
    });
  }

  render() {
    const {
      ToolListData, query, onlyTag, toggleOnlyTag,
    } = this.props;

    return (
      <Container>
        <HeaderTitle>
          <h1>VUTTR</h1>
          <h2>Very Usefull Tools to Remember</h2>
        </HeaderTitle>
        <MenuBar>
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
        </MenuBar>
        <List>
          {ToolListData
            && _(ToolListData.data)
              .map(tool => <ToolsRow key={tool.id} tool={tool} />)
              .value()}
        </List>
      </Container>
    );
  }
}

ToolList.propTypes = {
  ToolListData: PropTypes.shape().isRequired,
  changeQuery: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  getToolsRequest: PropTypes.func.isRequired,
  onlyTag: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  toggleOnlyTag: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolList);
