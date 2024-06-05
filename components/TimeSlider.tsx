import { Moon, Sun } from "lucide-react";

const TimeSlider = () => {
  const numbers = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <div className='flex items-center justify-between py-[13px] border-b border-[#f3f3f3] dark:border-[#353535]'>
      <div>
        <Moon size={18} />
      </div>
      <div>
        <ul className='flex items-center justify-center gap-3'>
          {numbers.map((number) => (
            <li
              key={number}
              className=' h-[25px] w-[25px] flex items-center justify-center border text-[11px] cursor-pointer bg-[#f9f9f9] dark:bg-[#333]   border-[#f3f3f3] transition duration-300 dark:border-[#353535] hover:bg-[#000] hover:text-white dark:hover:bg-[#454545] rounded-full'
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Sun size={18} />
      </div>
    </div>
  );
};

export default TimeSlider;
