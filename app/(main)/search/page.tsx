import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Search() {
  return (
    <div>
      <Navbar text='Search' />
      <div className='flex items-center justify-between py-4 border-b border-[#f3f3f3] dark:border-[#333] '>
        <p className='text-[12px]'>Pssst... try searching for something</p>
        <div className='flex items-center gap-4'>
          <Link href='#' className='underline text-[14px] '>
            Search Tips
          </Link>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300'
              size='sm'
            >
              Export
            </Button>
            <Button
              variant='secondary'
              size='sm'
              className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] text-[10px] dark:hover:bg-[#656565] transition duration-300'
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
