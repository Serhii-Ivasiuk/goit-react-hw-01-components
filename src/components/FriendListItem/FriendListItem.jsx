import PropTypes from 'prop-types';
import { FriendListCard } from './FriendListItem.styled';

export function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <FriendListCard isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListCard>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
