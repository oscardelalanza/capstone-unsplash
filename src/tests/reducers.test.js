import filterReducer from '../reducers/filterReducer';
import { ADD_PHOTOS, CHANGE_FILTER, LOADING, OK } from '../js/literals';
import statusReducer from '../reducers/statusReducer';
import photoReducer from '../reducers/photosReducer';

describe('Filter Reducer', () => {
  test('Return initial state', () => {
    expect(filterReducer(undefined, {})).toEqual('');
  });

  test('Change the filter', () => {
    const filter = 'cows';
    expect(filterReducer('', { type: CHANGE_FILTER, filter })).toEqual(filter);
  });
});

describe('Status Reducer', () => {
  test('Return initial state', () => {
    expect(statusReducer(undefined, {})).toEqual('');
  });

  test('Status LOADING', () => {
    expect(statusReducer('', { type: LOADING })).toEqual(LOADING);
  });

  test('Status OK', () => {
    expect(statusReducer('', { type: OK })).toEqual(OK);
  });
});

describe('Photo Reducer', () => {
  test('Return initial state', () => {
    expect(photoReducer(undefined, {})).toEqual([]);
  });

  test('Add Photos', () => {
    const photos = [
      { photo: '1' },
      { photo: '2' },
      { photo: '3' },
    ];
    expect(photoReducer(undefined, { type: ADD_PHOTOS, photos })).toEqual(photos);
  });
});
