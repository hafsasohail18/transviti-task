import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { IoMenu } from 'react-icons/io5';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { Input } from 'antd';
import searchIcon from '../../assets/searchIcon.png';
import Button from '../primaryButton/Button';

const navLinks = [
  { name: 'Top Companies', path: '/top-companies' },
  { name: 'Job Tracker', path: '/job-tracker' },
  { name: 'My Calendar', path: '/calendar' },
  { name: 'Documents', path: '/documents' },
  { name: 'Messages', path: '/messages' },
  { name: 'Notifications', path: '/notifications' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow px-6 xl:px-12 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5 2xl:space-x-8">
          <img src={logo} alt="Logo" />
          <span className="text-[16px] font-[600] md:text-[14px] lg:text-[16px] text-blue">Find Jobs</span>
          <ul className="hidden lg:flex space-x-5 2xl:space-x-7 text-gray font-[500] text-[16px] md:text-[14px] xl:text-[14px] xxl:text-[16px]">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-blue cursor-pointer">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-3 2xl:space-x-4">
          <div className="relative w-full lg:w-[180px] xl:w-[241px] h-[39px] hidden lg:block">
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full pl-10 pr-3 text-gray font-[500] rounded text-sm bg-search focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link to="/resume-builder" className="hidden lg:block">
            <Button text="Resume Builder" className='text-[16px] h-[39px] w-[147px]' />
          </Link>
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />

          <button
            className="lg:hidden text-gray-500 hover:text-blue focus:outline-none"
            onClick={toggleMenu}
          >
            <IoMenu size={24} />
          </button>
        </div>
      </div>

      
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } mt-4 space-y-4`}
      >
        <div className="relative w-full h-[39px] mb-4">
          <img
            src={searchIcon}
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pl-10 pr-3 text-gray font-[500] rounded text-sm bg-search focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <ul className="space-y-4 text-gray font-[500] text-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block hover:text-blue cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/resume-builder" className="block">
          <Button text="Resume Builder" className='text-[16px] w-full h-[39px]' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
