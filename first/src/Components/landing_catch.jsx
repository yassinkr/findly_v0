import React from 'react'
import Text_area from './text_button'
import mySVG from './svg/landing_illu.svg';
const AddTask = ({order_illu ,order_text,onAdd}) => {

  return (
    <div className={'flex justify-center align-middle w-[100%] h-[100%] py-10'}>
      <div className={`flex ${order_text} w-[50%] text-blue-500`}>
      <Text_area btnTxt={'Get Started'} btn_css= {'text-white'} btn_full= {true} onClick={onAdd} 
      headline={`Ready to level up your career?
            Seeking a job, internship, or employer 
            with the best resume? Look no further`} 
            headline_txt_css={`text-h2 font-extralight`} 
            text={`Let's make it happen !`}
            text_css={`text-h2 font-bold `}  onAdd={onAdd}/>
      </div>
      <div className={`flex ${order_illu} w-[30%] justify-center items-center`}>
      <img src={mySVG} alt="My SVG" />
      </div>
      
    </div>
    ) 
  
}

export default AddTask