import {
  addPhotos, loading, ok, changeFilter,
} from '../actions/photosActions';
import {
  ADD_PHOTOS, CHANGE_FILTER, LOADING, OK,
} from '../js/literals';

describe('Action Creators', () => {
  test('Add Photos Action', () => {
    const photos = { photos: ['photo1', 'photo2', 'photo3'] };
    const expected = {
      type: ADD_PHOTOS,
      photos,
    };
    expect(addPhotos(photos)).toEqual(expected);
  });

  test('Loading Action', () => {
    const expected = { type: LOADING };
    expect(loading()).toEqual(expected);
  });

  test('Ok Action', () => {
    const expected = { type: OK };
    expect(ok()).toEqual(expected);
  });

  test('Change Filter Action', () => {
    const filter = 'deep ocean';
    const expected = {
      type: CHANGE_FILTER,
      filter,
    };
    expect(changeFilter(filter)).toEqual(expected);
  });
});
