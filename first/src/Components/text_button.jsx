import React from 'react';
import Button from './button';

const TextButton = ({ text, headline, btn_full,btn_css, btnTxt ,onAdd, headline_txt_css, text_css }) => {
  return (
    <div className={' grid px-10 w-[100%] h-[70%] py-10'}>
        <div className={`text-small sm:text-md md:text-xl lg:text-3xl xl:text-4xl ${headline_txt_css}`}>
          {headline}
        </div>
        <div className={`text-small sm:text-md md:text-xl lg:text-3xl xl:text-4xl ${text_css}`}>{text}</div>
      
     <div className='align-left items-top py-2'> <Button full={btn_full} text={btnTxt} color={btn_css} onClick={onAdd} size={'p'} />
     </div>
     </div>
  );
};

export default TextButton;
