/* eslint-disable import/prefer-default-export */
import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ErrorActions } from '../ducks/error';
import { Creators as ToolsActions } from '../ducks/tools';
import { Creators as ModalActions } from '../ducks/modal';

export function* getTools() {
  try {
    const state = yield select();

    const response = state.search.param
      ? yield call(api.get, `/tools${state.search.param}${state.search.query.query}`)
      : yield call(api.get, '/tools');
    yield put(ToolsActions.getToolsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as ferramentas'));
  }
}

export function* deleteTools(action) {
  try {
    yield call(api.delete, `/tools/${action.payload.data.id}`);
    yield put(ModalActions.closeModal());
    yield put(ToolsActions.getToolsRequest());
    yield put(ToolsActions.deleteToolsSuccess());
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível deletar a ferramenta'));
  }
}

export function* addTools(action) {
  try {
    yield call(api.post, '/tools', action.payload.data);
    yield put(ToolsActions.addToolsSuccess());
    yield put(ToolsActions.getToolsRequest());
    yield put(ModalActions.closeModal());
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível adicionar as ferramentas'));
  }
}
