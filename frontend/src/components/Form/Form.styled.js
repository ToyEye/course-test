import styled from 'styled-components';

const ShopingCartContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(100vh - 75px);
`;

const FormContainerStyled = styled.div`
  width: 48%;
  border: 1px solid ${props => props.theme.colors.mainColor};
  border-radius: 5px;
  overflow-y: auto;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 45px 20px;

  button {
    width: 120px;
    padding: 10px 0;
    background-color: ${props => props.theme.colors.linkColorl};
    color: ${props => props.theme.colors.secondaryColor};
    border-radius: 3px;
  }
`;

const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 30px;
  font-family: ${props => props.theme.fonts.families.roboto};

  div {
    display: block;
    margin-bottom: 7px;
  }

  input {
    width: 90%;
    border-radius: 5px;
    border: 1px solid #dedede;
    outline: none;
    padding: 5px;
    margin-bottom: 3px;
    ::placeholder {
      font-size: 12px;
      padding-left: 5px;
    }
  }

  p {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    color: ${props => props.theme.colors.error};
  }
`;

const ItemStyled = styled.li`
  position: relative;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.colors.mainColor};
  font-weight: ${props => props.theme.fonts.weights.medium};
  border-radius: 5px;
  width: 95%;
  margin-top: 20px;
  padding: 15px;

  img {
    width: 55%;
  }

  input {
    width: 90%;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #dedede;
    outline: none;
    padding: 10px 15px;
    margin-top: 35px;

    :focus::-webkit-textfield-decoration-container {
      visibility: hidden;
      pointer-events: none;
      position: absolute;
      right: 45%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .cartContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .infoContainer {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .deleteButton {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export {
  FormStyled,
  FormContainerStyled,
  LabelStyled,
  ItemStyled,
  ShopingCartContainerStyled,
};
