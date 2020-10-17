import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { toJson } from 'unsplash-js';
import { ADD_PHOTOS, LOADING, OK } from '../js/literals';
import { getNewPhotos } from '../actions/photosActions';
import unsplash from '../js/unsplash';

const mockStore = configureMockStore([thunk]);

describe('Async Action Creators', () => {
  test('Fetch Unsplash Images', () => {
    fetchMock.mock(unsplash.photos.listPhotos().then(toJson), [{ photo: 'this is a photo' }]);
    const expectedActions = [
      { type: LOADING },
      { type: ADD_PHOTOS, photos: [{ photo: 'this is a photo' }] },
      { type: OK },
    ];
    const store = mockStore({
      photos: [],
      status: '',
      filter: '',
    });

    return store.dispatch(getNewPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
