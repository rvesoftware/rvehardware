import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Pcgamer from "../components/Pcgamer";
import { OrbitControls } from "@react-three/drei";
import Layout from "../components/Layout";
import Computer from '../components/Computer'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className="banner">
          <h2 className={styles.firsTitle}>Super. Mega. Rapido</h2>
          <video width="100%" height="100%" loop autoPlay controls>
            <source src="/VID11.mp4" type="video/mp4" />
          </video>
     
          <div className={styles.contentFot}>

          <h3>JUEGA A TU MANERA</h3>
          <h2 className="home__joga">JOGA BONITO</h2>
          <button>BEST SELLER</button>
          <div className={styles.red}>
            <Link href="/" ><a> <i className='bx bxl-youtube'></i></a></Link>
            <Link href="/" ><a> <i className='bx bxl-instagram-alt' ></i></a></Link>
            <Link href="/" ><a> <i className='bx bxl-facebook' ></i></a></Link>
          </div>
          </div>

          {/* <h3>Potenciar la mejor tanto en el trabajo como en el juego.</h3> */}
        </div>
      </div>

      {/* <section>
        <h2>EXPERIENCIA UNICA</h2>
        <p>Nuestro practica visor de realidad aumentada le permite explorar todos los aspectos que tendra su PC GAMER en alta definicion en la pantalla de su dispositivo movil o tableta.</p>
        <Canvas className="canvas">
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotate={true}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Computer />
          </Suspense>
        </Canvas>
        <button>Contruye tu PC</button>
      </section>
      <section>
        <h2>ORGULLOSO SETUP?</h2>
        <p>
          Commparte tu RVE setup con nosotros. Menciona @Realvisionet en tus
          foto y publicaremos las mejores fotos en nuestro sitio web
        </p>
        <div className="proudContent">
          <div className="img">
            <span className="imgHover">
              <i className="bx bxl-instagram"></i>
            </span>
            <img src="./medium.jpg" alt="" />
          </div>
          <div className="img">
            <span className="imgHover">
              <i className="bx bxl-instagram"></i>
            </span>
            <img src="./medium2.jpg" alt="" />
          </div>
          <div className="img">
            <span className="imgHover">
              <i className="bx bxl-instagram"></i>
            </span>

            <img src="./medium.jpg" alt="" />
          </div>
          <div className="img">
            <span className="imgHover">
              <i className="bx bxl-instagram"></i>
            </span>

            <img src="./medium2.jpg" alt="" />
          </div>
          <div className="img">
            <span className="imgHover">
              <i className="bx bxl-instagram"></i>
            </span>

            <img src="./medium.jpg" alt="" />
          </div>
          <div className="img">
            <span className="imgHover">
              <i className="bx bxl-instagram"></i>
            </span>

            <img src="./medium2.jpg" alt="" />
          </div>
        </div>
        <button>
          {" "}
          <i className="bx bxl-instagram"></i> Siguenos
        </button>
      </section> */}
    </Layout>
  );
}
     {/* <p>
            Por mucho tiempo los amantes de los videojuegos se han conformado
            con una PC Gamer sin personalidad, sin carácter y sin aquello que te
            haga vibrar. Con una PC de Real Vision Hardware, tienes el extremo
            opuesto: una PC Gamer con identidad única, con estética inigualable
            y con tanta potencia que no pasarás desapercibido en cualquier
            juego.
          </p> */}