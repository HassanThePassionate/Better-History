import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar text='About' />
      <div className='flex items-center justify-center text-center flex-col text-sm pt-[80px]'>
        <Image
          src='/icon128.png'
          width={128}
          height={128}
          alt='img'
          className='pb-4'
        />
        <h3>Version 5.0.1</h3>
        <p className='m-4 w-[60%]'>
          A better look at your browsing history. The best searching, the
          sharpest interface, and the most useful filters - for your history.
        </p>
        <p>&copy; 2024 Better History. All rights reserved.</p>
      </div>
    </div>
  );
}
