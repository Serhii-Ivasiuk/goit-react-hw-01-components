import PropTypes from 'prop-types';

export function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <li className="item">
      {/* додати стилі по умові замість слів 'онлайн'/'офлайн' */}
      <span className="status">{isOnline ? 'онлайн' : 'офлайн'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
