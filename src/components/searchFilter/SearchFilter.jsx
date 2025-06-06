import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import Button from '../primaryButton/Button'

const SearchFilter = () => {
  return (
    <>
    <div className="mt-6 bg-white p-4 rounded-lg flex flex-col 1xl:flex-row gap-4 min-h-[77px]">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="flex-1 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400"
        />
        <div className="relative w-full lg:w-auto">
          <select className="p-2 w-full lg:w-[180px] appearance-none bg-white border-l border-gray-200 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-white text-gray text-center">
            <option className="text-gray-400 text-center">Select Location</option>
            <option className="text-left pl-3">Remote</option>
            <option className="text-left pl-3">New York</option>
            <option className="text-left pl-3">California</option>
          </select>
          <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative w-full lg:w-auto">
          <select className="p-2 w-full lg:w-[180px] appearance-none bg-white border-l border-gray-200 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-white text-gray text-center">
            <option className="text-gray-400 text-center">Job Type</option>
            <option className="text-left pl-3">Full-time</option>
            <option className="text-left pl-3">Part-time</option>
            <option className="text-left pl-3">Contract</option>
          </select>
          <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <Button text="Search" icon={FiSearch} className='h-[37px] min-w-[140px]' />
      </div>
      <div className="">
        <div className="my-5 flex items-center flex-wrap gap-2">
          <span className="text-gray font-[400] text-[14px]">Similar:</span>
          {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-1 font-[400] text-[14px] border-1 border-gray rounded-lg text-sm text-gray hover:bg-gray-100 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchFilter