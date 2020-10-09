import Head from "next/head";
import Layout from '../components/Layout'
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>        
      </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
