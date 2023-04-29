import styled from '@emotion/styled';

export const FriendListCard = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.darkgrey};
  overflow: hidden;

  .status {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props =>
      props.isOnline ? props => props.theme.red : props.theme.green};
  }

  .avatar {
    border: 1px solid ${props => props.theme.lightgrey};
    border-radius: 8px;
  }
`;
