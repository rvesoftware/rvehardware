import Link from 'next/link'
import { useState } from 'react';
import styles from '../../styles/Header.module.css'

export default function Header() {
  const [drop, setDrop] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <button><i className='bx bx-menu'></i></button>
      </div>
      <Link href="/">
      <a>
        <img src="./logo.svg" alt="" />
        </a>
      </Link>
      <nav>
        <div
          onClick={() => setDrop(!drop)}
          className={drop ? "dropdown active" : "dropdown"}
        >
          <Link href="#">
            <a>Computadoras</a>
          </Link>
          <div className="option">
            <div>
              <Link href="/pcgaming">
                <a>PC Gaming</a>
              </Link>
            </div>
            <div><Link href="/mini"><a>Mini PC</a></Link></div>
            <div>Portatiles</div>
          </div>
        </div>
        <Link href="/software">
          <a>Software</a>
        </Link>
        {/* <Link href=""><a>Computadoras</a></Link> */}
        <Link href="/tracking">
          <a>Seguimiento</a>
        </Link>
        <Link href="/build">
          <a>Construir</a>
        </Link>
        <Link href="/creators">
          <a>Creadores</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>

      <ul>
        <Link href="/pcgaming">
          <a>
            <i className='bx bx-shopping-bag' ></i>
          </a>
        </Link>

        <Link href="/">
          <a>
            <i className="bx bx-cart"></i>
          </a>
        </Link>
        <Link href="/">
          <a>
            <i className="bx bx-user"></i>
          </a>
        </Link>
      </ul>
    </header>
  );
}
