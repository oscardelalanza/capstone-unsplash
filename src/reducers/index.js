import { combineReducers } from 'redux';
import filter from './filterReducer';
import photos from './photosReducer';

export default combineReducers({
  filter,
  photos,
});
