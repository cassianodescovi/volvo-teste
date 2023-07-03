import Image from "next/image";
import styles from './home.module.scss';
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
    
    <p>A grandiosidade do nosso menor SUV</p>
    <h1>EX30</h1>
    
      <Link href="/cars">
      Saiba mais
      </Link>
   
    </div>
  )
}
