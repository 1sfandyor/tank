import {v4 as uuidv4} from 'uuid';
import setting from '../assets/icons/gear.svg'
import speed from '../assets/icons/speedometer.svg'
import location from '../assets/icons/solidLoc.svg';
import time from '../assets/icons/clock.svg';

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


export const work = [
    {
        id: uuidv4(),
        text: 'Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)',
        path: '#',
        img: location
    },
    {
        id: uuidv4(),
        text: 'Ежедневно с 09:00 до 21:00',
        path: '#',
        img: time
    }
    
]