import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatItem } from './statisticItem/StatisticItem';


export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(el => (
          <StatItem key={el.id} label={el.label} percentage={el.percentage} />
        ))}
      </ul>
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