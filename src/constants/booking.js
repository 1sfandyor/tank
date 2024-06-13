import {v4 as uuidv4} from 'uuid';
import bookTank300 from '../assets/cars/book_tank_300@2x.png'
import bookTank300Retina from '../assets/cars/book_tank_300@2x.png'
import bookTank500 from '../assets/cars/book_tank_500.png'
import bookTank500Retina from '../assets/cars/book_tank_500@2x.png'

export const booking = [
    {
        id: uuidv4(),
        text: "TANK 300.",
        img: bookTank300,
        imgR: bookTank300Retina
    },
    {
        id: uuidv4(),
        text: "TANK 500.",
        img: bookTank500,
        imgR: bookTank500Retina
    }
]