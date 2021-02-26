import Head from 'next/head';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Layout from '../components/layout';

const navigationBar = css`
  .navBarIndex {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    font-size: 32px;
    background-color: #9711a8;
  }
`;

export default function Home() {
  return (
    <>
      <Layout>
        <div className="frontpage">
          <Head>
            <title>Eyjafjallajökull</title>
          </Head>
        </div>
        <div css={navigationBar}>
          <section>
            <div>Welcome</div>
          </section>
        </div>
      </Layout>
    </>
  );
}

// const {};
