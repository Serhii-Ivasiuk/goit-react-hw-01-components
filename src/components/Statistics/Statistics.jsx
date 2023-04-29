// Libs
import PropTypes from 'prop-types';
// React components
import { getRandomHexColor } from 'utils/randomHexColor';
// Styled components
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsCard stats={stats}>
      {title && <StatisticsTitle>Upload stats</StatisticsTitle>}
      <StatisticsList>
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsCard>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
