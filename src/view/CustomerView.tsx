import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilter } from '../shared/utils';
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';
import NewCustomerButton from './NewCustomerButton';
import { actions } from '../store';

const Title = styled.h1`
  color: #333;
`;

const CustomerView = ({ customers }) => (
  <>
    <Title>Customers</Title>
    <CustomerSearch />
    <CustomerList customers={customers} />
    <NewCustomerButton onClick={actions.addCustomer}>
      Add New Customer
    </NewCustomerButton>
  </>
);

CustomerView.propTypes = {
  customers: PropTypes.array.isRequired
};

const mapProps = ({ customers, filter }) => ({
  customers: customers.filter(searchFilter(filter))
});
export default connect(mapProps)(CustomerView);
