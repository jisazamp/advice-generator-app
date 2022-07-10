import Separator from '../images/pattern-divider-mobile.svg';
import IconDice from '../images/icon-dice.svg';

const AdviceCard = () => {
  return (
    <article className='flex flex-col relative items-center card w-[343px] h-[315px] rounded-md'>
      <p className='mt-10 text-[11px] uppercase'>Advice #</p>

      <h1 className='mt-6 text-2xl text-center pl-4 pr-4'>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </h1>

      <img className='mt-6' src={Separator} alt='Separator' />

      <div className='flex justify-center absolute -bottom-7 items-center h-16 w-16 rounded-full'>
        <img src={IconDice} alt='Dice' />
      </div>
    </article>
  );
};

export default AdviceCard;
