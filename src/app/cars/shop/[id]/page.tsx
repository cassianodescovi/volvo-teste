import { Chevron } from "@/components/Chevron/chevron";
import Image from "next/image";
import styles from './shop.module.scss';

interface ShopProps{
  params: {
    id: string;
  };
}

export default function Shop({params}:ShopProps) {
  const {id} = params;
  return (
    <>
      <section className={styles.containerTop}>
        <div className={styles.cardOneTop}>
          <h1>
            Comprar o {id} Recharge
          </h1>
          <div>
            <Image
              width={400}
              height={400}
              src="/images/xc90_recharge.jpg"
              alt="xc90_recharge"
            />
          </div>
        </div>

        <div
        className={styles.cardTwoTop}>
          <p className={styles.explore}>
            Explore as ofertas e solicite a cotação para adquirir o seu.
          </p>

          <div className={styles.contant}>
            <h2>
              Personalize o seu carro. Configure e compare para encontrar o seu
              Volvo ideal
            </h2>

            <p
            className={styles.price}>
              A partir de R$ 549.950
            </p>

            <div className={styles.infos}>
              <p>- Escolha os acessórios certos para você</p>
              <p>- Obtenha um preço hoje</p>
            </div>

            <button
            className={styles.buttonConfig}>
              CONFIGURE O SEU
            </button>
          </div>
        </div>
      </section>

      <section
      className={styles.containerBottom} >
        <div
        className={styles.cardOne}
        >
          <h2
          >
            Dê o próximo passo
          </h2>

          <div
          className={styles.containerButtons}
          >
            <button
            className={styles.buttonSolic}
               >
              solicite cotação
            </button>
            <button
            className={styles.buttonDrive}
            >
              agende um <br /> test-drive
              <Chevron />
            </button>
          </div>
        </div>

        <div
        className={styles.cardImage}
          >
          <Image
            width={400}
            height={400}
            src="/images/xc90_recharge.jpg"
            alt="xc90_recharge"
          />
        </div>
      </section>
    </>
  );
}
