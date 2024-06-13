import { Button } from "../Button/Button"

export const CarsInfo = ({img, gallery, color, title, info, features, showcaseThumb, bg})  => {

  return (
    <section className="xl:py-20 py-10" style={{backgroundColor: bg}}>

      <div className="xl:flex container md:px-5 xl:items-center">
        {/* IMG & COLORS */}
        <div className="xl:flex">
          
          {/* IMG BADGE */}
          <div className="relative">
            <img className="relative top-9 right-8" src={img} alt="" />
            <span className="absolute rotate bg-lightOrange px-2 py-2 rounded-xl top-10 right-10 text-black w-[130px] h-[60px] text-center text-sm font-medium leading-[110%] rotate-[15.13deg]	xl:w-40 xl:h-16 xl:top-28 xl:right-40">Осталось 5 автомобилей по спец цене</span>
          </div>

          {/* COLORS */}
          <ul className="flex relative items-center justify-center mb-6 xl:flex-col gap-4">
          {
            color.map((item, i) => {
              return(
                <li className={`w-7 h-7 rounded-full block mr-3 last:mr-0 xl:mr-0 `} style={{ backgroundColor: item }} key={1}></li>
              )
            })
          }
          </ul>
        </div>

        {/* CONTENT DATA */}
        <div className="flex flex-col lg:flex-row xl:flex-col items-start xl:-order-1 ">
          <div className="w-full flex flex-col justify-center item-start">
            <small className="text-base text-lightOrange font-medium mb-3">Только в АВТОРУСЬ!</small>
            <h2 className="text-3xl font-bold leading-[110%] mb-3">{title}</h2>
            <p className="text-2xl font-medium leading-[110%] mb-1">{info}</p>
            <div className="bg-error text-white text-base font-medium px-11 rounded-xl   mb-6 text-center lg:self-start xl:mb-10">Ограниченное предложение!</div>
          </div>
          <div className="w-full ">
            <Button className={`bg-lightOrange text-black mb-2.5 lg:w-full`}>
              <span className="md:text-nowrap after:inline-block after:w-4 after:h-4 after:left-5 after:top-1 after:relative after:bg-no-repeat after:bg-[url('/src/assets/icons/right.svg')]">Узнать стоимость по акции</span>
              </Button>
            <Button className={`bg-transparent border-[1px] mb-2.5 border-lightOrange text-white lg:w-full`}>
              <span className="md:text-nowrap after:inline-block after:w-4 after:h-4 after:left-5 after:top-1 after:relative after:bg-no-repeat after:bg-[url('/src/assets/icons/rightWhite.svg')]">Тест-драйв</span>
              </Button>
            <Button className={`bg-transparent border-[1px] mb-6 border-lightOrange text-white lg:w-full`}>
              <span className="md:text-nowrap after:inline-block after:w-4 after:h-4 after:left-5 after:top-1 after:relative after:bg-no-repeat after:bg-[url('/src/assets/icons/rightWhite.svg')]">Рассчитать кредит</span>
              </Button>
          </div>
        </div>
      </div>

      <ul className="flex flex-col w-full mb-6 xl:flex-row container md:px-5">
            {
              features.map(item => {
                return(
                  <li className="flex items-center bg-black mb-1 px-4 py-4 rounded-xl w-full xl:mr-6" key={item.id}>
                    <img className="mr-4" src={item.img} alt="" />
                    <p className="text-base w-44">{item.text}</p>
                  </li>
                )
              })
            }
      </ul>

      <div className="w-full overflow-x-hidden container md:px-5">
            <ul className="flex w-full gap-6 lg:justify-center">
              {
                showcaseThumb.map(img => {
                  return(
                    <li className="w-[120px] xl:w-1/5" key={img.item}>
                      <img className="w-full rounded-2xl cursor-pointer" src={img} alt="" />
                    </li>
                  )
                })
              }
            </ul>
      </div>
    </section>
  )
}
