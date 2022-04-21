import React, { useEffect, useContext, useState } from "react";
import DivisaFormater from "../../components/DivisaFormater";
import Layout from "../../components/Layout";
import { LOAD_COMPUTER } from "../../graphql/Queries";
import styles from "../../styles/Pcgaming.module.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from "next/router";
import { Store } from "../../utils/Store";

const monitors = [
  {
    name: "Sin Monitor",
    img: "/monitor.png",
    price: 0
  },
  {
    name: "Samsung 144hz Curvo",
    img: "/samsung.png",
    price: 1250000
  },
  {
    name: "Gigabyte 165Hz 1ms",
    img: "/gigabyte.png",
    price: 1430000
  },
];

export default function Computer({ computer }) {
  console.log("apicom", computer[0])
  const [openFooter, setOpenFooter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectMedium, setSelectMedium] = useState("cash");
  const { state, dispatch } = useContext(Store);
  
  const router = useRouter();
  useEffect(() => {
    if (!computer) {
      setLoading(true);
      return <div>Computer Not found</div>;
    } else {
      setLoading(false);
    }
  });

  const [monitor, setMonitor] = useState();

  if (computer[0] != undefined) {
    const tax =
      selectMedium == "cash"
        ? 0
        : selectMedium == "creditCard"
        ? computer[0].price * 0.12
        : 5000;
    const shippingPrice = computer[0].price > 3500000 ? 0 : 28000;
    const [aditionalItems, setAditionalItems] = useState(0);
  }

  const myComputer = computer[0];

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === computer._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log(computer)
    dispatch({type: 'CART_ADD_ITEM', payload: {...myComputer, quantity}})
    router.push('/shipping');
  }

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
              <button className={styles.btn} onClick={addToCartHandler}>Comprar</button>
          </div>
          <img src="/adata.png" alt={computer[0].name} />
          <h2>{computer[0].name}</h2>

          <Swiper
            effect="face"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper.controller)}
            onSlideChange={(swiper) => console.log(swiper)}
          >
            {monitors.map((moni) => (
              <SwiperSlide
                zoom={true}
                onSelect={() => setMonitor(moni)}
                key={moni.name}
              >
                <div className={styles.box}>
                  <img src={moni.img} alt="" />
                  <h4><DivisaFormater value={moni.price} /></h4>
                  <p>{moni.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.dualBox}>
            <label htmlFor="wifi">
              <i className="bx bx-wifi"></i>
              <input
                type="checkbox"
                name="wifi"
                id="wifi"
                onChange={(e) =>
                  setAditionalItems(
                    e.target.checked == true
                      ? (aditionalItems += 40000)
                      : (aditionalItems -= 40000)
                  )
                }
              />
              Agregar Wifi por: $40,000
            </label>
            <label htmlFor="bluetooth">
              <i className="bx bx-bluetooth"></i>
              <input
                type="checkbox"
                name="bluetooth"
                id="bluetooth"
                onChange={(e) =>
                  setAditionalItems(
                    e.target.checked == true
                      ? (aditionalItems += 30000)
                      : (aditionalItems -= 30000)
                  )
                }
              />
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
              <DivisaFormater value={Number(computer[0].price) + Number(aditionalItems)} />
            </p>
            <span className={styles.span}>----</span>
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
              <button
                onClick={() => setSelectMedium("cash")}
                className={
                  selectMedium == "cash" ? styles.activeButton : styles.active
                }
              >
                Efectivo
              </button>
              <button
                onClick={() => setSelectMedium("creditCard")}
                className={
                  selectMedium == "creditCard"
                    ? styles.activeButton
                    : styles.active
                }
              >
                Tarjeta Credito
              </button>
              <button
                onClick={() => setSelectMedium("bancolombia")}
                className={
                  selectMedium == "bancolombia"
                    ? styles.activeButton
                    : styles.active
                }
              >
                Bancolombia
              </button>
            </div>

            <div>
              <ul>
                <li>
                  <p>Precio</p> <DivisaFormater value={computer[0].price} />
                </li>
                <li>
                  <p>Tax</p> <DivisaFormater value={tax} />
                </li>
                <li>
                  <p>Envio</p> <DivisaFormater value={shippingPrice} />
                </li>
                <li>
                  <p>Adiciones</p> <DivisaFormater value={aditionalItems} />
                </li>
                <li>
                  <p>Total</p>{" "}
                  <DivisaFormater
                    value={
                      Number(computer[0].price) +
                      Number(shippingPrice) +
                      Number(tax) +
                      Number(aditionalItems)
                    }
                  />
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

  
  return {
    props: {
      computer: {...data.getComputer},
    },
  };
}

{
  /* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas hic
            vel officia quos tempora, rerum sapiente beatae assumenda delectus
            necessitatibus blanditiis enim doloribus quae, rem veniam debitis
            nesciunt repellat quidem.
          </p> */
}

{
  /* <button onClick={() => sendBanc()}>BANCOLOMBIA</button> */
}
{
  /* <ul>
            <h3>
              {" "}
              <i className="bx bxs-cog">Detalles del armado</i>{" "}
            </h3>
            {computer[0].specs.map((spec) => (
              <li key={spec.name}>{spec.name}</li>
            ))}
          </ul> */
}
