import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 400px;

    label {
      margin: 0px 0px 10px 0px;
    }
    input,
    textarea,
    button {
      margin: 0 0 20px 0;
      border: 2px solid #000;
      padding: 10px;
      font-size: 14px;
    }
  }
`;

export const Form = styled.form``;
