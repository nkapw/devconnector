import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = []

export default (state = initialState, action) => {
  const { type, payload}
  switch (type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
};
