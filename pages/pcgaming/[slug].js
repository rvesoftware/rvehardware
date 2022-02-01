import React, { useEffect, useState } from "react";
import DivisaFormater from "../../components/DivisaFormater";
import Layout from "../../components/Layout";
import { LOAD_COMPUTER } from "../../graphql/Queries";
import styles from "../../styles/Pcgaming.module.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Computer({ computer }) {
  const [openFooter, setOpenFooter] = useState(false);
  const [loading, setLoading] = useState(true);

  const sendBanc = async () => {
    // const responde = await axios.post('http://localhost:4200/api/v1/banc')
    // ec74971b-3fa6-46e7-9023-02f369362336:nB7kF8aO4hQ3iF1tB1lG7pE4kP6pG7tL3bR6fO8kQ7wR0uP6lA
    // nB7kF8aO4hQ3iF1tB1lG7pE4kP6pG7tL3bR6fO8kQ7wR0uP6lA
    // const token = "1Fj8eK4rlyUd252L48herdrnEZh4ShG3NER1C3458.33rejected"
    // const responde = await axios.post(
    //   "https://sbapi.bancolombia.com/v2/operations/cross-product/payments/payment-order/transfer/action/registry",
    //   {
    //     data: [
    //       {
    //         commerceTransferButtonId: "h4ShG3NER1C",
    //         transferReference: "1002345678",
    //         transferDescription: "Compra en Real Vision Hardware",
    //         transferAmount: 3458.33,
    //         commerceUrl: "https://gateway.com/payment/route?commerce=rvehardare.com",
    //         confirmationURL:
    //           "https://pagos-api-dev.tigocloud.net/bancolombia/callback",
    //       },
    //     ],
    //   },
    //   {
    //     headers: {
    //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieXVuc2RlIn0.a7DWU2PDKGp-gy65SbdKL6KHkNim6mqUP-ofxLeJUf4",
    //       "content-type": "application/vnd.bancolombia.v1+json",
    //       accept: "application/vnd.bancolombia.v1+json",
    //     },
    //   }
    // );
    // const tokenResponse = await axios.post('https://sbapi.bancolombia.com/v1/security/oauth-otp-pymes/oauth2/token', {
    //     grant_type: "client_credentials",
    //     client_id: "ec74971b-3fa6-46e7-9023-02f369362336",
    //     client_secret: "nB7kF8aO4hQ3iF1tB1lG7pE4kP6pG7tL3bR6fO8kQ7wR0uP6lA"
    // },{
    //     headers: {
    //         accept: 'application/json',
    //         client_id: "ec74971b-3fa6-46e7-9023-02f369362336",
    //         client_secret: "nB7kF8aO4hQ3iF1tB1lG7pE4kP6pG7tL3bR6fO8kQ7wR0uP6lA"
    //     }
    // })
    // console.log(responde);
    // console.log(tokenResponse)
  };

  useEffect(() => {
    if (!computer) {
      setLoading(true);
      return <div>Computer Not found</div>;
    } else {
      setLoading(false);
    }
  });

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

          <Swiper
            effect="face"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={styles.box}>
              <i className='bx bx-chevron-left'></i>
                <img src="/monitor.png" alt="" />
                <p>Sin Monitor</p>
                <i className='bx bx-chevron-right' ></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box}>
              <i className='bx bx-chevron-left'></i>
                <img src="/samsung.png" alt="" />
                <p>Samsung 144hz Curvo </p>
                <i className='bx bx-chevron-right' ></i>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box}>
              <i className='bx bx-chevron-left'></i>

                <img src="/gigabyte.png" alt="" />
                <p>Gigabyte 165Hz 1ms</p>
                <i className='bx bx-chevron-right' ></i>

              </div>
            </SwiperSlide>
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
            <span>----</span>
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
