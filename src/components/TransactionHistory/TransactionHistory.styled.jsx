// Libs
import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border-spacing: 0;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.white};
  overflow: hidden;
`;

export const Tr = styled.tr`
  background-color: ${props => props.theme.colors.lightyellow};

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.yellow};
  }
`;

export const Th = styled.th`
  ${commonCellStyles}

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.cyan};
  text-shadow: 0 1px 1px ${props => props.theme.colors.black};

  &:nth-of-type(1) {
    text-align: left;
  }
`;

export const Td = styled.td`
  ${commonCellStyles}

  color: ${props => props.theme.colors.darkgray};

  &:nth-of-type(1) {
    text-align: left;
  }
`;

// Common styles for table cells
function commonCellStyles(props) {
  return `
  position: relative;
  padding: 10px 50px;
  &::before,
  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${props.theme.colors.white};
  }

  &:after {
    top: 0;
    left: -1px;
    height: 100%;
    width: 1px;
  }
`;
}
