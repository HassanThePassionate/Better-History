import Search from "./Search";

const Navbar = () => {
  return (
    <div className=' p-4 py-3  flex items-center gap-10 border-b border-[#e5e7ec]'>
      <h2>Activity</h2>
      <Search />
    </div>
  );
};

export default Navbar;
