import { useState } from "react";
import styles from "./submenu.module.scss";
import { ListCars } from "@/app/cars/page";

interface SubMenuProps{
  setListCars:(value:ListCars[]) => void;
}

export function SubMenu({ setListCars }: SubMenuProps) {

  async function filterTypeCar(type?: string) {
    const response = await fetch("api/cars.json");
    const data = await response.json();

    if (type) {
      const filterCar = data.filter((car: any) => {
        return car.bodyType === type;
      });
      setListCars(filterCar);
    } else {
      setListCars(data);
    }
  }

  const [filterintex, setFilterintex] = useState(0);

  return (
    <section className={styles.containerSubmenu}>
      <h1>Todos os modelos Recharge</h1>

      <div className={styles.filterButtons}>
        <button
          onClick={() => {
            filterTypeCar();
            setFilterintex(0);
          }}
          className={filterintex == 0 ? styles.buttonActive : styles.button}
        >
          Todos{" "}
        </button>
        <button
          onClick={() => {
            filterTypeCar("suv");
            setFilterintex(1);
          }}
          className={filterintex == 1 ? styles.buttonActive : styles.button}
        >
          SUV{" "}
        </button>
        <button
          onClick={() => {
            filterTypeCar("estate");
            setFilterintex(2);
          }}
          className={filterintex == 2 ? styles.buttonActive : styles.button}
        >
          Estate{" "}
        </button>
        <button
          onClick={() => {
            filterTypeCar("sedan");
            setFilterintex(3);
          }}
          className={filterintex == 3 ? styles.buttonActive : styles.button}
        >
          Sedan{" "}
        </button>
      </div>
    </section>
  );
}
