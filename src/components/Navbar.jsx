"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {

  const { darkMode } = useContext(ThemeContext);

  const currentUrl = usePathname();

  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'About',
      url: '/about'
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog'
    },
    {
      id: 4,
      title: 'Contact',
      url: '/contact'
    },
  ];

  return (
    <nav className="shadow-sm py-4 z-50 sticky top-0 bg-light dark:bg-main-500 bg-opacity-90 dark:bg-opacity-90">
      <div className="container flex items-center justify-between">
        <Link href="/">
          {darkMode ? (
            <Image src="/sphenews-logo-white.svg" height="30" width="50" alt="Sphenews Logo" className="h-auto"/>
            ) : (
            <Image src="/sphenews-logo.svg" height="30" width="50" alt="Sphenews Logo" className="h-auto"/>
          )}
        </Link>
        <ul className="flex items-center gap-5">
          {links.map(link => (
            <Link 
              key={link.id} 
              href={link.url} 
              className={`nav-link ${currentUrl == link.url ? ' current' : ''}`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <ul className="flex items-center gap-5">
          <Link href="/login" className="nav-link">Login</Link>
          <Link href="/register" className="btn btn-sm btn-main">Join Now</Link>
          {/* <Link href="/dashboard" className="nav-link"><span className="bi-person"></span> Kohnaj </Link>
          <Link 
            href="/dashboard" 
            className="inline-flex justify-center items-center w-8 h-8 rounded-full btn-main"
          >
            <span className="bi-pen"></span>
          </Link> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
