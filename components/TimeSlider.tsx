import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface TimeSliderProps {
  showcase: boolean;
}

const TimeSlider = ({ showcase }: TimeSliderProps) => {
  // Creating an array for hours in the specified order
  const hours = [
    ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12], // 11 PM to 12 AM
    ...[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12], // 11 PM to 12 PM
  ];

  // Function to convert 24-hour format to 12-hour format with AM/PM
  const formatHour = (hour: number) => {
    if (hour === 12) return "12 PM";
    if (hour === 11) return "11 PM";
    if (hour > 11) return `${hour - 12} PM`;
    return `${hour} AM`;
  };

  return (
    <>
      {showcase ? (
        <div className='flex items-center justify-between py-[13px] border-b border-[#f3f3f3] dark:border-[#353535]'>
          <div>
            <Moon size={18} />
          </div>
          <div>
            <ul className='flex items-center justify-center gap-1.5'>
              {hours.map((hour, index) => (
                <li
                  key={index}
                  className='h-[25px] w-[25px] flex items-center justify-center border text-[11px] cursor-pointer bg-[#f9f9f9] dark:bg-[#333] border-[#f3f3f3] transition duration-300 dark:border-[#353535] hover:bg-[#000] hover:text-white dark:hover:bg-[#454545] rounded-full'
                >
                  {hour}
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
