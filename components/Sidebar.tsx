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
    <div className='flex h-screen  md:w-[300px]   flex-col gap-2 bg-muted'>
      <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <History className='h-6 w-6' />
          <span className=''>History</span>
        </Link>
      </div>
      <div className='flex-1'>
        <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
          >
            <Activity className='h-4 w-4' />
            Activity
          </Link>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
          >
            <Laptop className='h-4 w-4' />
            Devices
          </Link>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary'
          >
            <BsSearch className='h-4 w-4' />
            Search engine
          </Link>

          <div className=' h-14  border-t  lg:h-[60px] mt-4 '>
            <Link
              href='#'
              className='flex items-center gap-3  mt-4 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <PiWarningCircleFill size={20} />
              About
            </Link>
            <div className='flex items-center justify-between pl-3 mt-4'>
              <div className='flex items-center gap-3'>
                <Moon size={20} className='text-muted-foreground' />
                <span className='text-muted-foreground'> Dark Mode</span>
              </div>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
      <div className='mt-auto p-4'>
        <Link
          href='#'
          className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
        >
          <Settings className='h-4 w-4' />
          Setting
        </Link>
        <Link
          href='#'
          className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
        >
          <MessageCircle className='h-4 w-4' />
          Feedback / Bug
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
