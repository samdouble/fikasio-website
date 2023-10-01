import { useEffect } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGA from "react-ga4";
import Comic from '../../components/Comic';
import Footer from '../../components/Footer';
import TopMenu from '../../components/TopMenu';
import { ImageDef } from '../../components/types';
import styles from '../../styles/Home.module.css';
import db from '../db.json';

type ImagePageProps = {
  images: ImageDef[];
};

const ImagePage: NextPage<ImagePageProps> = ({ images }) => {
  const router = useRouter();
  const id = router.query.id as string;
  const image = images.find(i => i.id === parseInt(id, 10));

  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <div>
      <Head>
        <title>{`Fikas.io - ${image?.date}`}</title>
      </Head>
      <main>
        <TopMenu />
        <Container>
          <Row>
            <Col>
              <Comic
                id={id}
                images={images}
              />
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

export async function getStaticPaths() {
  return {
    paths: db.map(image => ({
      params: {
        id: (image as any).id.toString(),
      },
    })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {
  return {
    props: {
      images: db,
    },
  }
};

export default ImagePage;
