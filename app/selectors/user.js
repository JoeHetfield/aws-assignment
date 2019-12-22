import { createSelector } from 'reselect';

const getFavorites = state => state.getIn(['entities', 'user', 'favorites', 'spot']);

export default {
  getFavorites,
};
