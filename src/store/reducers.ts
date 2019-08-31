const intitialState = {
  customers: [
    { firstName: 'Kim', lastName: 'Bob', dob: '12/12/2001' },
    { firstName: 'Barry', lastName: 'White', dob: '01/04/1967' },
    { firstName: 'Augustus', lastName: 'Gloop', dob: '14/09/1974' }
  ],
  filter: ''
};

const reducer = (state = intitialState, { type, payload }) => {
  return intitialState;
};

export default reducer;
