import { css } from 'lit';


export const styles = css`
  input {
    border: 2px solid lightskyblue;
    border-radius: 4px;
    height: 32px;
    margin-bottom: 10px;
    padding: 10px 16px;
    width: 250px;
  }

  input.error {
    border-color: red;
  }

  .error-message {
    color: red;
    display: flex;
    font-size: 10px;
    padding-left: 6px;
  }
`;
