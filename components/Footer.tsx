import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopyright}>
        © 2023 fikas.io
      </div>
    </footer>
  );
}

export default Footer;
