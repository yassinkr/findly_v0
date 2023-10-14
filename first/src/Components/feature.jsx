import Button from './button'

const feature = ({ headline, text, circl_color , onAdd}) => {

  return (
    <div className="rounded-xxl bg-blue-200 p-6 relative">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 rounded-full ${circl_color} absolute top-[-16px] left-5`}></div>
      <div className="grid pt-2 sm:pt-4 md:pt-6  lg:pt-8  xl:pt-8  ">
      
        <div className="text-h5 sm:text-md md:text-lg lg:text-lg xl:text-lg font-semibold">{headline}</div>
        <div className="text-h6 sm:text-xs md:text-sm lg:text-sm xl:text-sm font-xs leading-tight text-black text-opacity-[60%]">{text}</div>
        <div className='aligne-left'>
        <Button full={false} text={'Learn more.'} color={'text-blue-500  aligne-left'} onClick={onAdd} size={'p'} />
        </div>
      </div>
    </div>
  );
};

export default feature;
