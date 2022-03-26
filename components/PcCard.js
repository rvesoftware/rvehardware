import Link from 'next/link';
import React from 'react';
import styles from "./../styles/Pcgaming.module.css";
import DivisaFormater from './DivisaFormater'

export default function PcCard({name, price, available, slug, offer, priceOffer}) {

  return (
  <Link href={`pcgaming/${slug}`}>
  <a>
  <div className={styles.productCard}>
  <div className={styles.flex}>

      <picture>
          <img src="./adata.png" alt={name} />
      </picture>
      <div>
      <ul>
          <li>Ryzen 7 5700G</li>
          <li>Gigabyte B450M Pro</li>
          <li>16GB de ram DDR4 3600Mhz</li>
          <li>SSD Sata 240GB</li>
          <li>Radoen Vega 8</li>
          <li>Fuente EVGA 400W</li>
          <li>Adata XPG Invader</li>
      </ul>
      </div>
        
      </div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.priceContent}>
      <p className={styles.price}><DivisaFormater value={price} /></p>
        {offer && <p className={styles.priceDiscount}><DivisaFormater value={priceOffer} /> </p> }
      </div>
  </div>
  
      {/* <button>+ Anadir al Carrito</button> */}
  </a>
  </Link>
  );
}
