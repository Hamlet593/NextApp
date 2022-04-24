import Layout from '../components/Layout';
import '../styles/globals.scss';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"> /</link> 
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp;