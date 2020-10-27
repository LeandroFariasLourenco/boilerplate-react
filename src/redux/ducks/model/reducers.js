import * as t from './types';

const INITIAL_STATE = {
  foo: 'foo'
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SET_FOO:
    return {
      ...state,
      foo: payload,
    };
  default:
    return state;
  }
}
