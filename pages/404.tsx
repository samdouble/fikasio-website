import { useEffect } from 'react';
import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGA from 'react-ga4';
import Footer from '../components/Footer';
import Head from '../components/Head';
import TopMenu from '../components/TopMenu';
import styles from '../styles/Home.module.css';

const Custom404: NextPage = () => {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <div>
      <Head>
        <title>{`fikas.io - 404`}</title>
      </Head>
      <main>
        <TopMenu />
        <Container>
          <div className={styles.container}>
            <h2>Error 404</h2>
            <p>Go back to <a href="/">the main page</a></p>
            <br />
              <Row style={{ marginTop: 20 }}>
                <Col lg={12}>
                </Col>
              </Row>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Custom404;
