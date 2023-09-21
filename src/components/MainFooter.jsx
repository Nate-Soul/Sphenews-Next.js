import Link from "next/link"
import Image from "next/image";

const MainFooter = () => {

  const first_links = [
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
    {
      id: 5,
      title: 'Terms of Service',
      url: '/'
    },
    {
      id: 6,
      title: 'Privacy Policy',
      url: '/'
    },
  ];

  return (
    <footer className="bg-main-500 text-white py-10">
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-4xl text-light">Sphenews</h6>
            {/* <Image src="/sphenews-logo.png" alt="Sphenews Logo" width={100} height={70}/> */}
            <p className="font-semibold">The go-to platform for budding authors</p>
            <ul className="flex items-center gap-5 mt-4 text-xl">
              <li><span className="bi-facebook"></span></li>
              <li><span className="bi-youtube"></span></li>
              <li><span className="bi-instagram"></span></li>
              <li><span className="bi-linkedin"></span></li>
            </ul>
          </div>
          <ul className="flex flex-col gap-4">
            {first_links.map(first_link => (
              <Link key={first_link.id} href={first_link.url} className="text-light hover:text-secondary-500">{first_link.title}</Link>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <address>
              123 Sphenews Str, AuthorVille, AV 12345
            </address>
            <Link type="mail" href="contact@sphenews.com" className="text-light hover:text-secondary-500">contact@sphenews.com</Link>
            <Link type="tel" href="+123-456-7890" className="text-light hover:text-secondary-500">(123) 456 7890</Link>
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <p>Sphenews &copy; 2023 | All rights reserved.</p>
          <p>Made with love using Next.js & Django</p>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
