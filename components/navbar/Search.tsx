import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
const Search = () => {
    return (  
        <div className='relative'>
        <Input
          placeholder='Search History... '
         className="bg-[#f3f3f3] border-none"
        />
        <div className=' absolute top-2.5 left-2'>
          <IoMdSearch size={24} />
        </div>
      </div>
    );
}
 
export default Search ;