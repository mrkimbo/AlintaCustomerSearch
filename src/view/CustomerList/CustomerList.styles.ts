import styled from 'styled-components';
import * as styles from '../../shared/styles';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 30px repeat(3, 150px);
  max-width: 700px;

  & > * {
    padding: ${styles.spacing};
    border: ${styles.border};
    border-width: 0 0 1px;
  }
`;

export const HeaderCell = styled.div`
  font-weight: 500;
`;
