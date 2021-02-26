import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/layout';

export default function oneCandyInfo(props) {
  return (
    <Layout>
      <Head>
        <title>This Candy</title>
      </Head>
      <div>
        {/* <h1>Single product page </h1> */}
        <div>
          <div>{props.candyInfo.name}</div>
          <br />
          <div>{props.candyInfo.description}</div>
          <br />
          <br />
          <Image
            src={props.candyInfo.url}
            alt="Image of an Icelandic candy"
            width="400"
            height="400"
          />
          <div>{props.candyInfo.price}</div>

          <br />
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { getProductInfo: getCandyInfo } = await import('../../util/database');
  const id = parseInt(context.query.productsid);
  const allCandy = await getCandyInfo();
  const candyInfo = allCandy.find((member) => member.id === id);
  return {
    props: { candyInfo },
  };
}
// will be passed to the page component as props
