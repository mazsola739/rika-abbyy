import { useTheme } from '@/context/ThemeContext';
import styles from './ThemeToggle.module.scss';
import Image from 'next/image';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme} className={styles['toggle-button']} onClick={toggleTheme}>
      <div className={styles['toggle-thumb']}></div>
      <Image src="/icons/sun.svg" alt="Sun Icon" width={24} height={24} className={styles.sun} />
      <Image src="/icons/moon.svg" alt="Moon Icon" width={24} height={24} className={styles.moon} />
    </div>
  );
};

export default ThemeToggle;
