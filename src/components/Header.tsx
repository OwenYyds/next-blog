'use client'

import { DarkThemeToggle, Navbar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import brand from '@assets/blogging.png'
import UserAvatar from './user/UserAvatar'
import { useUserInfo } from '@/hooks'
import Button from './Button'
import { GiNotebook } from 'react-icons/gi'
import { usePathname } from 'next/navigation'

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blog/list' },
  { id: 3, name: 'About', path: '/about' },
]

export default function Header() {
  const { isUserLoggedIn } = useUserInfo()
  const pathname = usePathname()

  return (
    <>
      <Navbar
        fluid
        rounded
        className="fixed w-full bg-opacity-20 backdrop-blur-md z-50"
      >
        <Navbar.Brand as={Link} href="#">
          <Image src={brand} alt="blog Logo" width={50} height={50} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Owen&apos;s Blog
          </span>
        </Navbar.Brand>
        {isUserLoggedIn && <UserAvatar />}
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <Navbar.Link
              key={link.id}
              href={link.path}
              active={pathname === link.path}
            >
              {link.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
        <Button name="Write" icon={<GiNotebook />} duoTone="purpleToBlue" />
        <DarkThemeToggle />
        <Navbar.Toggle />
      </Navbar>

      {/* to make sure there's no blank space above nav */}
      <div className="h-5 md:h-10 lg:h-12 mb-5"></div>
    </>
  )
}
