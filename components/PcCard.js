import React from 'react';
import styles from "./../styles/Pcgaming.module.css";

export default function PcCard() {
  return (
  <div className={styles.productCard}>
      <picture>
          <img src="./adata.png" alt="" />
      </picture>
      <h2 className={styles.title}>PC Magna</h2>
      <div className={styles.priceContent}>
      <p className={styles.price}>$3.000.000</p>
        <p className={styles.priceDiscount}>$3.000.000</p>
      </div>
      <ul>
          <li>Ryzen 7 5700G</li>
          <li>Gigabyte B450M Pro</li>
          <li>16GB de ram DDR4 3600Mhz</li>
          <li>SSD Sata 240GB</li>
          <li>Radoen Vega 8</li>
          <li>Fuente EVGA 400W</li>
          <li>Adata XPG Invader</li>
      </ul>
      <button>+ Anadir al Carrito</button>
  </div>
  );
}
