'use client'
import { SubMenu } from "@/components/Submenu/submenu";
import {Carousel} from '../../components/Carousel/carousel';
import { useEffect, useRef, useState } from "react";

 export interface ListCars{
  id:string;
  modelName:string;
  bodyType:string;
  modelType:string;
  imageUrl:string;
  price:string;
}

export default function Cars(){
  const [listCars, setListCars] = useState<ListCars[]>([]);
  const carousel = useRef(null);

  async function getDate() {
    const response = await fetch("api/cars.json");
    const data = await response.json();
    setListCars(data);
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div style={{maxWidth:'1300px'}}>
     <SubMenu setListCars={setListCars}/>
     <Carousel carousel={carousel} listCars={listCars}/>
    </div>
  )
}