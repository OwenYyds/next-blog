"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import brand from "@assets/blogging.png";
import UserAvatar from "./user/UserAvatar";
import { useUserInfo } from "@/hooks";

export default function Header() {
  const { isUserLoggedIn } = useUserInfo();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="#">
        <Image
          width={30}
          height={20}
          src={brand}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Owen&apos;s Blog
        </span>
      </Navbar.Brand>
      {isUserLoggedIn && <UserAvatar />}
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Blog
        </Navbar.Link>
        <Navbar.Link href="#">Game</Navbar.Link>
        <Navbar.Link href="#">Me</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <DarkThemeToggle />
      <Navbar.Toggle />
    </Navbar>
  );
}
