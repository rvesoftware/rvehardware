import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
      <footer className={styles.footer}>
          <div className={styles.container}>
            </div>
          <ul>
              <li><Link href="/"><a>Privacy Policy</a></Link></li>
              <li><Link href="/"><a>Terms Of Use</a></Link></li>
          </ul>
          <p>&copy; 2022 RVH All Rights Reserved</p>
          <img src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/stencil/55db9ca0-562d-013a-ca53-62a8844b6806/e/2dcfde50-f407-0135-4ccd-525400970412/img/creditcardlogos1.jpeg" alt="" />
      </footer>
  );
}
