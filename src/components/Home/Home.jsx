import { Button } from '../Button/Button';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <>
            <section className={`w-full h-80 bg-heroMobile bg-no-repeat bg-contain xs:bg-heroLarge md:bg-heroTablet lg:bg-hero lg:bg-cover lg:h-[440px] xl:bg-cover xl:h-[510px] 2xl:h-[700px]`}>
                <div className='hidden h-full md:flex items-center mx-10 lg:mx-20 xl:mx-32 2xl:mx-80'>
                    <div className='md:flex md:flex-col md:items-start  md:justify-center'>
                        <p className='2xl:text-3xl 2xl:mb-2.5 2xl:font-medium'>Улучшим любые условия</p>
                        <h1 className='lg:text-6xl lg:font-bold lg:mb-2.5'> TANK 500</h1>
                        <p className='lg:text-3xl lg:font-medium lg:mb-10'>Осталось всего 5 автомобилей!</p>
                        <Button className={`bg-lightOrange text-black`} px={`pl-[30px] pr-[60px]`} py={`py-[18px]`}>
                            Получить предложение
                        </Button>
                    </div>
                </div>
            </section>

            
            <Counter/>
        </>
    )
}

export default Home