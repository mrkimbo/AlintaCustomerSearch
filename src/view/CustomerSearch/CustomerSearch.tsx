import * as React from 'react';
import styled from 'styled-components';
import * as styles from '../../shared/styles';

const SearchInput = styled.input`
  padding: ${styles.spacing};
  margin-bottom: ${styles.spacing};
  width: 300px;
  border: ${styles.border};
  border-width: 0 0 1px 0;
  font-size: 18px;

  &:focus {
    outline: none;
    background-color: ${styles.alphaGreen};
  }
`;

const SearchLabel = styled.label`
  margin-right: ${styles.spacing};
`;

const CustomerSearch = () => {
  const [filter, setFilter] = React.useState('');
  const onChange = (evt) => setFilter(evt.target.value);
  return (
    <div>
      <SearchLabel htmlFor="search">Find Customers:</SearchLabel>
      <SearchInput id="search" type="text" onChange={onChange} value={filter} />
    </div>
  );
};

export default CustomerSearch;
