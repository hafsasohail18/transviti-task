import React from 'react'
import CardComponent from '../card/Card'

const SectionHeader = ({ title, buttonText }) => {
  return (
    <div className="flex items-center gap-4 my-3 mt-7 border-t border-gray-200 pt-5">
      <h3 className="text-black text-[18px] font-[500]">{title}</h3>
      <button className="text-blue text-[18px] font-[500] underline hover:no-underline cursor-pointer">{buttonText}</button>
    </div>
  );
};

const JobSections = () => {
   const jobData = {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      posted: "1 day ago",
      applicants: "22 applicants",
      promoted: true,
    };

   const featuredJobs = [...Array(5)].map((_, index) => ({
     ...jobData,
     id: index + 1
   }));

   const recommendedJobs = [...Array(10)].map((_, index) => ({
     ...jobData,
     id: index + 1
   }));

   const latestJobs = [...Array(10)].map((_, index) => ({
     ...jobData,
     id: index + 1
   }));

  return (
    <>
      <SectionHeader title="Featured Jobs" buttonText="See Featured Jobs" />
      <CardComponent featuredJobs={featuredJobs} />
      
      <SectionHeader title="Recommended Jobs" buttonText="See Recommended Jobs" />
      <CardComponent featuredJobs={recommendedJobs} />

      <SectionHeader title="Latest Jobs" buttonText="See Latest Jobs" />
      <CardComponent featuredJobs={latestJobs} />
    </>
  )
}

export default JobSections