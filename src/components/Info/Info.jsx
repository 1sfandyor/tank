import { Link } from "react-router-dom"
import { navItems, work } from "../../constants/navItems"
import style from './info.module.css';
import { Button } from "../Button/Button";
export const Info = ({showMenu}) => {
    return (
        <div className={showMenu ? 'hidden md:block ' : 'mt-10'}>
                <div className={showMenu ? 'flex md:hidden flex-col md:flex-row md:items-center md:justify-center ' : 'mb-10'}>
                    <h2 className='text-xl mb-[3.51px] font-bold'>АВТОРУСЬ TANK <span className='md:hidden'>Лосиный Остров</span></h2>
                    <p className='text-xs lg:text-lg font-light text-gray lg:text-white'>Официальный дилер</p>
                </div>

                <div className="flex flex-col">

                    <div className="flex flex-col md:flex-row md:order-1">
                        <div className="flex flex-col items-start mb-10 md:mb-0 lg:mr-10 md:mr-5">
                            <p className="text-3xl lg:text-xl font-medium leading-[110%] md:text-nowrap md:text-base md:m-0">+7 (999) 999-99-99</p>
                            <span className="text-gray text-sm font-light text-left before:inline-block before:relative before:w-1.5 before:h-1.5 before:mr-1 before:top-[-1px] before:bg-success before:rounded-full ">Мы на связи</span>
                        </div>

                        <ul className="flex md:hidden md:order-1 flex-col items-start justify-between lg:px-8 lg:py-4 mb-24 max-w-72 md:max-w-full mb:ml-9">
                            {
                                work.map(work => {
                                    return(
                                        <li className={`relative ml-0 last:ml-0 mb-5 last:mb-0 lg:mr-16 lg:last:mr-0 ${style.bgImg} before:text-black
                                            before:content-[''] before:w-4 before:h-4 before:bg-[url('/src/assets/icons/speedometer.svg')]`} key={work.id}>
                                            <Link className='font-medium text-gray text-base ' to={work.path}>{work.text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>


                        <Button className={`bg-lightOrange text-sm text-black font-medium leading-[110%] mb-11 md:mb-0`} px={`px-8`} py={`py-3.5`}>
                            <span className={`md:text-nowrap before:inline-block before:w-4 before:h-4 before:-left-3 before:relative before:bg-no-repeat before:bg-[url('/src/assets/icons/incomingCall.svg')]  ${style.bgImg}`}>
                                Заказать звонок
                            </span>
                        </Button>
                    </div>

                                    
                <ul className="flex flex-col md:hidden lg:flex lg:flex-row items-center justify-between px-8 py-4 ">
                    {
                        navItems.map(item => {
                            return(
                                <li className={`relative ml-0 last:ml-0 mb-7 md:mb-0 last:mb-0 lg:mr-16 lg:last:mr-0 ${style.bgImg} before:text-black
                                    before:content-[''] before:w-4 before:h-4 before:bg-[url('/src/assets/icons/speedometer.svg')]`} key={item.id}>
                                    <Link className='font-medium text-white' to={item.path}>{item.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
        </div>
    )
}
