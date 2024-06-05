import Search from "./Search";
interface NavbarProps {
  text: string;
}
const Navbar = ({ text }: NavbarProps) => {
  return (
    <div className=' pt-[21px] pb-[13px]  flex items-center gap-10 border-b border-[#f3f3f3] dark:border-[#353535]'>
      <h2 className=' text-lg font-medium'>{text}</h2>
      <Search />
    </div>
  );
};

export default Navbar;
