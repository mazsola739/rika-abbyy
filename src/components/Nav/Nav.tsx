import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { navLinks } from '@/constants/nav';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.url} className={styles['nav-link']}>
          {link.name}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
