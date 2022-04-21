import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Creators.module.css";
import Link from "next/link";

export default function Creators() {
  return (
    <Layout>
      <div className={styles.banner}>
        <h2>
          CREADORES <span> RVE </span>
        </h2>
        <p>
          ¿Te apasiona el streaming? ¿Estás listo para recibir recompensas por
          hacer lo que te gusta con Real Vision Hardware? ¡Únase a nuestra
          iniciativa de transmisión y gana recompensas para mejorar tu
          configuración!
        </p>
        <button>Aplicar</button>
      </div>

      <div className={styles.container}>
        <div className={styles.creatorCard}>
          <div className={styles.mib}>
            <img src="/hkpp.jpg" alt="" />
          </div>
          <div className={styles.content}>

          <h2>HARDWARE KING</h2>
          <div className={styles.social}>
            <Link href=""><a><i className='bx bxl-youtube'></i></a></Link>
            <Link href=""><a><i className='bx bxl-twitter'></i></a></Link>
            <Link href=""><a><i className='bx bxl-instagram'></i></a></Link>
            <Link href=""><a><i className='bx bxl-tiktok'></i></a></Link>
            <Link href=""><a><i className='bx bxl-twitch'></i></a></Link>
            <Link href=""><a><i className='bx bxl-facebook'></i></a></Link>
          </div>
          <p>
            El unico, el mismimisimo campeon del hardware, el Hardware King.
            Echa un vistazo a la comunidad de gaming mas interactiva en linea
            donde tu eres el protagonista. El es simplemente el mejor. Llevo su
            habilidad al siguente nivel.
          </p>
          </div>

        </div>
        <div className={styles.creatorCard}>
          <div className={styles.mib}>
            <img src="/hkpp.jpg" alt="" />
          </div>
          <div className={styles.content}>

          <h2>Freddy Rosillo</h2>
          <div className={styles.social}>
            <Link href="https://www.youtube.com/c/spameroficial"><a><i className='bx bxl-youtube'></i></a></Link>
            {/* <Link href=""><a><i className='bx bxl-twitter'></i></a></Link> */}
            <Link href="https://www.instagram.com/aaron.f.r.v/"><a><i className='bx bxl-instagram'></i></a></Link>
            {/* <Link href=""><a><i className='bx bxl-tiktok'></i></a></Link> */}
            {/* <Link href=""><a><i className='bx bxl-twitch'></i></a></Link> */}
            <Link href="https://www.facebook.com/freddy.rosillo.7311/"><a><i className='bx bxl-facebook'></i></a></Link>
          </div>
          <p>
          Me llamo freddy teng o24 años vivo con mi esposa y mi hijo en bogota como creador bueno creo mis propios diseños mis videos los edito yo como pueda y los subo en mis canales
          </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
