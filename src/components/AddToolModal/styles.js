import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 100%;

  form {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-end;
    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      min-width: 500px;
      label {
        margin: 0px 0px 10px 0px;
      }
    }
  }
`;

export const AddButton = styled.button`
  background-color: #0dcb7d;
  color: #fff;
  &:hover {
    background-color: #10b26c;
  }
  &:active {
    background-color: #0e995d;
  }
`;

export const Form = styled.form``;
