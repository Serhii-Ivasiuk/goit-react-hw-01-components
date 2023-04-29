import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 280px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  color: ${props => props.theme.darkgrey};
  overflow: hidden;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 40px 20px;
    background-color: ${props => props.theme.white};
  }

  .avatar {
    width: 45%;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.lightgrey};
    box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.75);
  }

  .name {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.darkgray};
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 80px;
  }

  .stats > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${props => props.theme.lightgrey};

    :not(:last-child) {
      border-right: 1px solid ${props => props.theme.gray};
    }

    .label {
      :first-letter {
        text-transform: uppercase;
      }
    }

    .quantity {
      font-weight: 700;
      color: ${props => props.theme.darkgray};
    }
  }
`;
