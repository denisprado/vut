/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ToolsActions } from '../ducks/tools';
import { Creators as ErrorActions } from '../ducks/error';

export function* getTools() {
  try {
    const response = yield call(api.get, '/tools');
    yield put(ToolsActions.getToolsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as ferramentas'));
  }
}

export function* deleteTools() {
  try {
    const response = yield call(api.delete, '/tools/:id');
    yield put(ToolsActions.getToolsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível deletar as ferramentas'));
  }
}
