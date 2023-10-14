import React from 'react'


const Button = ({ full, text, color, onClick ,size }) => {
    const colorClass = full ? 'bg-blue-500 px-4' : 'bg-transparent ';
    const hoverClass = full ? 'hover:bg-blue-700' : 'hover:underline';
  
    return (
      <button
        className={`inline-flex justify-center py-2 rounded-3xl font-inter font-semibold text-h6 sm:text-xs md:text-sm lg:text-md xl:text-xl ${color} ${colorClass} ${hoverClass}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
}

export default Button