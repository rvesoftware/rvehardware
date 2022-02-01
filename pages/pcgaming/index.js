import Layout from "../../components/Layout";
import PcCard from "../../components/PcCard";
import styles from ".//../../styles/Pcgaming.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export default function PcGaming({computers}) {
  return (
    <Layout>
      <div className={styles.banner}>
        <h2>PC GAMER</h2>
        <p>
          Compara las mejores PC Gamer armadas con tarjetas de video NVIDIA o
          RADEON, y proceadores Intel o Ryzen. Enviamos tu computadora a todo
          Colombia
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.hardwareking}>
            <img src="./hk.png" alt="" />
            <h2>EL RENDIMEINTO DE GRADO CAMPEON ESTA AQUI</h2>
            <p>Entrando en la Arena... los Productos de edicion limitada del Hardware King </p>
            <button>COMPRAR AHORA</button>
        </div>

        {computers.map((computer) => (
          <PcCard key={computer.id} price={computer.price} name={computer.name} available={computer.available} slug={computer.slug} />
        ))}
      </div>
    </Layout>
  );
}


export async function getServerSideProps(){

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache
  })

  const {data} = await client.query({
    query: gql`
    query {
      computers{
        id
        name
        description
        createdAt
        slug
        image
        price
        available
      }
    }
  `
})

  return {
    props: {
      computers: data.computers
    }
  }



}
