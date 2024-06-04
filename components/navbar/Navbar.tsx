import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (  <div className=' h-[64px] p-2  flex items-center justify-between'>
    <div className=' flex items-center h-[64px] '>
      <div className='flex items-center mr-[35px] pl-[40px]'>
        <Image
          src='https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg'
          alt='img'
          height={32}
          width={32}
          className=' mr-3'
        />
        <span className="text-[17.6px] font-medium text-[#5c5f5e]">chrome web store</span>
      </div>
      <div>
        <ul className='flex items-center h-[64px] text-[14.2px] leading-6 tracking-normal transform-none font-semibold text-[#5c5f5e]'>
          <li className="px-4">
            <Link href='/'>Discover</Link>
          </li>
          <li className="px-4">
            <Link href='/'>Extensions</Link>
          </li>
          <li className="px-4">
            <Link href='/'>Themes</Link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div className='relative'>
        <Input
          placeholder='Search extensions and themes '
         className="bg-[#f3f3f3] border-none"
        />
        <div className=' absolute top-2.5 left-2'>
          <IoMdSearch size={24} />
        </div>
      </div>
    </div>
  </div> );
}
 
export default Navbar;