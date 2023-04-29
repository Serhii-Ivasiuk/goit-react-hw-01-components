import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './TransactionHistory.styled';

export function TransactionHistory(props) {
  const { items } = props;

  return (
    <TransactionHistoryTable>
      <table className="transaction-history">
        <thead>
          <tr>
            <th className="firstColumn">Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="firstColumn">{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};
