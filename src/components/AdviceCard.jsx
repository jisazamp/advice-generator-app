import { useState, useEffect } from 'react';

import Separator from '../images/pattern-divider-mobile.svg';
import IconDice from '../images/icon-dice.svg';
import Spinner from './layout/Spinner';

const AdviceCard = () => {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    setLoading(true);
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip);
    setLoading(false);
  };

  return (
    <article className='flex flex-col relative items-center card w-[343px] lg:w-[540px] rounded-md'>
      <div>
        {loading ? (
          <div className='flex h-72 flex-col justify-center items-center'>
            <Spinner />
          </div>
        ) : (
          <>
            <p className='mt-10 lg:mt-12 text-[11px] uppercase text-center'>
              Advice #{advice.id}
            </p>

            <h1 className='mt-6 text-2xl text-center pl-4 pr-4 lg:pl-12 lg:pr-12 mb-32'>
              "{advice.advice}"
            </h1>
          </>
        )}
      </div>

      <img
        className='mt-6 absolute bottom-16'
        src={Separator}
        alt='Separator'
      />

      <button
        onClick={() => fetchAdvice()}
        className='flex justify-center absolute -bottom-7 items-center h-16 w-16 rounded-full
        lg:hover:shadow-md  lg:hover:shadow-[#53ffaa] transition-all duration-200 ease'
      >
        <img src={IconDice} alt='Dice' />
      </button>
    </article>
  );
};

export default AdviceCard;
