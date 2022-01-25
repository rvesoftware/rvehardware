import Layout from "../../components/Layout";
import PcCard from "../../components/PcCard";
import styles from ".//../../styles/Pcgaming.module.css";
export default function PcGaming() {
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
            <h2>EL RENDIMEINTO DE GRADO CAMPEON ESTA AQUI</h2>
            <p>Entrando en la Arena... los Productos de edicion limitada del Hardware King </p>
            <button>COMPRAR AHORA</button>
        </div>
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />
        <PcCard />

      </div>
    </Layout>
  );
}
