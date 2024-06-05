import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
interface TimeSliderProps {
  showcase: boolean;
}
const TimeSlider = ({ showcase }: TimeSliderProps) => {
  const numbers = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <>
      {showcase ? (
        <div className='flex items-center justify-between py-[13px] border-b border-[#f3f3f3] dark:border-[#353535]'>
          <div>
            <Moon size={18} />
          </div>
          <div>
            <ul className='flex items-center justify-center gap-1.5'>
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
      ) : (
        <div className='flex gap-4 py-[13px] border-b border-[#f3f3f3] dark:border-[#353535]'>
          <Button
            variant='secondary'
            className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] dark:hover:bg-[#656565] transition duration-300'
          >
            Desktop-De390232
          </Button>
          <Button
            variant='secondary'
            className='dark:bg-[#353535] dark:text-white hover:bg-[#f1f1f1] dark:hover:bg-[#656565] transition duration-300'
          >
            Techno-Ch6i
          </Button>
        </div>
      )}
    </>
  );
};

export default TimeSlider;
