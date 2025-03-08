"use client";

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import brand from "../assets/blogging.png";

export default function Header() {
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
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://th.bing.com/th/id/OIP.pIP4EcpGMqaai1bhFaWgCQHaLH?rs=1&pid=ImgDetMain"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Owen yang</span>
            <span className="block truncate text-sm font-medium">
              youngwhenball@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
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
    </Navbar>
  );
}
