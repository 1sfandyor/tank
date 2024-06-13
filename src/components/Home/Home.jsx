import { Button } from '../Button/Button';

const Home = () => {
    return (
        <>
            <section className={`flex flex-col relative mb-10`}>
                {/* HERO IMG */}
                <div className='overflow-hidden h-[300px] bg-cover bg-no-repeat bg-heroMobile xs:bg-heroLarge xs:h-[215px] xs:bg-cover xs:bg-[center_bottom_-2rem] md:bg-heroTablet lg:bg-hero lg:bg-cover lg:h-[350px] xl:bg-cover xl:h-[460x] 2xl:h-[530px]'></div>

                {/* CONTENT */}
                <div className='w-auto container px-4 py-5 h-auto md:absolute md:left-5 md:flex flex-col items-center lg:absolute lg:bottom-8 lg:ml-14 xl:bottom-16 xl:ml-20 2xl:ml-44 2xl:bottom-40'>
                    <div className='md:flex md:flex-col md:items-start  md:justify-center'>
                        <p className='2xl:text-3xl 2xl:mb-2.5 2xl:font-medium'>Улучшим любые условия</p>
                        <h1 className='lg:text-6xl lg:font-bold lg:mb-2.5'> TANK 500</h1>
                        <p className='lg:text-3xl lg:font-medium mb-10 lg:mb-10'>Осталось всего 5 автомобилей!</p>
                        <Button className={`bg-lightOrange text-black`} px={`pl-[30px] pr-[60px]`} py={`py-[18px]`}>
                            
                            <span className="md:text-nowrap after:inline-block after:w-4 after:h-4 after:left-5 after:top-1 after:relative after:bg-no-repeat after:bg-[url('/src/assets/icons/right.svg')]">Получить предложение</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home