"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {

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
    <nav className="shadow-sm py-4 z-50 sticky top-0 bg-light bg-opacity-90 dark:bg-main-900 dark:bg-opacity-95">
      <div className="container flex items-center justify-between">
        <Link href="/">
            <Image src="/sphenews-logo-light.svg" height="30" width="50" alt="Sphenews Logo Light" className="h-0 dark:h-auto"/>
            <Image src="/sphenews-logo-dark.svg" height="30" width="50" alt="Sphenews Logo Dark" className="h-auto dark:h-0"/>
        </Link>
        <ul className="hidden md:flex items-center gap-5">
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
        <ul className="flex md:hidden">
          <li>
            <button> <span className="bi bi-chevron-left"></span> </button>
            {/* <button> <span className="bi bi-chevron-left"></span> </button> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
