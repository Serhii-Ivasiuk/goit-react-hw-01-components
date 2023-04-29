// Libs
import PropTypes from 'prop-types';
// Styled components
import {
  TransactionHistoryTable,
  Tr,
  Th,
  Td,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
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
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};
