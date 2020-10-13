import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
  secret: process.env.REACT_APP_SECRET_KEY,
});

export default unsplash;
