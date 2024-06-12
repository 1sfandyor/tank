import logo from '../../assets/logo.svg';
import { Info } from "../Info/Info";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-start">
            <img className="w-[30.75px] h-10 mr-2.5 lg:w-[53.56px] lg:h-[69.68px] lg:mr-[32.28px]" src={logo} alt="Logo" />

            <div className="flex items-center justify-between w-full relative">
                <div className="flex flex-col">
                    <span className="hidden md:block text-gray lg:text-sm lg:font-medium mb-[11.51px]">
                        Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                    </span>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center ">
                        <h2 className='text-sm mb-[3.51px] font-medium lg:mr-10 lg:text-3xl md:font-bold'>АВТОРУСЬ TANK <span className='md:hidden'>Лосиный Остров</span></h2>
                        <p className='text-xs lg:text-lg font-light text-gray lg:text-white'>Официальный дилер</p>
                    </div>
                </div>
                {
                    screen.width > 768 
                    ? <>
                        <hr className={`hidden md:block my-6 before:content-[''] before:absolute border-none before:left-0 before:w-full before:h-[1px] before:bg-white/20`}/>
                        <Info/>                    
                        </>
                    : <>
                        <p>salom</p>
                    </>
                            
                }

            </div>
            
        </nav>
    )
}

export default Navbar

{/* <hr className={` before:content-[''] before:inline-block before:absolute before:bg-white before:bg-no-repeat before:w-96 before:h-1.5`}/> */}
{/*  */}
