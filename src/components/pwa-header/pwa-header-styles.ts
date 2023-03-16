import { css } from 'lit';


export const styles = css`
  header {
    align-items: center;
    background: var(--app-color-primary);
    color: white;
    display: flex;
    height: env(titlebar-area-height, 50px);
    justify-content: space-between;
    left: env(titlebar-area-x, 0);
    padding-left: 16px;
    padding-top: 12px;
    position: fixed;
    top: env(titlebar-area-y, 0);
    width: env(titlebar-area-width, 60%);
    -webkit-app-region: drag;
  }

  header h1 {
    color: black;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
