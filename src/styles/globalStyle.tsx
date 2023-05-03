import { createGlobalStyle, css } from 'styled-components';

const enablePrettier = css`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;

    --black: hsl(0, 0%, 10%);
    --gold: hsl(31, 41%, 64%);
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /*
  7. Remove built-in form typography styles
*/
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /*
  8. Avoid text overflows
*/
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /*
  9. Create a root stacking context
*/
  #root,
  #__next {
    isolation: isolate;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${enablePrettier}
`;
