import React from "react";
import Link from "next/link";
import styles from "../../styles/MobileFooter.module.css";

export default function MobileFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="">
        <a>
          <i class="bx bxs-home"></i>
          <p>Home</p>
        </a>
      </Link>
      <Link href="">
        <a>
          <i class="bx bxs-cart-alt"></i>
          <p>Carrito</p>
        </a>
      </Link>
      <Link href="/pcgaming">
        <a>
          <i class="bx bxs-shopping-bag-alt"></i>
          <p>Tienda</p>
        </a>
      </Link>
      <Link href="">
        <a>
          <i class="bx bxl-blogger"></i>
          <p> Blog</p>
        </a>
      </Link>
      <Link href="">
        <a>
          <i class="bx bx-link-alt"></i>
          <p>Linktree</p>
        </a>
      </Link>
    </footer>
  );
}
