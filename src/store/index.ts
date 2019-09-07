import * as unboundActions from './actions';
import store from './store';

export { default } from './store';

// Pre-bind actions to store dispatcher:
const { Actions, ...rawActions } = unboundActions;
export const actions = Object.entries(rawActions).reduce(
  (items, [name, fn]) => ({
    ...items,
    [name]: (...args) => store.dispatch(fn.apply(null, args))
  }),
  {}
);
