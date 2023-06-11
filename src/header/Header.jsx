
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react"

const Header = () => {
  const [nav,setnav] = useState(false)

  const handleClick = () => setnav(!nav);

  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          Yash Sakre
        </h1>
      </div>


        <ul className="hidden md:flex gap-8">
        <li className='menuList text-[#6f6f6f]'> Home</li>
        <li className='menuList text-[#6f6f6f]'> Projects</li>
        <li className='menuList text-[#6f6f6f]'> About</li>
        <li className='menuList text-[#6f6f6f]'> Contact</li>
        </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile View */}
      <ul className={nav? 'hidden' : "absolute top-0 left-0 h-screen  w-full flex flex-col justify-center items-center"} > 
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> Home</li>
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> Projects</li>
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> About</li>
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> Contact</li>
      </ul>
    </div>

    
  

  )
}

export default Header