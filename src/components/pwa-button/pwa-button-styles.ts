import { css } from 'lit';


export const styles = css`
  button {
    align-items: center;
    background-color: grey;
    border: 2px solid darkgrey;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    height: 40px;
    margin: 4px 2px;
    padding: 10px 40px;
    text-align: center;
    text-decoration: none;
  }

  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  button:active {
    transform: scale(0.98);
  }

  button[disabled] {
    box-shadow: none;
    cursor: default;
    opacity: 0.5;
    transform: none;
  }

  .primary {
    background-color: #004481;
    border: 2px solid lightskyblue;
  }

  .secondary {
    background-color: darkgrey;
    border: 2px solid black;
    padding: 10px 20px;
  }
`;
