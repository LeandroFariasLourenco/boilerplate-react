import * as t from '@Redux/ducks/model/types';

export const setFoo = (newState) => ({
  type: t.SET_FOO,
  payload: newState,
});
