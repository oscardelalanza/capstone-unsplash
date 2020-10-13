import { toJson } from 'unsplash-js';
import unsplash from '../js/unsplash';
import { ADD_PHOTOS, LOADING, OK } from '../js/literals';

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
  unsplash.photos.listPhotos(1, 20, 'latest').then(toJson).then(json => {
    dispatch(addPhotos(json));
    dispatch(ok());
  });
});
