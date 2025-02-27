import useMenuToggle from '@/hooks/useMenuToggle';
import { HamburgerMenu } from '../Icons/Icons';
import MobileMenu from '../MobileMenu/MobileMenu';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { menuOpen, handleMenuToggle } = useMenuToggle();

  const getMenuAriaLabel = () => (menuOpen ? 'Close menu' : 'Open menu');

  return (
    <header className={styles.header}>
      <div className={styles['header-nav']}>
        <span>Rika</span>
        <div className={styles['nav-container']}>
          <Nav />
        </div>
        <button className={styles['menu-button']} onClick={handleMenuToggle} aria-label={getMenuAriaLabel()}>
          <HamburgerMenu />
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={handleMenuToggle} />
      <h1>THE BLOG</h1>
    </header>
  );
};

export default Header;
