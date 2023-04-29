// Libs
import PropTypes from 'prop-types';
// React components
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
// Styled components
import { FriendListContainer } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
