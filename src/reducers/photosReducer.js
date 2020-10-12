import { ADD_PHOTOS } from '../js/literals';

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PHOTOS:
      return [...action.photos];
    default:
      return state;
  }
};

export default photoReducer;
