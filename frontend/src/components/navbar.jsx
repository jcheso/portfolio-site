import { Link } from 'gatsby'
import React from 'react'

export const Navbar = () => {
  /* This example requires Tailwind CSS v2.0+ */
  const navigation = [
    { name: 'About', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  return (
    <header className="text-gray-400 body-font sticky top-0 z-50 bg-gray-900 shadow-sm shadow-gray-800">
      <nav
        className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        aria-label="Top"
      >
        <div className="py-2 w-full flex items-center justify-between border-b border-zinc-500 md:border-none">
          <div className="flex items-center w-full">
            <div className="flex w-full text-center md:justify-between justify-center">
              <Link to="#" className="text-2xl font-bold">
                Jarryd Cheso
              </Link>
            </div>
            <div className="hidden ml-10 space-x-8 md:block ">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium hover:text-white "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-2 flex flex-wrap justify-center space-x-6 md:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-zinc-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
