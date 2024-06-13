import { Button } from '../Button/Button';
import style from './Counter.module.css';
import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const difference = +new Date('2024-06-15T00:00:00') - +new Date();

  const calculateTimeLeft = () => {
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
    
    Object.keys(refs).map(key => {
      key == 'days' 
        ? refs[key].current.style.strokeDashoffset = 440 + (440 * timeLeft[key]) / 365
        : key == 'hours' 
        ? refs[key].current.style.strokeDashoffset = 440 + (440 * timeLeft[key]) / 24
        : key == 'minutes'
        ? refs[key].current.style.strokeDashoffset = 440 + (440 * timeLeft[key]) / 60
        : refs[key].current.style.strokeDashoffset = 440 + (440 * timeLeft[key]) / 60
    })

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex justify-center items-center mt-4">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="text-center relative flex">
          <svg className="w-36 h-36 rotate-[270deg]">
            <circle className={style.counter} cy={72} cx={70} r={70}></circle>
            <circle
              className={style.counter}
              ref={refs[interval]}
              id={interval}
              cy={72}
              cx={70}
              r={70}
            ></circle>
          </svg>

          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-white">
              {timeLeft[interval]}
            </div>
            <div className="text-xs text-gray-400">{interval == 'days' ? 'дня' : interval == 'hours' ? 'часов' : interval == 'minutes' ? 'минут' : 'секунд'}</div>
          </div>
        </div>
      ))}
      <Button className={`bg-lightOrange text-black`}>Узнать цену с выгодами</Button>
    </div>
  );
};

export default Counter;
