import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
  
  const [menuBuka, setMenuBuka] = useState(false);

  const navbarRef = useRef(null);

  const NavLinkStyle = ({isActive}) => `transition-all duration-300 ${isActive ? "text-black font-bold" : "text-gray-700 hover:text-blue-600" }`;

  useEffect(() => {
    const handleClick = (event) => {
      if(navbarRef.current && !navbarRef.current.contains(event.target)){
        setMenuBuka(false);
      }
    }
    document.addEventListener("click", handleClick);

    const handleKey = (event) => {
      if(event.key === "Escape"){
        setMenuBuka(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    }
  }, [])

  return (
    <div ref={ navbarRef } className="navbar bg-white shadow-md sticky z-50 top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo font-bold text-3xl">
            Website
          </div>
          <div className="menus hidden md:flex gap-10">
            <a href="#home" className={NavLinkStyle}>Hompage</a>
            <a href="#about" className={NavLinkStyle}>About Us</a>
            <a href="#team" className={NavLinkStyle}>Our Team</a>
            <a href="#contact" className={NavLinkStyle}>Our Contact</a>
          </div>
          <div className="burger-button md:hidden">
            <button type="button" onClick={() => setMenuBuka(!menuBuka)}>
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </div>
        <div className={`phone-menus md:hidden flex flex-col items-center gap-5 transition-all duration-500 ${ menuBuka ? "opacity-100 max-h-96 pb-3" : "overflow-hidden opacity-0 max-h-0" }`}>
          <a href="#home" className={NavLinkStyle}>Hompage</a>
          <a href="#about" className={NavLinkStyle}>About Us</a>
          <a href="#team" className={NavLinkStyle}>Our Team</a>
          <a href="#contact" className={NavLinkStyle}>Our Contact</a>
        </div>
      </div>
    </div>
  )
}