import PropTypes from 'prop-types';
import { ProfileCard } from './Profile.styled';

export function Profile(props) {
  const { avatar, location, stats, tag, username } = props;

  return (
    <ProfileCard>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{'@' + tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.keys(stats).map(item => (
          <li key={item}>
            <span className="label">{item}</span>
            <span className="quantity">{stats[item]}</span>
          </li>
        ))}
      </ul>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
