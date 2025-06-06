import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SidebarProfile from '../components/sidebarProfile/SidebarProfile'
import ProfileOptions from '../components/profileOptions/ProfileOptions'
import Calendar from '../components/calendar/Calendar'
import SearchFilter from '../components/searchFilter/SearchFilter'
import JobSections from '../components/jobSection/JobSections'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen flex flex-col md:flex-row bg-main-bg">
                <div className='w-full px-2 sm:px-6 xl:px-12 py-4 sm:py-8 flex flex-col md:flex-row gap-4 md:gap-8'>
                    <div className="max-w-[320px] mx-auto md:mx-0">
                        <SidebarProfile />
                        <ProfileOptions />
                        <Calendar />
                    </div>
                    <div className="w-full px-1 md:px-0 md:flex-1">
                        <div className='text-center md:text-left'>
                            <h2 className="text-[22px] font-[600] text-black">
                                Find your Dream Job, <span className="text-blue text-[22px] font-[600]">Albert!</span>
                            </h2>
                            <p className="text-gray text-[14px] font-[500]">
                                Explore the latest job openings and apply for the best opportunities available today!
                            </p>
                        </div>
                        <SearchFilter />
                        <JobSections />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout