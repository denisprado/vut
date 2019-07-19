import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../config/reactotron';
import { Creators as ToolsActions } from '../../store/ducks/tools';
import ToolsList from './ToolsList';

class ToolsListContainer extends Component {
  componentDidMount() {
    const { getToolsRequest } = this.props;
    getToolsRequest();
  }

  shouldComponentRender() {
    const { loading, tools } = this.props;
    if (loading === false) return false;
    if (!tools) return false;
    return true;
  }

  render() {
    const { tools } = this.props;

    if (!this.shouldComponentRender()) return 'Loading...';
    return <ToolsList ToolListData={tools} />;
  }
}

ToolsListContainer.propTypes = {
  getToolsRequest: PropTypes.func.isRequired,
  tools: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
  tools: state.tools,
  query: state.query,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolsListContainer);
