import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <StatList list={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const StatList = ({ list }) => {
  return (
    <ul className={css.statList}>
      {list.map(el => (
        <li
          key={el.id}
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
).isRequired;
