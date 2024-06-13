import {v4 as uuidv4} from 'uuid';
import award from '../assets/icons/award.svg'
import clockRewind from '../assets/icons/clockRewind.svg'
import location from '../assets/icons/solidLoc.svg';

export const features = [
    {
        id: uuidv4(),
        title: "Официальный дилер",
        text: "Гарантируем высокое каче обслуживания.",
        img: award
    },
    {
        id: uuidv4(),
        title: "ПОКУПКА АВТО ЗА 1 ДЕНЬ",
        text: "Удобный процесс покупки, включая оформление всех документов.",
        img: clockRewind
    },
    {
        id: uuidv4(),
        title: "ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ",
        text: "Широкий выбор комплектаций, с полным пакетом документов",
        img: location
    },
]