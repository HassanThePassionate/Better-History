import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className=' h-[64px] p-2  flex items-center gap-10 border-b border-[#f5f5f5]'>
      <h2>Activity</h2>
      <Search />
    </div>
  );
};

export default Navbar;
