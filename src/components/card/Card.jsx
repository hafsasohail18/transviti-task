import React from 'react'
import jobImg from '../../assets/jobImg.png'
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { FiBookmark } from 'react-icons/fi';
import Button from '../primaryButton/Button';

const CardComponent = ({featuredJobs}) => {
   

  return (
    <>
        <div className="grid grid-cols-2 sm:grid-cols-3 1xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-6 gap-4 ">
        {featuredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-2 max-w-[182px] min-h-[164px] rounded-lg border border-gray-200 flex flex-col justify-between"
          >
            {job.promoted && (
              <span className="text-[10px] font-[600] text-black mb-1">Promoted</span>
            )}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <img
                  src={jobImg}
                  alt="Teams"
                 
                />
              </div>
              <div>
                <h4 className="text-[14px] font-[500] text-black">{job.title}</h4>
                <p className="text-[12px] font-[500] text-black">{job.company}</p>
              </div>
            </div>
            <div className="text-xs text-gray mb-2 space-y-1 ml-2">
              <div className="flex items-center gap-1 text-[12px] font-[500] text-gray">
                <IoLocationOutline className="text-base" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1 text-[12px] font-[500] text-gray">
                <IoMdTime className="text-base" />
                <span>{job.posted} | </span>
                <span className="text-blue hover:underline cursor-pointer">{job.applicants}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button text="Apply Now" className="text-[12px] h-[34px] flex-1" />
              <button className="p-2 rounded-md hover:bg-gray-50 transition flex items-center justify-center">
                <FiBookmark className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardComponent