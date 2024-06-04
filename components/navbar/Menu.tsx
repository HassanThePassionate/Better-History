import Link from "next/link";

const Menu = () => {
    return ( 
        <div>
        <ul className='flex items-center h-[64px] text-[14.2px] leading-6 tracking-normal transform-none font-semibold text-[#5c5f5e]'>
          <li className="px-4">
            <Link href='/'>History</Link>
          </li>
          <li className="px-4">
            <Link href='/'>Bookmarks</Link>
          </li>
          <li className="px-4">
            <Link href='/'>Downloads</Link>
          </li>
        </ul>
      </div>
     );
}
 
export default Menu;