"use client";
import Image from "next/image";
import styles from "./learn.module.scss";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
interface LearnProps {
  params: {
    id: string;
  };
  imageUrl: string;
}

export default function Learn({ params, imageUrl }: LearnProps) {
  const { id } = params;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.list}>
            <li>
              <strong>{id}</strong>
            </li>
            <li>Descrição geral</li>
            <li>Interior</li>
            <li>Características</li>
          </ul>
        </nav>

        <button className={styles.buttonInfo}>MANTENHA-ME INFORMADO</button>
      </header>

      <section className={styles.containerImage}>
        <Image
          style={{}}
          width={500}
          height={400}
          src="/images/xc90_recharge.jpg"
          alt={id}
        />
      </section>

      <section className={styles.containerinfoCar}>
        <div className={styles.descrition}>
          <h3>
            <strong>{id}</strong>.
          </h3>
          <h2>
            Excelente desempenho elétrico <br /> num formato compacto.
          </h2>
        </div>

        <article className={styles.princInfo}>
          <div className={styles.card1}>
            <h4>480km</h4>
            <p>Autonomia elétrica</p>
          </div>

          <div className={styles.card2}>
            <h4>Cerca de 30min</h4>
            <p>Estimativa de tempo do carregamento rápido DC (10%-80%)</p>
          </div>

          <div className={styles.card3}>
            <h4>15.7kWh</h4>
            <p>Consumo de energia (por 100km)</p>
          </div>

          <div className={styles.card4}>
            <h4>5.3s</h4>
            <p>Aceleração (0-100 km/h)</p>
          </div>
        </article>

        <article className={styles.infoInfe}>
          {/* card 1 */}
          <div className={styles.card}>
            <div className={styles.container}>
              <div className={styles.icone}>
                <TimeToLeaveIcon fontSize="large" />
              </div>

              <div className={styles.content}>
                <h4>Soundbar</h4>
                <p>
                  A elegante soundbar é o centro de um <br /> sistema de áudio
                  de alta performance.
                </p>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.icone}>
                <TimeToLeaveIcon fontSize="large" />
              </div>

              <div className={styles.content}>
                <h4>Soundbar</h4>
                <p>
                  A elegante soundbar é o centro de um <br /> sistema de áudio
                  de alta performance.
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className={styles.card}>
            <div className={styles.container}>
              <div className={styles.icone}>
                <TimeToLeaveIcon fontSize="large" />
              </div>

              <div className={styles.content}>
                <h4>Soundbar</h4>
                <p>
                  A elegante soundbar é o centro de um <br /> sistema de áudio
                  de alta performance.
                </p>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.icone}>
                <TimeToLeaveIcon fontSize="large" />
              </div>

              <div className={styles.content}>
                <h4>Soundbar</h4>
                <p>
                  A elegante soundbar é o centro de um <br /> sistema de áudio
                  de alta performance.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
