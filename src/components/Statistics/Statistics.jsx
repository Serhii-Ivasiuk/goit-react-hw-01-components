import PropTypes from 'prop-types';

export function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // не впевнений чи це треба
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
