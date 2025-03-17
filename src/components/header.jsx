'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <div className="text-xl font-bold font-jura font-thin">
          <Link href="/">Meu Site</Link>
        </div>

        {/* Menu para Desktop */}
        <div className="hidden md:flex space-x-6 font-jura font-thin gap-5">
          <NavLink href="/" onClick={closeMenu}>Home</NavLink>
          <NavLink href="/graficos" onClick={closeMenu}>Gráficos</NavLink>
          <NavLink href="/tendencias" onClick={closeMenu}>Tendências</NavLink>
          <NavLink href="/favoritos" onClick={closeMenu}>Favoritos</NavLink>
          <NavLink href="/noticias" onClick={closeMenu}>Notícias</NavLink>
          <NavLink href="/perfil" onClick={closeMenu}>
            <UserIcon />
          </NavLink>
        </div>

        {/* Botão de Menu para Mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu para Mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          {/* Botão para fechar o menu */}
          <button onClick={toggleMenu} className="text-white mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Links do menu mobile */}
          <div className="flex flex-col font-jura font-thin">
            <NavLink href="/" onClick={closeMenu}>
              <span>Home</span>
              <ChevronDownIcon />
            </NavLink>
            <Divider />
            <NavLink href="/graficos" onClick={closeMenu}>
              <span>Gráficos</span>
              <ChevronDownIcon />
            </NavLink>
            <Divider />
            <NavLink href="/tendencias" onClick={closeMenu}>
              <span>Tendências</span>
              <ChevronDownIcon />
            </NavLink>
            <Divider />
            <NavLink href="/favoritos" onClick={closeMenu}>
              <span>Favoritos</span>
              <ChevronDownIcon />
            </NavLink>
            <Divider />
            <NavLink href="/noticias" onClick={closeMenu}>
              <span>Notícias</span>
              <ChevronDownIcon />
            </NavLink>
            <Divider />
            <NavLink href="/perfil"  onClick={closeMenu}>
              <span>Perfil</span>
              <ChevronDownIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative flex items-center justify-between py-2 text-lg hover:text-gray-300 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

const Divider = () => {
  return <hr className="border-t border-gray-700 my-2" />;
};

const ChevronDownIcon = () => {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

const UserIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
    </svg>
  );
};

export default Navbar;