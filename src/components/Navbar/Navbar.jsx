import logo from '../../assets/logo.svg';
import { Button } from '../Button/Button';
import { Info } from "../Info/Info";
import burger from '../../assets/icons/menu.svg';
import call from  '../../assets/icons/calling.svg';
import close from  '../../assets/icons/close.svg';
import { useState } from 'react';



const Navbar = () => {

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={showMenu ? 'container md:px-5 flex items-center justify-between' : 'mx-auto px-4 bg-black flex-col absolute w-full h-full'}>
            
            {/* IMG &  */}
            <div className={`flex items-center  justify-between w-full`}>
                <img className="w-[30.75px] h-10 mr-2.5 lg:w-[53.56px] lg:h-[69.68px] lg:mr-[32.28px]" src={logo} alt="Logo" />

                <div className={ 'flex items-center justify-between md:justify-start w-full relative'}>
                    <div className="flex flex-col md:items-start ">
                    <span className="hidden lg:block text-gray lg:text-[11px] lg:font-medium mb-[11.51px] lg:mb-0 lg:w-[335px]">
                            Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                        </span>
                        <div className="flex flex-col lg:flex-col 2xl:flex-row md:items-center md:justify-center ">
                            <h2 className='text-sm mb-[3.51px] font-medium lg:mr-10 lg:text-3xl md:font-bold'>АВТОРУСЬ TANK <span className='md:hidden'>Лосиный Остров</span></h2>
                            <p className='text-xs lg:text-lg font-light text-gray lg:text-white'>Официальный дилер</p>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div className={showMenu ? 'flex md:hidden' : 'flex md:hidden'}>
                    <Button className={`mr-[13.96px]`} to={'tel:+79999999999'}>
                        <img className='w-[16.8px] h-[16.8px]' src={call} alt="" />
                    </Button>

                    <Button onClick={toggleMenu}>
                        <img src={showMenu ? burger : close} alt="Menu" width={20} height={20}/>
                    </Button>
                </div>
            </div>
            
            <Info showMenu={showMenu}/>
            
        </nav>
    )
}

export default Navbar

{/* <hr className={` before:content-[''] before:inline-block before:absolute before:bg-white before:bg-no-repeat before:w-96 before:h-1.5`}/> */}
{/*  */}
