import { useEffect } from 'react';
import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGA from "react-ga4";
import Footer from '../components/Footer';
import Head from '../components/Head';
import TopMenu from '../components/TopMenu';
import styles from '../styles/Home.module.css';

const Docs: NextPage = () => {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <div>
      <Head>
        <title>{`fikas.io - Documentation`}</title>
      </Head>
      <main>
        <TopMenu />
        <Container>
          <Row>
            <Col>
              <div className={styles.container}>
              </div>
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
}

export default Docs;
