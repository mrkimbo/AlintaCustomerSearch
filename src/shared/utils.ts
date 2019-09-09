import faker from 'faker';
import uuid from 'uuid/v1';
import { Customer } from './types';

export const pad = (n) => n.toString().padStart(2, '0');

export const formatDate = (d) =>
  [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');

export const generateFakeCustomers = (n): Customer[] =>
  new Array(10).fill(null).map(() => ({
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: formatDate(new Date(faker.date.past(20)))
  }));

export const searchFilter = (filter) => ({ firstName, lastName }) => {
  if (!filter) return true;

  return (
    firstName.toLowerCase().startsWith(filter.toLowerCase()) ||
    lastName.toLowerCase().startsWith(filter.toLowerCase())
  );
};
