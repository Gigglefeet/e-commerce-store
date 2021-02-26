import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Layout from '../../components/layout';

const productStyles = css`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export default function productpage(props) {
  return (
    <Layout>
      <Head>
        <title>Eyjafjallajökull</title>
        <link rel="icon" href="/public/favicon.ico/" />
      </Head>
      <h1>Product Page</h1>
      <div css={productStyles}>
        {/* candyInfo is a ray of objects that we map through. It was created in the database.js */}
        {props.candyInfo.map((allCandy) => (
          <div key={`product-page-${allCandy.id}`}>
            <div>
              {/* making the link clickable */}
              <Link href={`/products/${allCandy.id}`}>{allCandy.name}</Link>
              <Image
                src={allCandy.url}
                alt="Icelandic candy"
                width="400"
                height="400"
                className="image"
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { getProductInfo } = await import('../../util/database');
  const candyInfo = await getProductInfo();
  return {
    props: { candyInfo },
  };
}
// candyInfo will be passed to the page component as props
