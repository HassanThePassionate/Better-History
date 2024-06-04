import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = () => {
    return (  <div className=' h-[64px] p-2 max-w-[1024px]  flex items-center justify-between border-b border-[#f5f5f5]'>
     <Logo/>
     <Search/>
  <Menu/>
  </div> );
}
 
export default Navbar;