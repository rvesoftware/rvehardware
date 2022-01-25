import Layout from "../components/Layout";
import styles from '../styles/Blog.module.css'

export default function Blog() {
  return (
    <Layout>
        <div className={styles.header}>
            <ul>
                <li>Todo</li>
                <li>Noticias</li>
                <li>Reviews</li>
                <li>Gaming</li>
                <li>Software</li>
                <li>Hardware</li>
            </ul>
            <input type="text" placeholder="Buscar en el blog" />
        </div>
    </Layout>
  );
}
