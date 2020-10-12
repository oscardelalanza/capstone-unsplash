import { toJson } from 'unsplash-js';
import unsplash from '../js/unsplash';
import { ADD_PHOTOS } from '../js/literals';

export const addPhotos = photos => ({
  type: ADD_PHOTOS,
  photos,
});

export const getNewPhotos = () => (dispatch => {
  unsplash.photos.listPhotos(1, 20, 'latest').then(toJson).then(json => {
    dispatch(addPhotos(json));
  });
});
