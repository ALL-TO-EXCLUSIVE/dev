import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
    
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="h-20 w-full flex items-center justify-between  px-10 fixed backdrop-blur-sm bg-black/50 z-20">
    <h1 className="text-2xl font-[poppins]">Dev.</h1>
    <button  className={`text-4xl z-10  ${showNavbar && 'text-black' || 'text-white'}`} onClick={handleShowNavbar}>
      <HiOutlineMenuAlt4 />
    </button>
  <div id="navlinks" className={`w-[50vw] text-4xl pl-10 lg:text-6xl lg:pl-[100px] shadow-lg h-screen flex flex-col items-start justify-center gap-10 fixed  z-[2] bg-white text-black  ${showNavbar && 'activenav' || 'notactivenav'}`}>
    <Link className="" href="/">Home</Link>
    <Link className="" href="">Projects</Link>
    <Link className="" href="">Contact</Link>
  </div>
  </nav>
  )
}

export default Navbar