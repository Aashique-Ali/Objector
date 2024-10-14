import React, { useState } from "react"
import objectorLogo from "../images/objectorLogo.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import hamburger from "../images/hamburger.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="flex justify-between items-center md:bg-secondary bg-transparent md:rounded-full rounded-none md:mx-10 mx-0 py-4 md:py-2 md:pl-10 px-5 md:px-2 font-semibold ">
      <div>
        <img src={objectorLogo} alt="" className="w-[120px]" />
      </div>
      <div>
        <ul className="hidden md:flex justify-center items-center text-white gap-10 text-sm uppercase">
          <NavLink>
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li>about</li>
          </NavLink>
          <NavLink>
            <li>service</li>
          </NavLink>
          <NavLink>
            <li>process</li>
          </NavLink>
          <NavLink>
            <li>client</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <button className="hidden md:block bg-white  py-2 px-8 rounded-full uppercase">
          signup
        </button>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer text-white"
      >
        {nav ? (
          <AiOutlineClose size={18} />
        ) : (
          <img src={hamburger} alt="" className="w-[20xp]" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed uppercase md:hidden right-0 top-[10%] w-[60%] h-full bg-primary ease-in-out duration-500"
            : "w-[60%]  fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink> home</NavLink>
        </li>
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>about</NavLink>
        </li>
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>Service</NavLink>
        </li>

        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>process</NavLink>
        </li>
        <li className="p-4 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>client</NavLink>
        </li>
        <div>
          <button className="bg-white  py-2 px-8 rounded-full uppercase">
            signup
          </button>
        </div>
      </ul>
    </div>
    //     <div className="flex justify-between items-center bg-secondary rounded-full mx-10 py-2 pl-10 px-2 font-semibold">
    //       <div>
    //         <img src={objectorLogo} alt="Logo" className="w-[120px]" />
    //       </div>
    //       <div>
    //         <ul className="flex justify-center items-center text-white uppercase gap-10 text-sm">
    //           <li>home</li>
    //           <li>about</li>
    //           <li>service</li>
    //           <li>process</li>
    //           <li>client</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <button className="bg-white  py-2 px-8 rounded-full uppercase">
    //           signup
    //         </button>
    //       </div>
    //     </div>
  )
}

export default Navbar
