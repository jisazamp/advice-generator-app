import { useState, useEffect } from 'react';

import Separator from '../images/pattern-divider-mobile.svg';
import IconDice from '../images/icon-dice.svg';

const AdviceCard = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip);
  };

  return (
    <article className='flex flex-col relative items-center card w-[343px] rounded-md'>
      <p className='mt-10 text-[11px] uppercase'>Advice #{advice.id}</p>

      <h1 className='mt-6 text-2xl text-center pl-4 pr-4 mb-32'>
        "{advice.advice}"
      </h1>

      <img
        className='mt-6 absolute bottom-16'
        src={Separator}
        alt='Separator'
      />

      <button
        onClick={() => fetchAdvice()}
        className='flex justify-center absolute -bottom-7 items-center h-16 w-16 rounded-full'
      >
        <img src={IconDice} alt='Dice' />
      </button>
    </article>
  );
};

export default AdviceCard;
