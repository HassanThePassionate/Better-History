import {
  Activity,
  History,
  Laptop,
  MessageCircle,
  Moon,
  Settings,
} from "lucide-react";

import Link from "next/link";
import { PiWarningCircleFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { ModeToggle } from "./ModeButton";

const Sidebar = () => {
  return (
    <div className='flex h-screen  md:w-[250px] flex-col gap-2 bg-[#F9F9F9] dark:bg-[#16171b]'>
      <div className='flex h-14 items-center px-4 lg:h-[60px] lg:px-6'>
        <Link href='/' className=' font-semibold'>
          <span className='text-lg pt-[10px]'>History</span>
        </Link>
      </div>
      <div className='flex-1'>
        <nav className='grid items-start gap-3 px-2 text-sm font-medium lg:px-4'>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-lg px-3 py-2 bg-[#f1f1f1]  dark:bg-[#333] text-[12px]   hover:text-primary'
          >
            <Activity size={20} />
            Activity
          </Link>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-lg px-3 py-2 dark:hover:bg-[#333] hover:bg-[#f1f1f1] text-[12px]  duration-300  transition-all hover:text-primary'
          >
            <Laptop size={20} />
            Devices
          </Link>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-lg  px-3 py-2 dark:hover:bg-[#333] hover:bg-[#f1f1f1] text-[12px] duration-300  transition-all hover:text-primary'
          >
            <BsSearch size={18} />
            Search engine
          </Link>

          <div className=' h-14  border-t border-[#ececec] dark:border-[#353535]  lg:h-[60px] mt-4 '>
            <Link
              href='#'
              className='flex items-center gap-3  mt-4 rounded-lg px-3 py-2 dark:hover:bg-[#333] hover:bg-[#f1f1f1] text-[12px] duration-300  transition-all hover:text-primary'
            >
              <PiWarningCircleFill size={20} />
              About
            </Link>
            <div className='flex items-center justify-between pl-3 mt-4'>
              <div className='flex items-center gap-3'>
                <Moon size={20} className='' />
                <span className='text-[12px]'> Dark Mode</span>
              </div>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
      <div className='mt-auto p-4'>
        <Link
          href='#'
          className='flex items-center gap-3 rounded-lg px-3 py-2 dark:hover:bg-[#333] hover:bg-[#f1f1f1] text-[12px] duration-300  transition-all hover:text-primary'
        >
          <Settings size={20} />
          Setting
        </Link>
        <Link
          href='#'
          className='flex items-center gap-3 rounded-lg px-3 py-2 dark:hover:bg-[#333] hover:bg-[#f1f1f1] text-[12px] duration-300  transition-all hover:text-primary'
        >
          <MessageCircle size={20} />
          Feedback / Bug
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
