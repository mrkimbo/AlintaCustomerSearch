export const Actions = {
  UPDATE_FILTER: 'filter:update',
  ADD_CUSTOMER: 'customer:add',
  UPDATE_CUSTOMER: 'customer:update',
  REMOVE_CUSTOMER: 'customer:remove'
};

export const updateFilter = (filter) => ({
  type: Actions.UPDATE_FILTER,
  payload: filter
});

export const addCustomer = (firstName, lastName, dob) => ({
  type: Actions.ADD_CUSTOMER,
  payload: { firstName, lastName, dob }
});

export const updateCustomer = (id, field, value) => ({
  type: Actions.UPDATE_CUSTOMER,
  payload: { id, field, value }
});

export const removeCustomer = (id) => ({
  type: Actions.REMOVE_CUSTOMER,
  payload: id
});
