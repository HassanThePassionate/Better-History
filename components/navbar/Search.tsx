"use client";
import { Input } from "@/components/ui/input";
import { RootState } from "@/redux/store/store";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const Search = () => {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  return (
    <div className='flex items-center border border-[#f3f3f3] dark:border-[#353535] bg-[#f9f9f9] dark:bg-[#101117] p-2 rounded'>
      <IoMdSearch size={16} className='mr-1.5 opacity-40' />
      <Input
        placeholder='Search title or url '
        className={`  ${fontSize === "small" ? "text-[12px]" : ""}  ${
          fontSize === "medium" ? "text-[13px]" : ""
        } ${fontSize === "large" ? "text-[14px]" : ""} 
         bg-transparent flex-1 outline-none border-none`}
      />
    </div>
  );
};

export default Search;
