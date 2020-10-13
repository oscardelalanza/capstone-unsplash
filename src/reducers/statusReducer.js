import { LOADING, OK } from '../js/literals';

const statusReducer = (state = '', action) => {
  switch (action.type) {
    case LOADING:
      return LOADING;
    case OK:
      return OK;
    default:
      return state;
  }
};

export default statusReducer;
