import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.white};
  overflow: hidden;

  .transaction-history {
    border-spacing: 0;
    text-align: center;
  }

  .firstColumn {
    text-align: left;
  }

  tr {
    background-color: ${props => props.theme.lightyellow};
    :nth-of-type(2n) {
      background-color: ${props => props.theme.yellow};
    }
  }

  th,
  td {
    position: relative;
    padding: 10px 50px;

    :before {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: ${props => props.theme.white};
    }

    :after {
      content: '';
      position: absolute;
      top: 0;
      left: -1px;
      height: 100%;
      width: 1px;
      background-color: ${props => props.theme.white};
    }
  }

  th {
    background-color: ${props => props.theme.cyan};
    color: ${props => props.theme.white};
    text-shadow: 0 1px 1px ${props => props.theme.black};
  }

  td {
    color: ${props => props.theme.darkgray};
  }
`;
