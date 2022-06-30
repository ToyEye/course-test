import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  background-color: ${props => props.theme.colors.appBarColor};
  margin-bottom: 15px;
  height: 55px;
  display: flex;
  align-items: center;

  .active {
    color: white;
  }
`;

const NavLinkStyled = styled(NavLink)`
  font-family: ${props => props.theme.fonts.families.roboto};
  font-weight: ${props => props.theme.fonts.weights.medium};
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.mainColor};
  font-size: 1rem;

  :first-child {
    border-right: 3px solid ${props => props.theme.colors.mainColor};
  }
`;

export { NavLinkStyled, Container };
