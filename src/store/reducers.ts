import { generateFakeCustomers } from '../shared/utils';
import uuid from 'uuid/v1';
import { Customer } from '../shared/types';
import { Actions } from './actions';

interface AppState {
  customers: Customer[];
  filter: string;
}

const intitialState: AppState = {
  customers: generateFakeCustomers(10),
  filter: ''
};

const reducer = (state = intitialState, { type, payload }): AppState => {
  switch (type) {
    case Actions.UPDATE_FILTER:
      return {
        ...state,
        filter: payload
      };

    case Actions.ADD_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers,
          {
            id: uuid(),
            ...payload
          }
        ]
      };

    case Actions.UPDATE_CUSTOMER:
      const { id, field, value } = payload;
      const customers = state.customers.slice();
      customers.find((customer) => customer.id === id)[field] = value;

      return {
        ...state,
        customers
      };

    case Actions.REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer.id !== payload)
      };

    default:
      return intitialState;
  }
};

export default reducer;
