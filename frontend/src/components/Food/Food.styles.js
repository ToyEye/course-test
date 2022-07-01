import styled from 'styled-components';
import { media } from 'helpers';

const FoodContainerStyled = styled.div`
  min-width: 960px;
  border: 1px solid ${props => props.theme.colors.mainColor};
  border-radius: 5px;
  padding: 0 15px;

  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
    margin-left: 30px;
  }

  ${media.tv} {
    min-width: 1200px;
  }
`;

const ItemStyled = styled.li`
  border: 1px solid ${props => props.theme.colors.mainColor};
  font-weight: ${props => props.theme.fonts.weights.medium};
  border-radius: 5px;
  width: 280px;
  margin-bottom: 20px;
  padding: 15px;

  :nth-child(n + 3) {
    margin-right: 0;
  }

  p {
    color: ${props => props.theme.colors.mainText};
    margin-top: 5px;
  }

  button {
    display: block;
    font-weight: ${props => props.theme.fonts.weights.medium};
    background-color: ${props => props.theme.colors.linkColorl};
    color: ${props => props.theme.colors.secondaryColor};
    border-radius: 5px;
    padding: 5px 15px;
    margin-left: auto;
  }

  img {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  ${media.desktop} {
    flex-basis: calc((100% - 3 * 30px) / 3);
    width: 300px;
    margin-right: 30px;
  }
  ${media.tv} {
    width: 340px;
  }
`;

export { FoodContainerStyled, ItemStyled };
