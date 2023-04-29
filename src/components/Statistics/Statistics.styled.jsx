import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  border-radius: 8px;
  color: ${props => props.theme.darkgrey};
  background-color: ${props => props.theme.white};
  text-shadow: 0px 1px 1px ${props => props.theme.lightgrey};
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  overflow: hidden;

  .title {
    padding: 20px 0;
    text-align: center;
    text-transform: uppercase;
  }

  .stat-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(70px, 1fr));
    height: 70px;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 4px 0px 8px -8px rgba(0, 0, 0, 0.75);
    > span {
      color: ${props => props.theme.white};
      text-shadow: 0px 1px 2px ${props => props.theme.black};
    }
  }
`;
