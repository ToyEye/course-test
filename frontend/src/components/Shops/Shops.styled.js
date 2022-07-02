import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ContainerStyled = styled.div`
  border: 1px solid ${props => props.theme.colors.mainColor};
  border-radius: 5px;
  padding: 20px;
  min-width: 280px;
  height: calc(100vh - 75px);

  margin-right: 15px;

  .shopsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item {
    width: 100%;
    text-align: center;
  }

  .active {
    background-color: ${props => props.theme.colors.secondaryBg};
  }
`;

const TitleStyled = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.mainColor};
  font-size: 16px;
  font-weight: ${props => props.theme.fonts.weights.bold};
`;

const LinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px 40px;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  color: ${props => props.theme.colors.mainColor};
  width: 100%;
  border: 1px solid ${props => props.theme.colors.mainColor};
  border-radius: 5px;
  margin-top: 10px;
`;

export { ContainerStyled, TitleStyled, LinkStyled };
