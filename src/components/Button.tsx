import React from "react";

import { Button as FlowbiteButton } from "flowbite-react";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  duoTone?:
    | "purpleToBlue"
    | "cyanToBlue"
    | "greenToBlue"
    | "purpleToPink"
    | "pinkToOrange"
    | "tealToLime"
    | "redToYellow";
}

export default function Button(props: ButtonProps) {
  const { name, icon, duoTone } = props;

  return (
    <FlowbiteButton gradientDuoTone={duoTone || "purpleToBlue"}>
      {icon}
      {name}
    </FlowbiteButton>
  );
}
