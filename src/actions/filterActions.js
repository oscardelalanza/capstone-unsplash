import { CHANGE_FILTER } from '../js/literals';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export default changeFilter;
