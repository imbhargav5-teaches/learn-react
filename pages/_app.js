import Head from "next/head";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
