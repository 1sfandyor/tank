import { Button } from '../Button/Button';
import style from './Counter.module.css';
import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const targetDate = new Date('2024-06-15T00:00:00');
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const refs = {
    days: useRef(),
    hours: useRef(),
    minutes: useRef(),
    seconds: useRef(),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const maxValues = {
      days: 365,
      hours: 24,
      minutes: 60,
      seconds: 60,
    };

    const radius = 30;
    const circumference = 2 * Math.PI * radius;

    Object.keys(refs).forEach(key => {
      const offset = circumference + (circumference * timeLeft[key]) / maxValues[key];
      if (refs[key].current) {
        refs[key].current.style.strokeDashoffset = offset;
      }
    });

    return () => clearTimeout(timer);
  }, [timeLeft]);
  //  
  return (
      <div className="flex flex-col md:w-auto lg:flex-row lg:justify-between justify-center items-center bg-semiDarkCyan rounded-xl px-4 py-5 mb-16">

        {/* TEXT */}
      <h2 className='text-2xl xl:text-4xl font-bold mb-6 lg:mb-0 xl:gtext-3xl xlg:w-44 xl:w-80'>Срок действия спецпредложения:</h2>

      <div className='flex mb-6 lg:mb-0 lg:mx-5 '>
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="text-center relative flex xs:mx-1 lg:my-1.5 2xl:my-2.5">  
            <svg className="w-[70px] h-[70px] rotate-[270deg]">
              <circle className={`${style.counter} lg:!stroke-darkGray`} cy={36} cx={36} r={30} strokeWidth={10}></circle>
              <circle
                className={` lg:!stroke-lightOrange `}
                ref={refs[interval]}
                id={interval}
                cy={36}
                cx={36}
                r={30}
                strokeWidth={10}
                style={{ strokeDasharray: 2 * Math.PI * 30 }}
              ></circle>
            </svg>
            {
              interval == 'seconds' ? null : <span className='hidden xs:flex xs:absolute xs:left-[72px] xs:self-center xs:text-xl lg:text-3xl lg:left-[70px] 2xl:text-4xl'>:</span>
            }
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-white leading-[110%]">
                {timeLeft[interval]}
              </div>
              <div className="text-[10px] text-white font-light">{interval == 'days' ? 'дня' : interval == 'hours' ? 'часов' : interval == 'minutes' ? 'минут' : 'секунд'}</div>
            </div>
          </div>
          ))}
        </div>

        <Button className={`bg-lightOrange text-black text-sm sm:w-auto`} py={`py-5`} px={`px-8`} >
          <span className="md:text-nowrap after:inline-block after:w-4 after:h-4 after:left-5 after:top-1 after:relative after:bg-no-repeat after:bg-[url('/src/assets/icons/right.svg')]">Узнать цену с выгодами</span>
          </Button>
      </div>
  );
};

export default Counter;

