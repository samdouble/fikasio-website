import { useEffect } from 'react';
import type { NextPage } from 'next';
import ReactGA from "react-ga4";
import Footer from '../components/Footer';
import Head from '../components/Head';
import TopMenu from '../components/TopMenu';
import styles from '../styles/Home.module.css';

const Privacy: NextPage = () => {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <div>
      <Head>
        <title>{`Fikas.io - Privacy`}</title>
      </Head>
      <main>
        <TopMenu />
        <div className={styles.container}>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Privacy;
