import { Moon, Sun } from "lucide-react";

const TimeSlider = () => {
  const numbers = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <div className='flex items-center justify-between mt-7 pb-6 border-b border-[#e5e7ec]'>
      <div>
        <Moon size={22} />
      </div>
      <div>
        <ul className='flex items-center justify-center gap-3'>
          {numbers.map((number) => (
            <li
              key={number}
              className='h-6 w-6 flex items-center justify-center border text-[12px] border-[#ccc] rounded-full'
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Sun size={22} />
      </div>
    </div>
  );
};

export default TimeSlider;
