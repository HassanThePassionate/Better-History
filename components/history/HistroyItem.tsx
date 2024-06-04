import Image from "next/image";
import { Button } from "../ui/button";
import { X } from "lucide-react";
interface HistoryProps {
    domains: string;
}
const HistoryItem = ({domains}:HistoryProps) => {
    const domain = domains;
    return ( 
        <div className="flex justify-between relative cursor-pointer hover:bg-[#f4f4f4] p-3 rounded-md transition duration-300 history">
        <div className="flex items-center relative ">
        <Image
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt='img'
          height={22}
          width={22}
          className=' mr-3'
          />
          <div>
            <h3 className="text-[16px]">Better History</h3>
            <p className="text-[12px]">{domain}</p>
          </div>
        </div>
        <div className="text-sm date flex items-center gap-3">
            {
              new Date().toLocaleDateString()
            }
            <div >
            {
               new Date().toLocaleTimeString()
            }
            </div>
        
        </div>
        <div className=" hidden opacity-0 icons">
            <div className="flex items-center gap-4 ">
        <Button  size='sm'>
            More form site
        </Button>
            <X/>
            </div>
     
        </div>
    </div>
     );
}
 
export default HistoryItem;