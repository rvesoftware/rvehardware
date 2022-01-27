import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function BlogCard({ title, image, time, text, category, views, slug }) {
  return (
    <Link href={`blog/${slug}`}>
      <a>
        <div className={styles.card}>
          <img src={image} alt={title} />
          <div className={styles.content}>
            <span>{category}</span>
            <h2>{title}</h2>
            <p>
              {text}
            </p>
          </div>
          <div className={styles.footer}>
            <p>{time}</p>
            <p>
              <span>{views}</span> <i className="bx bxs-low-vision"></i>
            </p>
          </div>
        </div>
      </a>
   </Link>
  );
}
