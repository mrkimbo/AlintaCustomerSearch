import * as React from 'react';
import styled from 'styled-components';
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';

const customerData = [
  { firstName: 'Kim', lastName: 'Bob', dob: '12/12/2001' },
  { firstName: 'Barry', lastName: 'White', dob: '01/04/1967' },
  { firstName: 'Augustus', lastName: 'Gloop', dob: '14/09/1974' }
];

const Title = styled.h1`
  color: #333;
`;

const CustomerView = () => (
  <>
    <Title>Customer List</Title>
    <CustomerSearch />
    <CustomerList customers={customerData} />
  </>
);

export default CustomerView;
