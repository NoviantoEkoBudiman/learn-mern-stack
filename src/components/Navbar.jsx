import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  
  const [menuBuka, setMenuBuka] = useState(false);

  return (
    <div className="navbar bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="logo font-bold text-3xl">
            Website
          </div>
          <div className="menus hidden md:flex gap-10">
            <NavLink to={"/"}>Beranda</NavLink>
            <NavLink to={"/about"}>Tentang Kami</NavLink>
            <NavLink to={"/speaker"}>Pembicara</NavLink>
            <NavLink to={"/kontak"}>Kontak Kami</NavLink>
          </div>
          <div className="burger-button md:hidden">
            <button type="button" onClick={() => setMenuBuka(!menuBuka)}>
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </div>
        <div className={`phone-menus md:hidden flex flex-col items-center gap-5 transition-all duration-500 ${ menuBuka ? "opacity-100 max-h-96 pb-3" : "overflow-hidden opacity-0 max-h-0" }`}>
          <NavLink to={"/"}>Beranda</NavLink>
          <NavLink to={"/about"}>Tentang Kami</NavLink>
          <NavLink to={"/speaker"}>Pembicara</NavLink>
          <NavLink to={"/kontak"}>Kontak Kami</NavLink>
        </div>
      </div>
    </div>
  )
}