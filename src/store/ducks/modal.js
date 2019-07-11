export const Types = {
  OPEN_MODAL: 'modal/OPEN_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

const INITIAL_STATE = {
  data: [],
  modalIsOpen: false,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, modalIsOpen: true, data: action.payload.data };
    case Types.CLOSE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const Creators = {
  openModal: data => ({ type: Types.OPEN_MODAL, payload: { data } }),
  closeModal: () => ({ type: Types.CLOSE_MODAL }),
};
