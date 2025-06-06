import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Calendar = () => {
  return (
    <>
     <div className="w-full max-w-xs bg-white rounded-xl overflow-hidden mt-3">
       <div className="px-4 py-3 flex justify-between items-center">
         <div>
           <div className='text-[16px] font-[600] text-black'>My calendar</div>
           <div className="text-[14px] font-[500] text-gray">Upcoming Interviews</div>
         </div>
         <IoIosArrowDown className="text-xl" />
       </div>
     </div>
    </>
  )
}

export default Calendar