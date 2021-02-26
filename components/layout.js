import Head from 'next/head';
import Link from 'next/link';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const frontPage = css`
  .navBarFront {
    position: relative;
    width: 100vw;
    top: 0px;
    display: flex;
    justify-content: flex-end;
    margin: 0;
    font-size: 32px;
    background-color: #755139ff;
    padding: 30px 0;
  }
  a {
    position: relative;
    margin: 5px 75px;
    text-decoration: none;
    color: #f2edd7ff;
  }
  .topLink {
    margin-right: auto;
  }
  .bodyOfFrontPage {
    font-size: 45px;
    background-color: white;
  }
  .imageContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-left: 80px;
  }
  p {
    margin-right: 20px;
  }
  ${'' /* Image .djupur {
    image: url('djupur2.jpeg');
  } */}
`;

export default function layout(props) {
  return (
    <>
      <Head>
        <title>Eyjafjallajökull</title>
        <link rel="icon" href="/public/favicon.ico/" />
      </Head>
      <header css={frontPage}>
        <nav className="navBarFront">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/about">
            <a>About Eyjafjallajökull</a>
          </Link>
          <a href="/shoppingcart">Shopping Cart</a>
        </nav>
      </header>
      {props.children}
    </>
  );
}
