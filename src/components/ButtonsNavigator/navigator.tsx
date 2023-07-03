import { ChevronCircle } from '../ChevronCircled/chevronCircled';
import styles from './buttonNavigator.module.scss';

interface ButtonsNavigatorProps{
  carousel:any;
}

export function ButtonsNavigator({carousel}:ButtonsNavigatorProps) {

  function handleLeftClick(e:any){
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
  function handleRightClick(e:any){
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }
  return (
    <div className={styles.buttons}>
      <button style={{
         transform: 'rotate(180deg)',
      }}  onClick={handleLeftClick}>
        <ChevronCircle />{" "}
      </button>
      <button onClick={handleRightClick}>
        <ChevronCircle />
      </button>
    </div>
  );
}
