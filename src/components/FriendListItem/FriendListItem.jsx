// Libs
import PropTypes from 'prop-types';
// Styled components
import {
  FriendListCard,
  FriendListStatus,
  FriendListAvatar,
} from './FriendListItem.styled';

export function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <FriendListCard>
      <FriendListStatus isOnline={isOnline} />
      <FriendListAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListCard>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
