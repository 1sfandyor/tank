import { Link } from "react-router-dom"
import { navItems } from "../../constants/navItems"
import style from './info.module.css';
import { Button } from "../Button/Button";
export const Info = () => {
    return (
        <div className="hidden md:block">
                <ul className="flex items-center justify-between px-8 py-4">
                    {
                        navItems.map(item => {
                            return(
                                <li className={`relative ml-0 last:ml-0 lg:mr-16 lg:last:mr-0 ${style.bgImg} before:text-black
                                    before:content-[''] before:w-4 before:h-4 before:bg-[url('/src/assets/icons/speedometer.svg')]`} key={item.id}>
                                    <Link className='font-medium text-white' to={item.path}>{item.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="flex ">
                    <div className="flex flex-col mr-10">
                        <p className="text-xl font-medium leading-[110%]">+7 (999) 999-99-99</p>
                        <span className="text-gray text-sm font-light text-right before:inline-block before:relative before:w-1.5 before:h-1.5 before:mr-1 before:top-[-1px] before:bg-success before:rounded-full ">Мы на связи</span>
                    </div>

                    <Button className={`bg-lightOrange text-sm font-medium leading-[110%]`} px={`px-8`} py={`py-3.5`}>
                        <span className={`before:inline-block before:w-4 before:h-4 before:-left-3  before:relative before:bg-no-repeat before:bg-[url('/src/assets/icons/incomingCall.svg')]  ${style.bgImg}`}>
                            Заказать звонок
                        </span>
                    </Button>
                </div>
        </div>
    )
}
