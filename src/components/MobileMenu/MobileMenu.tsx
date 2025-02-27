import React from 'react';
import Image from 'next/image';
import styles from './MobileMenu.module.scss';
import { MobileMenuProps } from './MobileMenu.props';
import Nav from '../Nav/Nav';
import { Close } from '../Icons/Icons';

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`${styles['mobile-menu']} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen}>
      <div className={styles['mobile-menu-content']}>
        <span>Rika</span>
        <Nav />
        <button className={styles['close-button']} onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <Close />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
