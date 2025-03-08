import { Dropdown, Avatar, Navbar } from "flowbite-react";
import React from "react";

export default function UserAvatar() {
  return (
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

      <Navbar.Toggle />
    </div>
  );
}
