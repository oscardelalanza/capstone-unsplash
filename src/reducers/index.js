import { combineReducers } from 'redux';
import filter from './filterReducer';
import photos from './photosReducer';
import status from './statusReducer';

export default combineReducers({
  filter,
  photos,
  status,
});
