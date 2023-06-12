
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react"

const Header = () => {
  const [nav,setnav] = useState(false)

  const handleClick = () => setnav(!nav);

 
  return (
    <div className='navBar flex justify-between items-center py-[1rem] sticky top-0 z-[1000] bg-white'>
      <div className='logoDiv'>
        <h1 className='logo text-[2rem] text-blueColor'>
          Ys.
        </h1>
      </div>


        <ul className="hidden md:flex gap-8">
        <li className='menuList text-[#6f6f6f] text-3rem'> Home</li>
        <li className='menuList text-[#6f6f6f] text-3rem'> Projects</li>
        <li className='menuList text-[#6f6f6f] text-3rem'> About</li>
        <li className='menuList text-[#6f6f6f] text-3rem'> Contact</li>
        </ul>


    
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile View */}
      <ul className={!nav? 'hidden' : "absolute top-0 left-0 h-screen  w-full flex flex-col justify-center items-center bg-white"} > 
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> Home</li>
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> Projects</li>
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> About</li>
        <li className='menuList text-[#6f6f6f] py-6 text-3px'> Contact</li>
      </ul>
        
    </div>

    
  
    
  )
}

export default Header