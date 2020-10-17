import { toJson } from 'unsplash-js';
import unsplash from '../js/unsplash';
import {
  ADD_PHOTOS, CHANGE_FILTER, LOADING, OK,
} from '../js/literals';

export const addPhotos = photos => ({
  type: ADD_PHOTOS,
  photos,
});

export const loading = () => ({
  type: LOADING,
});

export const ok = () => ({
  type: OK,
});

export const getNewPhotos = () => (dispatch => {
  dispatch(loading());
  return unsplash.photos.listPhotos(1, 30, 'latest').then(toJson).then(json => {
    dispatch(addPhotos(json));
    dispatch(ok());
  });
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export const searchPhotos = filter => (dispatch => {
  dispatch(loading());
  dispatch(changeFilter(filter));
  return unsplash.search.photos(filter, 1, 30).then(toJson).then(json => {
    dispatch(addPhotos(json.results));
    dispatch(ok());
  });
});
