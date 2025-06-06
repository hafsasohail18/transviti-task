import React from 'react'

const Button = ({ text, className = "", icon: Icon }) => {
  return (
    <button 
      className={`
        bg-blue 
        text-white 
        rounded-md 
        hover:bg-blue-700 
        transition
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </button>
  )
}

export default Button