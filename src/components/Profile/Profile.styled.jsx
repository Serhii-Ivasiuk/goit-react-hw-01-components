// Libs
import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 280px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 20px;
  color: ${props => props.theme.colors.darkgray};
  background-color: ${props => props.theme.colors.white};
`;

export const ProfileAvatar = styled.img`
  width: 45%;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.lightgrey};
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
`;

export const ProfileUserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const ProfileStatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 80px;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.lightgrey};

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.gray};
  }
`;

export const ProfileStatsLabel = styled.span`
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.darkgray};
`;
