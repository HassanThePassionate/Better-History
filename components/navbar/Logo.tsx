import Image from "next/image";
const Logo = () => {
    return ( 
        <div className='flex items-center mr-[15px] pl-[40px]'>
        <Image
          src='https://lh3.googleusercontent.com/Z1ZDmabP_cyy_XaCyn7QB8lLeLNZf0QBLUi4K0ja5JIiASSuhcyrFhW3_0Bp3Iu1X7tTIfW5u9p1h1CzIAc-b-7-NA=s60'
          alt='img'
          height={32}
          width={32}
          className=' mr-3'
        />
        <span className="text-[17.6px] font-medium text-[#5c5f5e]">Better History</span>
      </div>
     );
}
 
export default Logo;