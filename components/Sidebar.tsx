"use client";
import {
  Activity,
  History,
  Laptop,
  MessageCircle,
  Moon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { ModeToggle } from "./ModeButton";

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const isActive = (path: string) => activeLink === path;

  return (
    <div className='flex h-screen md:w-[250px] flex-col pt-[21px] px-[10px] gap-2 bg-[#F9F9F9] dark:bg-[#16171b]'>
      <div className='flex items-center pl-[20px] pb-[13px]'>
        <Link
          href='/'
          className='font-semibold'
          onClick={() => handleLinkClick("/")}
        >
          <span className='text-lg pt-[10px]'>History</span>
        </Link>
      </div>
      <div className='flex-1'>
        <nav className='grid items-start gap-3  text-sm font-medium '>
          <Link
            href='/'
            className={`flex items-center gap-5 rounded py-[10px] pl-[23px] hover:bg-[#f1f1f1] dark:hover:bg-[#333] ${
              isActive("/") ? "bg-[#f1f1f1] dark:bg-[#333]" : ""
            } text-[13px] hover:text-primary`}
            onClick={() => handleLinkClick("/")}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 -960 960 960'
              fill='currentColor'
              className='text-[#5f6368] dark:text-white'
            >
              <path d='M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-200h215l69 138q5 10 14.5 16t20.5 6q11 0 21-5t15-15l123-215 26 53q5 11 15 16.5t21 5.5h260v200q0 33-23.5 56.5T800-240H160Zm243-245-47-93q-5-10-15-16t-21-6H80v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160H645l-49-98q-5-11-15-16.5t-21-5.5q-11 0-20 5.5T526-700L403-485Z'></path>
            </svg>
            Activity
          </Link>
          <Link
            href='/device'
            className={`flex items-center gap-5 rounded py-[10px] pl-[23px] hover:bg-[#f1f1f1] dark:hover:bg-[#333] ${
              isActive("/device") ? "bg-[#f1f1f1] dark:bg-[#333]" : ""
            } text-[13px] hover:text-primary`}
            onClick={() => handleLinkClick("/device")}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20px'
              viewBox='0 0 24 24'
              width='20px'
              fill='currentColor'
              className='text-[#5f6368] dark:text-white'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M18 10h4v7h-4z' opacity='.3' />
              <path d='M23 8h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7zM4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6z' />
            </svg>
            Devices
          </Link>
          <Link
            href='/search'
            className={`flex items-center gap-5 rounded py-[10px] pl-[23px] hover:bg-[#f1f1f1] dark:hover:bg-[#333] ${
              isActive("/search") ? "bg-[#f1f1f1] dark:bg-[#333]" : ""
            } text-[13px] hover:text-primary`}
            onClick={() => handleLinkClick("/search")}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20px'
              viewBox='0 0 24 24'
              width='20px'
              fill='currentColor'
              className='text-[#5f6368] dark:text-white'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
            </svg>
            Search engine
          </Link>

          <div className=' border-t  border-[#ececec] dark:border-[#353535]  mt-2'>
            <Link
              href='/about'
              className={`flex items-center gap-3 mt-2 rounded py-[10px] pl-[23px] hover:bg-[#f1f1f1] dark:hover:bg-[#333] ${
                isActive("/about") ? "bg-[#f1f1f1] dark:bg-[#333]" : ""
              } text-[13px] hover:text-primary`}
              onClick={() => handleLinkClick("/about")}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20px'
                viewBox='0 0 24 24'
                width='20px'
                fill='currentColor'
                className='text-[#5f6368] dark:text-white'
              >
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' />
              </svg>
              About
            </Link>
            <div className='flex items-center justify-between py-[10px] pr-[10px] cursor-pointer rounded pl-[23px] hover:bg-[#f1f1f1] dark:hover:bg-[#333] mt-2'>
              <div className='flex items-center gap-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  enable-background='new 0 0 24 24'
                  height='20px'
                  viewBox='0 0 24 24'
                  width='20px'
                  fill='currentColor'
                  className='text-[#5f6368] dark:text-white'
                >
                  <rect fill='none' height='24' width='24' />
                  <path d='M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z' />
                </svg>
                <span className='text-[13px]'> Dark Mode</span>
              </div>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
      <div className='mt-auto pb-6'>
        <Link
          href='/settings'
          className={`flex items-center gap-5 rounded py-[10px] pl-[23px] hover:bg-[#f1f1f1] dark:hover:bg-[#333] ${
            isActive("/settings") ? "bg-[#f1f1f1] dark:bg-[#333]" : ""
          } text-[13px] font-semibold hover:text-primary`}
          onClick={() => handleLinkClick("/settings")}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 24 24'
            height='20px'
            viewBox='0 0 24 24'
            width='20px'
            fill='currentColor'
            className='text-[#5f6368] dark:text-white'
          >
            <g>
              <path d='M0,0h24v24H0V0z' fill='none' />
              <path d='M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z' />
            </g>
          </svg>
          Setting
        </Link>
        <Link
          href='mailto:admin@gmail.com'
          className={`flex items-center gap-5 rounded py-[10px] font-semibold pl-[23px] mt-2 hover:bg-[#f1f1f1] dark:hover:bg-[#333] text-[13px] hover:text-primary`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='20px'
            viewBox='0 0 24 24'
            width='20px'
            fill='currentColor'
            className='text-[#5f6368] dark:text-white'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z' />
          </svg>
          Feedback / Bug
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
