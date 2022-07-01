import styled from 'styled-components';

const FormContainerStyled = styled.div`
  width: 50%;
  border: 1px solid ${props => props.theme.colors.mainColor};
  border-radius: 5px;
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

export { FormStyled, FormContainerStyled, LabelStyled };
