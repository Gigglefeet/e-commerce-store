import {
  css,
  Global,
} from '@emotion/react';

const myGlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }
  div.frontpage {
    background-image: url('eyjökull.jpeg');
    background-size: cover;
    width: 50vw;
    height: 50vh;
  }
`;
export const globalStyles = <Global styles={myGlobalStyles} />;
// .navBar {
//   display: flex;
//   margin 0 auto;
//   font-size: 18px;
// }
