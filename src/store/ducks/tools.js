export const Types = {
  GET_REQUEST: 'tools/GET_REQUEST',
  GET_SUCCESS: 'tools/GET_SUCCESS',
  DELETE_REQUEST: 'tools/DELETE_REQUEST',
  DELETE_SUCCESS: 'tools/DELETE_SUCCESS',
  ADD_REQUEST: 'tools/ADD_REQUEST',
  ADD_SUCCESS: 'tools/ADD_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.DELETE_REQUEST:
      return { ...state, loading: true };
    case Types.DELETE_SUCCESS:
      return { ...state, loading: false };
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  addToolsRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),
  addToolsSuccess: () => ({
    type: Types.ADD_SUCCESS,
  }),
  getToolsRequest: (query, queryParameter) => ({
    type: Types.GET_REQUEST,
    payload: { query, queryParameter },
  }),
  getToolsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  deleteToolsRequest: data => ({
    type: Types.DELETE_REQUEST,
    payload: { data },
  }),
  deleteToolsSuccess: () => ({
    type: Types.DELETE_REQUEST,
  }),
};
