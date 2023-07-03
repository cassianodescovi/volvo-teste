import styles from './info.module.scss';

interface InfoProps{
  bodyType:string;
  modelName:string;
  modelType:string;
  price:string;
}

export function Info({bodyType,modelName,modelType,price}:InfoProps){
  return (
    <div className={styles.containerInfo}>
      <span className={styles.type}>{bodyType}</span>

      <div className={styles.content}>
        <strong>{modelName}</strong>
        <p>{modelType}</p>
      </div>

      <p className={styles.price}>A partir de <span>R$ {price}</span> </p>
    </div>
  );
}