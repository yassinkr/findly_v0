import React from 'react';
import Feature from './feature';
import SwipeableViews from 'react-swipeable-views';
const Features = () => {
  const [index, setIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className='flex justify-center align-middle items-center'>
    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      
   
    <div className='flex flex-col items-center justify-center aligne-middle py-24'>
      <div className='flex justify-center items-center aligne-middle w-[80%] space-x-4'>
        <Feature
          headline={'community'}
          text={'Chat with experienced individuals where you can tap into their invaluable knowledge. Benefit from their extensive expertise and receive valuable advice.'}
          circl_color={'bg-blue-500'}
        />
        <Feature
          headline={'jobs'}
          text={'We are here to present you with the most remarkable job opportunities, tailored specifically to your needs. Say goodbye to ENDLESS searching.'}
          circl_color={'bg-blue-400'}
        />
        <Feature
          headline={'internship'}
          text={'We are here to guide you to seamlessly integrate into the real world of work, offering expert assistance to ensure the BEST training internships tailored to your goals.'}
          circl_color={'bg-blue-300'}
        />
        <Feature
          headline={'Recruiters'}
          text={'Elevate your hiring process, top talent efficiently, simplify candidate evaluation, and optimize your recruitment efforts. Say goodbye to the recruitment hassle.'}
          circl_color={'bg-green-500'}
        />
      </div>
    </div>
    </SwipeableViews>
    </div>  
  );
};

export default Features;
