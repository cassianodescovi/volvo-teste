// "use client";
// import { ConfigProvider, Link } from 'vcc-ui';
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Roboto } from "next/font/google";
import NextLink from "next/link";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});


export function Navbar() {
  return (
    <header style={roboto.style} className={styles.containerHeader}>
     <h1 className={styles.logo}>
     <Link  href="/" >Volvo</Link>
     </h1>
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.itemMenu}>
            {/* <ConfigProvider config={config}> */}
            <Link href="/cars">Nossos carros</Link>
            {/* </ConfigProvider> */}
          </li>
          <li className={styles.itemMenu}>
            <Link href="#">Menu</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
