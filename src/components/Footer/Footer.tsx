import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { footerList } from '@/constants/footer';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.copyright}>Rika &copy; 2025</li>
        {footerList.map((item, index) => (
          <li key={index}>
            {item.external ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <Link href={item.url}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
