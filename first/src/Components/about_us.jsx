import React from 'react'
import Text_area from './text_button'
import mySVG1 from './svg/work_together.svg';
import mySVG from './svg/connect_team.svg';
const about_us = ({onAdd}) => {
  return (
    <div>
        <div className='text-blue-500 text-h2 font-semibold flex justify-center items-center align-middle'>About Us</div>
        <div className={'flex justify-center align-middle w-[100%] h-[100%] py-10'}>
      <div className={` w-[50%] text-blue-500`}>
      <Text_area btnTxt={'Learn more.'} btn_css= {'blue-500 underline'} btn_full= {false} onClick={onAdd} 
      headline={`headline for the text n1`} 
            headline_txt_css={`text-h3 font-semibold`} 
            text={`some random text to fill the place of the discription .`}
            text_css={`text-p font-xs text-gray `}  onAdd={onAdd}/>
      </div>
      <div className={`w-[30%] justify-center items-center`}>
      <img src={mySVG} alt="My SVG" />
      </div>
      
    
      
    </div>
    <div className={'flex justify-center align-middle w-[100%] h-[100%] py-10'}>
    <div className={` w-[30%] justify-center items-center`}>
      <img src={mySVG1} alt="My SVG" />
      </div>

      <div className={` w-[50%] text-blue-500`}>
      <Text_area btnTxt={'Learn more.'} btn_css= {'blue-500 underline'} btn_full= {false} onClick={onAdd} 
      headline={`headlin for the text 2`} 
            headline_txt_css={`text-h3 font-semibold`} 
            text={`some random text to fill the place of the discription .`}
            text_css={`text-p font-xs text-gray `}  onAdd={onAdd}/>
      </div>
      
      
    </div>
    </div>
  )
}

export default about_us