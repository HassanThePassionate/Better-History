import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className='flex items-center border border-[#f3f3f3] dark:border-[#353535] bg-[#f9f9f9] dark:bg-[#101117] p-2 rounded'>
      <IoMdSearch size={16} className='mr-1.5 opacity-40' />
      <Input
        placeholder='Search title or url '
        className='bg-transparent flex-1 outline-none border-none'
      />
    </div>
  );
};

export default Search;
