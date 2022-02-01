import Layout from "../../components/Layout";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { format, register } from "timeago.js";
import BlogCard from "../../components/blogCard";
import { useState } from "react";

export default function Blog({posts}) {
  register(
    "es_ES",
    (number, index, total_sec) =>
      [
        ["justo ahora", "ahora mismo"],
        ["hace %s segundos", "en %s segundos"],
        ["hace 1 minuto", "en 1 minuto"],
        ["hace %s minutos", "en %s minutos"],
        ["hace 1 hora", "en 1 hora"],
        ["hace %s horas", "in %s horas"],
        ["hace 1 dia", "en 1 dia"],
        ["hace %s dias", "en %s dias"],
        ["hace 1 semana", "en 1 semana"],
        ["hace %s semanas", "en %s semanas"],
        ["hace 1 mes", "en 1 mes"],
        ["hace %s meses", "en %s meses"],
        ["hace 1 año", "en 1 año"],
        ["hace %s años", "en %s años"],
      ][index]
  );

  const timeago = (timestamp) => format(timestamp, "es_ES");

  const [views, setViews] = useState(0);

  const configViews = () => {
    setViews(views + 1)
  }

  const [search, setSearch] = useState('')
  const [oneCategory, setOneCategory] = useState('all')

  return (
    <Layout>
      <div className={styles.header}>
        <ul>
          <li onClick={() => setOneCategory('all')} className={oneCategory == 'all'? styles.activeItem : ''} >Todo</li>
          <li onClick={() => setOneCategory('Noticias')} className={oneCategory == 'Noticias'? styles.activeItem : ''} >Noticias</li>
          <li onClick={() => setOneCategory('Reviews')}  className={oneCategory == 'Reviews'? styles.activeItem : ''} >Reviews</li>
          <li onClick={() => setOneCategory('Gaming')}   className={oneCategory == 'Gaming'? styles.activeItem : ''} >Gaming</li>
          <li onClick={() => setOneCategory('Software')} className={oneCategory == 'Software'? styles.activeItem : ''} >Software</li>
          <li onClick={() => setOneCategory('Hardware')} className={oneCategory == 'Hardware'? styles.activeItem : ''} >Hardware</li>
        </ul>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Buscar en el blog" />
      </div>

      <div className={styles.firstNew}>
        <div className={styles.firstImg}>
          <img src={posts[0].image} alt="" />
        </div>
        <div className={styles.firstContent}>
          <span>{posts[0].category}</span>
          <h2>{posts[0].title}</h2>
          <p>
            {posts[0].description}
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {posts.filter((post) => oneCategory == 'all'? post : post.category == oneCategory)
        .filter((post) => post.title.includes(search))
        .map((post) => (
          <BlogCard key={post.id}  image={post.image} title={post.title} category={post.category} text={post.description} time={timeago(post.createdAt)} slug={post.slug} />
        ))}
      </div>
    </Layout>
  );
}


export async function getServerSideProps(){

  const client = new ApolloClient({
    uri: "https://rveapiql.herokuapp.com/graphql",
    cache: new InMemoryCache
  })

  const {data} = await client.query({
    query: gql`
    query {
      posts{
        id
        description
        createdAt
        category
        slug
        image
        title
      }
    }
  `
})

  return {
    props: {
      posts: data.posts
    }
  }



}
