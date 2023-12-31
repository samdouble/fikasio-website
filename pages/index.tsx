import { useEffect } from 'react';
import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGA from 'react-ga4';
import Footer from '../components/Footer';
import Head from '../components/Head';
import TopMenu from '../components/TopMenu';
import { ImageDef } from '../components/types';
import styles from '../styles/Home.module.css';
import db from './db.json';

type HomePageProps = {
  images: ImageDef[];
};

const Home: NextPage<HomePageProps> = ({ images }) => {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <div>
      <Head>
        <title>{`fikas.io - Home`}</title>
      </Head>
      <main>
        <TopMenu />
        <Container>
          <Row>
            <Col>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col lg={12}>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      images: db,
    },
  }
};

export default Home;
