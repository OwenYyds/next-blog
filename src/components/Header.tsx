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
import IsHeaderShow from './IsHeaderShow'

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blog/list' },
  { id: 3, name: 'About', path: '/about' },
]

export default function Header() {
  const { isUserLoggedIn } = useUserInfo()
  const pathname = usePathname()

  const { navRef, showNav } = IsHeaderShow()

  return (
    <>
      <Navbar
        ref={navRef}
        fluid
        rounded
        className={`w-full mb-5 bg-opacity-35 backdrop-blur-md z-50 
          transition-all duration-1000 ease-in-out 
          ${showNav ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <Navbar.Brand as={Link} href="/">
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
        <Button
          className="hidden"
          name="Write"
          icon={<GiNotebook />}
          duoTone="purpleToBlue"
        />
        <Button name="Login" duoTone="tealToLime" />
        <DarkThemeToggle />
        <Navbar.Toggle />
      </Navbar>
    </>
  )
}
