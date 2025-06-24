import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h1 className={styles.logo}>baliye</h1>
        <p className={styles.description}>We Customise Product for your happiness</p>
      </div>

      <div className={styles.column}>
        <h4 className={styles.h4}>Quick Links</h4>
        <ul className={styles.links}>
          <li><Link href="#">Cor-Set</Link></li>
          <li><Link href="#">Potli</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="/terms_and_conditions">Terms & Conditions</Link></li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4 className={styles.h4}>Connect With Us On</h4>
        <p>Blaiye@gmail.com</p>
        <p>+123 567 8900</p>
        <div className={styles.socials}>
          <Link href="#"><Image src="/icons/InstagramLogo.png" alt="Instagram" width={24} height={24} /></Link>
          <Link href="#"><Image src="/icons/TwitterLogo.png" alt="Twitter" width={24} height={24} /></Link>
          <Link href="#"><Image src="/icons/FacebookLogo.png" alt="Facebook" width={24} height={24} /></Link>
        </div>
      </div>
    </footer>
  );
}
