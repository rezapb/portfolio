import { OPEN, CLOSE } from './../actions/menu';

const initialState = {
  isOpen: false
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpen: true
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default menuReducer;
