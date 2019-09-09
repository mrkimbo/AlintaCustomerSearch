import * as React from 'react';
import PropTypes from 'prop-types';
import { actions } from '../../store';
import EditableCell from './EditableCell';
import DeleteButton from './DeleteButton';
import { Layout } from './CustomerList.styles';

const renderCustomer = ({ id, firstName, lastName, dob }, idx) => [
  <DeleteButton
    onClick={actions.removeCustomer.bind(null, id)}
    key={`${id}.delete`}
    id={id}
  />,
  <EditableCell
    key={`${id}.firstName`}
    id={id}
    field="firstName"
    initialValue={firstName}
  />,
  <EditableCell
    key={`${id}.lastName`}
    id={id}
    field="lastName"
    initialValue={lastName}
  />,
  <EditableCell key={`${id}.dob`} id={id} field="dob" initialValue={dob} />
];

const EmptyMessage = () => <p>No results</p>;

const CustomerList = ({ customers }) => {
  if (!customers.length) {
    return <EmptyMessage />;
  }
  return <Layout>{customers.map(renderCustomer)}</Layout>;
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CustomerList;
