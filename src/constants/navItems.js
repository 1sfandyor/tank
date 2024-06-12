import {v4 as uuidv4} from 'uuid';
import setting from '../assets/icons/gear.svg'
import speed from '../assets/icons/speedometer.svg'

export const navItems = [
    {
        id: uuidv4(),
        text: 'Записаться на сервис',
        path: '#',
        img: setting
    },
    {
        id: uuidv4(),
        text: 'Тест-драйв',
        path: '#',
        img: speed
    }
    
]