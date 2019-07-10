export const Types = {
  GET_REQUEST: 'tools/GET_REQUEST',
  GET_SUCCESS: 'tools/GET_SUCCESS',
  DELETE_REQUEST: 'tools/DELETE_REQUEST',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.DELETE_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getToolsRequest: () => ({ type: Types.GET_REQUEST }),
  deleteToolsRequest: id => ({ type: Types.DELETE_REQUEST, payload: { id } }),
  getToolsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
