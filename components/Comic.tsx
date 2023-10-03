import { FunctionComponent } from 'react';
import { ImageDef } from './types';
import styles from './Comic.module.css';

export type ComicProps = {
  // height: number;
  id: string;
  images: ImageDef[];
};

const Comic: FunctionComponent<ComicProps> = ({
  // height,
  id,
  images,
}) => {
  const ascSortedImages = images
    .filter(i => i.display)
    .sort((a, b) => a.dateISO < b.dateISO ? -1 : 1);
  const imageIndex = id
    ? ascSortedImages.findIndex(i => i.id === parseInt(id, 10))
    : ascSortedImages.length - 1;
  const image = ascSortedImages[imageIndex];
  const oldestImage = ascSortedImages[0];
  const isOldestImage = id && oldestImage && oldestImage.id === parseInt(id, 10);
  const previousImage = ascSortedImages[imageIndex - 1];
  const nextImage = ascSortedImages[imageIndex + 1];
  const newestImage = ascSortedImages[ascSortedImages.length - 1];
  const isNewestImage = id && newestImage && newestImage.id === parseInt(id, 10);
  const imagesInSameSection = image && ascSortedImages.filter(i => i.section === image.section);
  const indexOfImageInSection = (image && image.section && imagesInSameSection)
    ? imagesInSameSection.findIndex(i => i.id === image.id)
    : 0;
  const nbImagesInSection = image && image.section && imagesInSameSection && imagesInSameSection.length;

  return (
    <>
      <h2>
        { image && image.date }
        { image && image.section && ` - ${image.section}` }
        {
          image
          && image.section
          && imagesInSameSection
          && ` [${(indexOfImageInSection + 1)} /${nbImagesInSection}]`
        }
      </h2>
      {
        image && image.section && imagesInSameSection && imagesInSameSection.length > 1 && (
          <>
            {
              imagesInSameSection
                .map((imageInSameSection, i: number) => (
                  <a
                    className={`${styles.section_link} ${imageInSameSection.id === image.id ? styles.deactivated : styles.activated}`}
                    href={`/images/${imageInSameSection.id}`}
                    key={imageInSameSection.id}
                  >
                    { i + 1 }
                  </a>
                ))
            }
            <br />
            <br />
          </>)
      }
      <div>
        {
          oldestImage && !isOldestImage
            ? (
              <a href={`/images/${oldestImage.id}`} className={styles.arrow}>
                <span
                  className={styles.arrowLeft}
                >
                  &lt;&lt; FIRST
                </span>
              </a>
            ) : (
              <span
                className={`${styles.doesntexist} ${styles.arrowLeft}`}
              >
                &lt;&lt; FIRST
              </span>
            )
        }
        {
          previousImage
            ? (
              <a
                className={styles.arrow}
                href={`/images/${previousImage.id}`}
              >
                <span
                  className={styles.arrowLeft}
                >
                  &lt; PREV.
                </span>
              </a>
            ) : (
              <span
                className={`${styles.doesntexist} ${styles.arrowLeft}`}
              >
                &lt; PREV.
              </span>
            )
        }
        {
          newestImage && !isNewestImage
            ? (
              <a
                className={styles.arrow}
                href={`/images/${newestImage.id}`}
              >
                <span
                  className={styles.arrowRight}
                >
                  LAST &gt;&gt;
                </span>
              </a>
            ) : (
              <span
                className={`${styles.doesntexist} ${styles.arrowRight}`}
              >
                LAST &gt;&gt;
              </span>
            )
        }
        {
          nextImage
            ? (
              <a
                className={styles.arrow}
                href={`/images/${nextImage.id}`}
              >
                <span
                  className={styles.arrowRight}
                >
                  NEXT &gt;
                </span>
              </a>
            ) : (
              <span
                className={`${styles.doesntexist} ${styles.arrowRight}`}
              >
                NEXT &gt;
              </span>
            )
        }
      </div>
    </>
  );
};

export default Comic;
