"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import brand from "@assets/blogging.png";
import UserAvatar from "./user/UserAvatar";
import { useUserInfo } from "@/hooks";
import Button from "./Button";
import { GiNotebook } from "react-icons/gi";

export default function Header() {
  const { isUserLoggedIn } = useUserInfo();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="#">
        <Image src={brand} alt="blog Logo" width={50} height={50} />
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
      <Button name="Write" icon={<GiNotebook />} duoTone="purpleToBlue" />
      <DarkThemeToggle />
      <Navbar.Toggle />
    </Navbar>
  );
}
