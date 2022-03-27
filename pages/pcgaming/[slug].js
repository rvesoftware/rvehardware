import React, { useEffect, useState } from "react";
import DivisaFormater from "../../components/DivisaFormater";
import Layout from "../../components/Layout";
import { LOAD_COMPUTER } from "../../graphql/Queries";
import styles from "../../styles/Pcgaming.module.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const monitors = [{
  name: "Sin Monitor",
  img: '/monitor.png'
}, {
  name: "Samsung 144hz Curvo",
  img: '/samsung.png'
},{
  name: "Gigabyte 165Hz 1ms",
  img: '/gigabyte.png'
}]
export default function Computer({ computer }) {
  const [openFooter, setOpenFooter] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!computer) {
      setLoading(true);
      return <div>Computer Not found</div>;
    } else {
      setLoading(false);
    }
  });

  const [monitor, setMonitor] = useState();

console.log(monitor)
  return (
    <Layout>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <div className={styles.containerMain}>
          <div className={styles.containerHeader}>
            <p>
              <DivisaFormater value={computer[0].price} />
            </p>
            <Link href="/">
              <a className={styles.btn}>Comprar</a>
            </Link>
          </div>
          <img src="/adata.png" alt={computer[0].name} />
          <h2>{computer[0].name}</h2>
 
          <Swiper
            effect="face"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            onSlideChange={(swiper) =>console.log(swiper)}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {monitors.map((moni) => (
              <SwiperSlide zoom={true} onSelect={() => setMonitor(moni)} m={moni}>
              <div className={styles.box}>
                <img src={moni.img} alt="" />
                <p>{moni.name}</p>
              </div>
            </SwiperSlide>
            ))}

          </Swiper>

          <div className={styles.dualBox}>
            <label htmlFor="wifi">
              <i className="bx bx-wifi"></i>
              <input type="checkbox" name="wifi" id="wifi" />
              Agregar Wifi por: $40,000
            </label>
            <label htmlFor="bluetooth">
              <i className="bx bx-bluetooth"></i>
              <input type="checkbox" name="bluetooth" id="bluetooth" />
              Agregar Bluetooth por: $30,000
            </label>
          </div>

          <div className={styles.gamesBox}>
            <div className={styles.boxHeader}>
              <i className="bx bxs-joystick"></i> Juegos Recomendados
            </div>
            <div className={styles.boxContent}>
              <img src="/fornite-cover.webp" alt="" title="Fornite" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
            </div>
          </div>
          <div className={styles.gamesBox}>
            <div className={styles.boxHeader}>
              <i className="bx bxs-palette"></i> Ideal Para
            </div>
            <div className={styles.boxContent}>
              <img src="/fornite-cover.webp" alt="" title="Fornite" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
              <img src="/fornite-cover.webp" alt="" />
            </div>
          </div>
          <div className={styles.footerPrice}>
            <button onClick={() => setOpenFooter(true)}>
              <i className="bx bx-chevron-up"></i>
            </button>
            <p>
              <DivisaFormater value={computer[0].price} />
            </p>
            <span  className={styles.span}>----</span>
          </div>

          <div
            className={`${styles.footerCard}  ${
              openFooter ? styles.active : ""
            }`}
          >
            <h2>Formas de pago</h2>
            <button
              className={styles.close}
              onClick={() => setOpenFooter(false)}
            >
              <i className="bx bx-x"></i>
            </button>
            <p>La seleccion de financiacion se confirmara despues del pedido</p>

            <div className={styles.buttonsContainer}>
              <button className={styles.activeButton}>Efectivo</button>
              <button className={styles.active}>Tarjeta Credito</button>
              <button className={styles.active}>Bancolombia</button>
            </div>

            <div>
              <ul>
                <li>
                  <p>Precio</p> <DivisaFormater value={computer[0].price} />
                </li>
                <li>
                  <p>Tax</p> <DivisaFormater value={computer[0].price} />
                </li>
                <li>
                  <p>Envio</p> <DivisaFormater value={computer[0].price} />
                </li>
                <li>
                  <p>Total</p> <DivisaFormater value={computer[0].price} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  const client = new ApolloClient({
    uri: "https://rveapiql.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: LOAD_COMPUTER,
    variables: { slug: slug },
  });

  console.log(data.getComputer);
  return {
    props: {
      computer: data.getComputer,
    },
  };
}


         {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas hic
            vel officia quos tempora, rerum sapiente beatae assumenda delectus
            necessitatibus blanditiis enim doloribus quae, rem veniam debitis
            nesciunt repellat quidem.
          </p> */}

          {/* <button onClick={() => sendBanc()}>BANCOLOMBIA</button> */}
          {/* <ul>
            <h3>
              {" "}
              <i className="bx bxs-cog">Detalles del armado</i>{" "}
            </h3>
            {computer[0].specs.map((spec) => (
              <li key={spec.name}>{spec.name}</li>
            ))}
          </ul> */}
