import styled from 'styled-components';
import * as styles from '../../shared/styles';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 700px;
  border: ${styles.border};
  border-width: 0 0 1px 1px;

  & > * {
    padding: ${styles.spacing};
    border: ${styles.border};
    border-width: 1px 1px 0 0;
  }
`;

export const HeaderCell = styled.div`
  font-weight: 500;
`;

export const EditCell = styled.input`
  outline-color: darkgreen;
  background-color: ${styles.alphaGreen};
  font-size: 18px;
  color: black;
`;
