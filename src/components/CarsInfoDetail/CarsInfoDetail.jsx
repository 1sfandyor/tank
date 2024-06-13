import {v4 as uuidv4} from 'uuid';
import { CarsInfo } from "../CarsInfo/CarsInfo"
import tank300 from '../../assets/cars/tank300-red.png';
import tank500 from '../../assets/cars/tank500-gold.png';
import clipboardCheck from '../../assets/icons/clipboardCheck.svg'
import shieldTick from '../../assets/icons/shieldTick.svg'
import tag from '../../assets/icons/tag.svg'
import discount from '../../assets/icons/discount.svg'

import tank300_front from "../../assets/slider_tank_300_front_thumb.jpeg";
import tank300_back from "../../assets/slider_tank_300_back_thumb.jpeg";
import tank300_side from "../../assets/slider_tank_300_side_thumb.jpeg";
import tank300_control from "../../assets/slider_tank_300_control_thumb.jpeg";
import tank300_inside from "../../assets/slider_tank_300_inside_thumb.jpeg";

import tank500_front from "../../assets/slider_tank_500_front_thumb.jpeg";
import tank500_back from "../../assets/slider_tank_500_back_thumb.jpeg";
import tank500_side from "../../assets/slider_tank_500_side_thumb.jpeg";
import tank500_control from "../../assets/slider_tank_500_control_thumb.jpeg";
import tank500_inside from "../../assets/slider_tank_500_inside_thumb.jpeg";






export const CarsInfoDetail = () => {

  const colors = [
      '#b0a798',
      '#ef2929',
      '#df4c30',
      '#c6c9ce',
      '#000',
      '#fff'
  ]

  const tank300_Gallery = [
    tank300_front,
    tank300_back,
    tank300_side,
    tank300_control,
    tank300_inside,
  ]

  const tank500_Gallery = [
    tank500_front,
    tank500_back,
    tank500_side,
    tank500_control,
    tank500_inside,
  ]


  const features = [
      {
          id: uuidv4(),
          text: "Автомобили в наличии с ПТС",
          img: clipboardCheck
      },

      {
          id: uuidv4(),
          text: "Сервисная поддержка до 5 лет / 150 000 км",
          img: shieldTick
      },

      {
        id: uuidv4(),
        text: "Улучшим любое предложение.",
        img: tag
      },

      {
        id: uuidv4(),
        text: "Кредит 0,01%.",
        img: discount
      }
  ]
  
  return (
    <section className="">
      <CarsInfo 
        img={tank300} 
        gallery={tank300_Gallery}
        color={colors} 
        title="TANK 300" 
        info="Выгода по Trade-In до 450 000 ₽"
        features={features}
        showcaseThumb={tank300_Gallery}
        bg='#1c2121'
      />
      
      
      <CarsInfo 
        img={tank500}
        color={colors}
        gallery={tank500_Gallery}
        title="TANK 500"
        info="Выгода до 700 000 ₽"
        features={features}
        showcaseThumb={tank500_Gallery}
        bg="#252C2C"
      />
    </section>
  )
}
