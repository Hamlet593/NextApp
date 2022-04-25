import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss';
import Head from "next/head";

const Home = () => (
  <div className={styles.wrapper}>
        <Head>
            <title>Main Page</title>
        </Head>
      <Heading text='Next JS Application'/>
  </div>
)

export default Home;