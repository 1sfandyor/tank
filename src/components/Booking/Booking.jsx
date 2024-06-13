import { Fragment } from "react"
import { booking } from "../../constants/booking"

export const Booking = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-12 lg:mb-14">
      <h2 className="text-center text-3xl lg:mb-10 lg:text-4xl">ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽</h2>
      <ul className="flex">
        {
          booking.map(item => {
            return(
              <li className="flex flex-col lg:mr-6" key={item.id}>
                <img className="w-36 h-20" src={item.img} alt={item.text} srcSet={`${item.img} 1x, ${item.imgR}`} />
                <p className="text-center">{item.text}</p>
              </li>
            )
          })
        }  
      </ul>
    </div>
  )
}
