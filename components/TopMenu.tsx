import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './TopMenu.module.css';

const TopMenu = () => {
  return (
    <Navbar expand="lg" className={styles.topnav}>
      <Navbar.Brand href="/">
        <Image src="/logo_185.png" width={140} height={60} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/privacy">Privacy</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopMenu;
