// Libs
import styled from '@emotion/styled';

import { getRandomHexColor } from 'utils/randomHexColor';

export const StatisticsCard = styled.section`
  border-radius: 8px;
  color: ${props => props.theme.colors.darkgrey};
  background-color: ${props => props.theme.colors.white};
  text-shadow: 0px 1px 1px ${props => props.theme.colors.lightgrey};
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(70px, 1fr));
  height: 70px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 4px 0px 8px -8px rgba(0, 0, 0, 0.75);
  color: ${props => props.theme.colors.white};
  text-shadow: 0px 1px 2px ${props => props.theme.colors.black};
  background-color: ${getRandomHexColor};
`;
