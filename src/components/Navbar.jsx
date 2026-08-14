import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  
  const [menuBuka, setMenuBuka] = useState(false);

  const navbarRef = useRef(null);

  const NavLinkStyle = ({isActive}) => `transition-all duration-300 ${isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600" }`;

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
    <div ref={ navbarRef } className="navbar bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo font-bold text-3xl">
            Website
          </div>
          <div className="menus hidden md:flex gap-10">
            <NavLink to={"/"} className={NavLinkStyle}>Beranda</NavLink>
            <NavLink to={"/about"} className={NavLinkStyle}>Tentang Kami</NavLink>
            <NavLink to={"/speaker"} className={NavLinkStyle}>Pembicara</NavLink>
            <NavLink to={"/kontak"} className={NavLinkStyle}>Kontak Kami</NavLink>
          </div>
          <div className="burger-button md:hidden">
            <button type="button" onClick={() => setMenuBuka(!menuBuka)}>
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </div>
        <div className={`phone-menus md:hidden flex flex-col items-center gap-5 transition-all duration-500 ${ menuBuka ? "opacity-100 max-h-96 pb-3" : "overflow-hidden opacity-0 max-h-0" }`}>
          <NavLink to={"/"} className={NavLinkStyle}>Beranda</NavLink>
          <NavLink to={"/about"} className={NavLinkStyle}>Tentang Kami</NavLink>
          <NavLink to={"/speaker"} className={NavLinkStyle}>Pembicara</NavLink>
          <NavLink to={"/kontak"} className={NavLinkStyle}>Kontak Kami</NavLink>
        </div>
      </div>
    </div>
  )
}