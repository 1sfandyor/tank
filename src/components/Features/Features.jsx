import { features } from "../../constants/features"

export const Features = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mb-14">
        {
          features.map(feature => {
            return(
              <div className="flex items-center border rounded-xl mb-2.5 last:mb-0 lg:mb-0 p-5 sm:justify-center lg:justify-start lg:items-start lg:mr-3 lg:w-1/3">
                <div className="max-w-6 md:w-14 mr-6 lg:mr-4">
                  <img className="w-full " src={feature.img} alt="" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold 2xl:mb-3 ">{feature.title}</h3>
                  <p className="hidden lg:block text-base font-[300] leading-[120%] font-primary">{feature.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
