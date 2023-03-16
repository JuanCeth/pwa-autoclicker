import { css } from 'lit';


export const appStyles = css`
  main {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }

  #routerOutlet > * {
    width: 100% !important;
  }

  #routerOutlet > .leaving {
    animation: 160ms fadeOut ease-in-out;
  }

  #routerOutlet > .entering {
    animation: 160ms fadeIn linear;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }
`;
