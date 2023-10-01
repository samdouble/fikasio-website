import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import { ImageDef } from '../../../components/types';
import comicImageStyles from '../../../styles/ComicImage.module.css';
import db from '../../db.json';

type EPageProps = {
  images: ImageDef[];
};

const EPage: NextPage<EPageProps> = ({ images }) => {
  const router = useRouter();
  const id = router.query.id as string;
  const image = images.find(i => i.id === parseInt(id, 10));

  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return image ? (
    <>
      <Head>
        <title>{`Fikas.io - ${image?.date}`}</title>
      </Head>
			<div className={comicImageStyles.comic_row}>
				<div className={comicImageStyles.zone_comic_lg}>
					<img
            src={image.image_lg}
          />
				</div>
				<div className={comicImageStyles.zone_comic_md}>
					<img
            src={image.image_md}
          />
				</div>
				<div className={comicImageStyles.zone_comic_sm}>
					<img
            src={image.image_sm}
          />
				</div>
			</div>
    </>
  ) : <div />;
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

export default EPage;
