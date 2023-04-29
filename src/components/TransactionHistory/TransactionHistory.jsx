// Libs
import PropTypes from 'prop-types';
// Styled components
import {
  TransactionHistoryWrapper,
  TransactionHistoryTable,
  Tr,
  Th,
  Td,
} from './TransactionHistory.styled';

export function TransactionHistory(props) {
  const { items } = props;

  return (
    <TransactionHistoryWrapper>
      <TransactionHistoryTable>
        <thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </thead>

        <tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          ))}
        </tbody>
      </TransactionHistoryTable>
    </TransactionHistoryWrapper>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};
