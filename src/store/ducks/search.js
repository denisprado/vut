export const Types = {
  CHANGE_QUERY: 'search/CHANGE_QUERY',
  CLEAR_QUERY: 'search/CLEAR_QUERY',
  ONLY_TAG: 'search/ONLY_TAG',
};

const INITIAL_STATE = {
  query: {},
  onlyTag: false,
  param: '',
};

export default function search(state = INITIAL_STATE, action) {
  const initialParam = state.param.length > 0 ? state.param : 'q=';
  switch (action.type) {
    case Types.CHANGE_QUERY:
      return { ...state, query: action.payload.query, param: initialParam };
    case Types.ONLY_TAG:
      if (!state.onlyTag) {
        return {
          ...state, query: '', onlyTag: !state.onlyTag, param: 'tags_like=',
        };
      }
      return {
        ...state, query: '', onlyTag: !state.onlyTag, param: 'q=',
      };
    case Types.CLEAR_QUERY:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  changeQuery: query => ({ type: Types.CHANGE_QUERY, payload: { query } }),
  toggleOnlyTag: () => ({ type: Types.ONLY_TAG }),
  clearQuery: () => ({ type: Types.CLEAR_QUERY }),
};
