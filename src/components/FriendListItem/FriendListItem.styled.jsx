// Libs
import styled from '@emotion/styled';

export const FriendListCard = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  color: ${props => props.theme.colors.darkgrey};
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
`;

export const FriendListStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props =>
    props.isOnline
      ? props => props.theme.colors.red
      : props.theme.colors.green};
`;

export const FriendListAvatar = styled.img`
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 8px;
`;
