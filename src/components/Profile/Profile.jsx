// Libs
import PropTypes from 'prop-types';
// React components
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileUserName,
  ProfileStatsList,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

export function Profile({ avatar, location, stats, tag, username }) {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileUserName>{username}</ProfileUserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>

      <ProfileStatsList>
        {Object.keys(stats).map(item => (
          <ProfileStatsItem key={item}>
            <ProfileStatsLabel>{item}</ProfileStatsLabel>
            <ProfileStatsQuantity>{stats[item]}</ProfileStatsQuantity>
          </ProfileStatsItem>
        ))}
      </ProfileStatsList>
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
